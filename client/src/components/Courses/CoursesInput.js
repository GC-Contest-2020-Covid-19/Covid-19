import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

// redux
import { useDispatch } from 'react-redux'
import { clearCourses, addCourse, changeCourseStatus } from '../../redux/actions/courseActions'

const SERVER_PATH = 'http://127.0.0.1:5000/'

export const CoursesInput = () => {
    
    const dispatch = useDispatch()

    const [query, setQuery] = useState('')
    
    
    const SubmitHandler = (e) =>{
        e.preventDefault()
        dispatch(clearCourses())
        dispatch(changeCourseStatus(true))

        getCoursera(query)
            .then(json => {
                
                if (json === false || json.success === false){
                    dispatch(changeCourseStatus(false))
                    return false
                }

                for (let i = 0; i < json.titles.length; i++){
                    dispatch(addCourse({
                        id: uuidv4(),
                        university: json.universities[i],
                        title: json.titles[i],
                        rating: json.ratings[i],
                        enrollement: json.enrollement[i],
                        difficulty: json.difficulties[i]
                    }))
                }
            })
    }
    
    return (
        <div>
            <form onSubmit={SubmitHandler} className='field custom-ml-5 custom-mr-5 custom-mt-3'>
                <div className="control">
                    <input className='input is-rounded custom-mb-3' type="text" id="time" placeholder="Query" value={query} onChange={(e) => setQuery(e.target.value)}/>
                </div>
                <button type="submit" className='button is-dark'>Search!</button>
            </form>
        </div>
    )
}


function getCoursera(query){
    return fetch(encodeURI(SERVER_PATH + `api/coursera/${query}`), { mode: 'cors' })
    .then(response => {
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        return response
    })    
    .then(response => response.json())
    .catch((error) => {
        console.log(error)
        return false
    })    
}
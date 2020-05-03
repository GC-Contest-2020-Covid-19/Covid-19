import React from 'react'
import { Course } from "./Course";

// redux
import { useSelector } from 'react-redux'

export const CoursesList = () => {
    const courses = useSelector(state => state.courses)

    // something was requested, but nothing was yet loaded
    if (courses.courses.length > 0){
        // request was successful
        if (courses.status === true){
           return (
                <div className='custom-m-5'>
                    <div>{courses.courses.map((c) => (<Course key={c.id} course={c} />))}</div>
                </div>
           )
        }
    }else{
        // loading
        if (courses.status === true){
            return (
                <h3 className='custom-m-5'>Loading...</h3>
            )
        }else{
            // nothing requested
            return(
                <></>
            )
        }
    }
}
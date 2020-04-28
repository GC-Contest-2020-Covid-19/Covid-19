import React, { useState } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { addCharity, clearCharities, changeCharityStatus } from '../../redux/actions/charityActions'

const SERVER_PATH = 'http://127.0.0.1:5000/'

export const CharityInput = () => {
    
    const dispatch = useDispatch()

    // hooks for the input field
    const [state, setState] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        dispatch(clearCharities())
        dispatch(changeCharityStatus(true))
        
        // fetch charities in the inputed city and add them to the store
        getCharities(state)
            .then(json => {
                if (json !== false && json.success !== false){
                    for (let i = 0; i < json.data.length; i++){
                        dispatch(addCharity(createCharity(json.data[i])))
                    }
                }else{
                    dispatch(changeCharityStatus(false))
                }
            })
            .catch((error) => {
                console.log(error)
                dispatch(changeCharityStatus(false))
            })
    }

    return (
        <div>  
            <h3 className='text-3xl text-center'>Charity</h3>
            <p className='text-center mb-2'>We currently only support the USA.</p>
            <form onSubmit={SubmitHandler} className='text-center block mb-8'>
                <input type="text" id="city" placeholder="City..." value={state} onChange={(e) => setState(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

function getCharities(city){
    return fetch(SERVER_PATH + `api/charity/${city}`)
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

function createCharity(json){
    const newCharity = {
        id: json.ein,
        name: json.charityName,
        url: json.websiteURL,
        tagLine: json.tagLine,
        mission: json.mission,
        affiliation: json.irsClassification.affiliation,
        subsection: json.irsClassification.subsection
    }
    return newCharity
}
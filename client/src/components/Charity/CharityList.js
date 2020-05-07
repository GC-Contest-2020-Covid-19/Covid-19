import React from 'react'
import { Charity } from "./Charity";
// redux
import { useSelector } from 'react-redux'

export const CharityList = () => {
    const charity = useSelector(state => state.charity)


    // something was requested, but nothing was yet loaded
    if (charity.charities.length > 0){
        // request was successful
        if (charity.status === true){
           return (
                <div className={'container'}>
                    <div>{charity.charities.map((c) => (<Charity key={c.id} charity={c} />))}</div>
                </div>
           )
        }
    }else{
        // loading
        if (charity.status === true){
            return (
                <h3 className='container'>Loading...</h3>
            )
        }else{
            // nothing requested
            return(
                <></>
            )
        }
    }
}

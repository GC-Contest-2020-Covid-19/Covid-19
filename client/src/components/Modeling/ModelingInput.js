import React, { useState } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { clearModeling, changeModelingS, changeModelingI, changeModelingTime, changeModelingA, changeModelingB } from '../../redux/actions/modelingActions'

export const ModelingInput = () => {
    const dispatch = useDispatch()

    const [s, setS] = useState('')
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [time, setTime] = useState('')
    const [showError, setError] = useState(false)
    
    const SubmitHandler = (e) => {
        e.preventDefault()
        clearModeling()

        if (validNumbers([s, a, b, time])){
            dispatch(changeModelingS(parseFloat(s) / 100))
            dispatch(changeModelingI(1 - (parseFloat(s) / 100)))
            dispatch(changeModelingA(parseFloat(a)))
            dispatch(changeModelingB(parseFloat(b)))
            dispatch(changeModelingTime(Number(time)))
            setError(false)
        }else{
            setError(true)
        }

    }

    return (

        <div className='custom-m-5'>
            <h3 className='is-size-3'>Model</h3>
            <form onSubmit={SubmitHandler} className='field '>
                
                <p className='label'>Healthy Population ({s ? s+'%' : 'select a value'})</p>
                <div class="control">
                    <input className='slider is-circle' type="range" min='0' max='100' value={s} onChange={(e) => setS(e.target.value)}/>
                </div>
                
                <p className='label'>Infection Rate ({a ? a : 'select a value'})</p>
                <div class="control">
                    <input type="range" className='slider is-circle' min='0' max='2' step='0.01' value={a} onChange={(e) => setA(e.target.value)}/>
                </div>
                
                <p className='label'>Recovering Rate ({b ? b : 'select a value'})</p>
                <div class="control">
                    <input type="range" className='slider is-circle' min='0' max='2' step='0.01' value={b} onChange={(e) => setB(e.target.value)}/>
                </div>

                <div class="control">
                    <input className='input is-rounded custom-mb-3' type="text" id="time" placeholder="Days to simulate" value={time} onChange={(e) => setTime(e.target.value)}/>
                </div>

                <button type="submit" className='button is-dark'>Calculate!</button>
            </form>
            {showError && (<p className='is-size-4'>Please input valid numbers.</p>)}
        </div>
    )
}


function validNumbers(n){
    for (let i = 0; i < n.length; i++){
        if(isNaN(n[i]) || n[i] < 0 || n[i] === ''){
            return false
        }
    }
    return true
}
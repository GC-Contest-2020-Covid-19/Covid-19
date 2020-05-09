import React, { useState } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { clearModeling, changeModelingParams } from '../../redux/actions/modelingActions'

export const ModelingInput = () => {
    const dispatch = useDispatch()

    const [showError, setError] = useState(false)

    const [s, setS] = useState(0)
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [testing, setTesting] = useState(0)
    const [lag, setLag] = useState(0)
    const [time, setTime] = useState('')
    const [population, setPopulation] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()
        clearModeling()

        if (validNumbers([s, a, b, time, testing, population])){
            const data = [(parseFloat(s) / 100), (1 - (parseFloat(s) / 100)), parseFloat(a), parseFloat(b), 
                          (parseFloat(testing) / 100), Number(time), Number(lag), Number(population)]
            dispatch(changeModelingParams(data))
            setError(false)
        }else{
            setError(true)
        }
    }

    return (

        <div className='custom-m-5'>
            <h3 className='is-size-3'>Model</h3>
            <form onSubmit={SubmitHandler} className='field '>
                
            
                <div className="control">
                    <input className='input is-rounded custom-mb-3' type="text" id="time" placeholder="Total Population" value={population} onChange={(e) => setPopulation(e.target.value)}/>
                </div>
                
                <p className='label'>Healthy Population ({(s && population) ? s+'% - '+(population*(s/100)).toLocaleString()+' People' : 'select a value'})</p>
                <div className="control">
                    <input className='slider is-circle' type="range" min='0' max='100' step='0.01' value={s} onChange={(e) => setS(e.target.value)}/>
                </div>

                <p className='label'>Infection Rate ({a ? a : 'select a value'})</p>
                <div className="control">
                    <input type="range" className='slider is-circle' min='0' max='2' step='0.01' value={a} onChange={(e) => setA(e.target.value)}/>
                </div>
                
                <p className='label'>Recovering Rate ({b ? b : 'select a value'})</p>
                <div className="control">
                    <input type="range" className='slider is-circle' min='0' max='2' step='0.01' value={b} onChange={(e) => setB(e.target.value)}/>
                </div>

                <p className='label'>Testing Rate ({testing ? testing +'%' : 'select a value'})</p>
                <div className="control">
                    <input className='slider is-circle' type="range" min='0' max='100' step='0.01' value={testing} onChange={(e) => setTesting(e.target.value)}/>
                </div>

                <p className='label'>Lag ({lag ? lag +' Days' : 'select a value'})</p>
                <div className="control">
                    <input className='slider is-circle' type="range" min='0' max='14'  value={lag} onChange={(e) => setLag(e.target.value)}/>
                </div>

                <div className="control">
                    <input className='input is-rounded custom-mb-3' type="text" id="time" placeholder="Days to simulate" value={time} onChange={(e) => setTime(e.target.value)}/>
                </div>

                <button type="submit" className='button is-rounded'>Calculate!</button>

            </form>
            {(a && b) ? (<p><a href="https://en.wikipedia.org/wiki/Basic_reproduction_number">basic reproduction number:</a> {(a / b).toFixed(3)}</p>) : null}
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

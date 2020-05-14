import React from 'react'
import { Line } from 'react-chartjs-2'

// redux
import { useSelector } from 'react-redux'

export const Model = () => {
    
    const model = useSelector(state => state.modeling)
    
    if (model.S !== 0){
        
        /* 
            calculate data
            S'(S, I, a) = -a * S * I
            I'(S, I, a, b) = a * S * I - b * I
            R'(I, b) = b * I 
            C' = (a * S * I)' * testing
        */

        let S = [model.S]
        let I = [model.I]
        let R = [0]
        let C
        if (model.lag === 0){
            C = [model.I * model.testing]
        }else{
            C = [0]
        }

        for (let i = 0; i < model.time; i++){
            S.push((-model.a * S[i] * I[i]) + S[i])
            I.push(((model.a * S[i] * I[i]) - (model.b * I[i])) + I[i])
            R.push((model.b * I[i]) + R[i])
            if (typeof I[i - model.lag] !== 'undefined'){
                C.push(((model.a * S[i-model.lag] * I[i-model.lag]) ) + C[i])
            }else{
                C.push(0)
            }
        }

        for (let i = 0; i < model.time; i++){
            S[i] = (S[i] * model.population)
            I[i] = (I[i] * model.population)
            R[i] = (R[i] * model.population)
            C[i] = (C[i] * model.population)
        }
  
        const data = {
            labels: [...Array(model.time).keys()],
            datasets: [
                {
                    label: "Susceptible",
                    data: S,
                    backgroundColor: [
                        "rgba(33, 56, 205, 0.2)",
                    ],
                    borderColor: [
                        "rgba(33, 56, 205, 1)",
                    ],
                    borderWidth: 1,
                },
                {
                    label: "Infected",
                    data: I,
                    backgroundColor: [
                        "rgba(179, 29, 29, 0.2)",

                    ],
                    borderColor: [
                        "rgba(179, 29, 29, 1)",   
                    ],
                    borderWidth: 1,
                },
                {
                    label: "Recovered",
                    data: R,
                    backgroundColor: [
                        "rgba(00, 255, 00, 0.2)",
                    ],
                    borderColor: [
                        "rgba(00, 255, 00, 1)",         
                    ],
                    borderWidth: 1,
                },
                {
                    label: "Confirmed",
                    data: C,
                    backgroundColor: [
                        "rgba(255, 246, 0, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 246, 0, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        }
        return (
            <div className='custom-ml-5 custom-mr-5'>
                <Line options={{ responsive: true, maintainAspectRatio: false }} data={data} width={chartWidth} height={chartHeight}></Line>
            </div>
        )
    }else{
        return (
            <></>
        )
    }
}

const chartWidth = window.innerWidth * 0.7
const chartHeight = window.innerHeight * 0.4
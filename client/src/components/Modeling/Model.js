import React from 'react'
import { Line } from 'react-chartjs-2'

// redux
import { useSelector } from 'react-redux'

export const Model = () => {
    
    const model = useSelector(state => state.modeling)
    
    if (model.S != 0){
        
        /* 
            calculate data
            S'(S, I, a) = -a * S * I
            I'(S, I, a, b) = a * S * I - b * I
            R'(I, b) = b * I 
        */

        let S = [model.S]
        let I = [model.I]
        let R = [0]

        for (let i = 0; i < model.time; i++){
            S.push((-model.a * S[i] * I[i]) + S[i])
            I.push(((model.a * S[i] * I[i]) - (model.b * I[i])) + I[i])
            R.push((model.b * I[i]) + R[i])
        }
        
        const data = {
            labels: [...Array(model.time).keys()],
            datasets: [
                {
                    label: "Susceptible",
                    data: S,
                    backgroundColor: [
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
                {
                    label: "Infected",
                    data: I,
                    backgroundColor: [
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
                {
                    label: "Recovered",
                    data: R,
                    backgroundColor: [
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        }
        return (
            <div className='custom-ml-5 custom-mr-5' style={lineStyle}>
                <Line options={{ responsive: true }} data={data}></Line>
            </div>
        )
    }else{
        return (
            <></>
        )
    }
}

const lineStyle = {
    width: '70vw',
    heigth: '70vh'
}
/* Get the Location of the User and fetch information afterwards */
import React from 'react'


// redux
import { useDispatch } from 'react-redux'
import { addTestStation, clearTestStations, changeTestStatus, changeTestResults, addTestResult, addFoodBank, 
         changeFoodStatus, changeFoodResults, clearFoodBanks } from '../../redux/actions/mapActions'
import { changeCoordinates, changeUsState, changeCity } from '../../redux/actions/userActions'


const SERVER_PATH = 'http://127.0.0.1:5000/'

export const Input = () => {
    const dispatch = useDispatch()
    
    const HandleClick = () => {
        navigator.geolocation.getCurrentPosition(function(loc){
            
            // set the user's position
            dispatch(changeCoordinates([loc.coords.latitude, loc.coords.longitude]))

            // remove all previous stations
            dispatch(clearTestStations())
            
            // Get the us_state
            fetch(encodeURI(SERVER_PATH + `api/geocoding_reverse/${loc.coords.latitude}/${loc.coords.longitude}`), { mode: 'cors' })
                .then(response => {
                    if (!response.ok){
                        throw new Error('Network response was not ok');
                    }
                    return response
                })
                .then(response => response.json())
                .then((json) => {
                    
                    // check that the person is in the USA
                    if (json[0].country !== 'United States of America'){
                        dispatch(changeTestStatus(false))
                        dispatch(changeTestResults(0))
                        return false
                    }
                    
                    // get the full name of the us_state
                    const state = json[0].state
                    const city = json[0].city

                    // set us_state and city
                    dispatch(changeUsState(state.toLowerCase().replace(' ', '+')))
                    dispatch(changeCity(city))

                    // fetch testStations
                    fetch(`https://covid-19-testing.github.io/locations/${state.toLowerCase().replace(' ', '-')}/complete.json`, { mode: 'cors' })
                        .then(response => {
                            if (!response.ok){
                                throw new Error('Network response was not ok');
                            }
                            return response
                        })
                        .then(response => response.json())
                        .then((json) => {                         
                            // create new testStation objects and add them to the state
                            for(let i = 0; i< json.length; i++){
                                
                                const id = json[i].id
                                const name = json[i].name
                                const address = json[i]['physical_address'][0].address_1
                                const city = json[i]['physical_address'][0].city
                                let phone
                                try{
                                    phone = json[i]['phones'][0].number
                                }catch(e){
                                    phone = 'Not Available'    
                                }
                                // fetch latitude and longitude
                                fetch(encodeURI(SERVER_PATH + `api/geocoding/${city},${address}`), { mode: 'cors' })
                                    .then(response => response.json())
                                    .then(json => {
                                        if (json.success !== 'false'){
                                            const newStation = {
                                                id: id,
                                                name: name,
                                                address: address,
                                                city: city,
                                                phone: phone,
                                                lat: json.data[0].latitude,
                                                lng: json.data[0].longitude,
                                            }
                                            dispatch(addTestStation(newStation)) 
                                        }
                                    })
                                    .catch((error) => {
                                        // update the amount of teststations
                                        dispatch(addTestResult(-1))
                                        console.log(error)
                                    })
                            }
                            dispatch(changeTestStatus(true))
                            dispatch(changeTestResults(json.length))
                        })
                        .catch((error) => {
                            console.log(error)
                            dispatch(clearTestStations())
                            dispatch(changeTestResults(0))
                            dispatch(changeTestStatus(false))
                            return false
                    })

                    // clear previously fetched foodBanks
                    dispatch(clearFoodBanks())

                    // fetch FoodBanks from own api
                    fetch(encodeURI(SERVER_PATH + `api/foodbanks/${city.toLowerCase().replace(' ', '+')}`), { mode: 'cors' })
                        .then(response => {
                            if (!response.ok){
                                throw new Error('Network response was not ok');
                            }
                            return response
                        })    
                        .then(response => response.json())
                        .then(json => {
                            // errorcheck
                            if (json.success === 'false'){
                                throw new Error('No foodbanks found.');
                            }
                            // set amount of results
                            dispatch(changeFoodResults(json.names.length))
                            
                            // loop over arrays and add foodBanks to context
                            for(let i = 0; i < json.names.length; i++){
                                
                                const name = json.names[i]
                                const address = json.addresses[i]
                                const phone = json.phones[i]

                                
                                
                                
                                // fetch latitude and longitude
                                fetch(encodeURI(SERVER_PATH + `api/geocoding/${address}`), { mode: 'cors' })
                                    .then(response => {
                                        if (!response.ok){
                                            throw new Error('Network response was not ok');
                                        }
                                        return response
                                    })
                                    .then(response => response.json())
                                    .then(json => {
                                        const newFoodBank = {
                                            name: name,
                                            address: address,
                                            phone: phone,
                                            lat: json.data[0].latitude,
                                            lng: json.data[0].longitude
                                        }
                                        dispatch(addFoodBank(newFoodBank))
                                    }) 
                                    .catch((error) => {
                                        console.log(error)
                                    })
                            }
                            
                        })
                        .catch((error) => {
                            dispatch(clearFoodBanks())
                            dispatch(changeFoodResults(0))
                            console.log(error)
                            dispatch(changeFoodStatus(false))
                        })

                    .catch((error) => {
                        console.log(error)
                        dispatch(changeTestStatus(false))
                        return false
                    })
                })        
            })
        }

    return (
        <div>
           <button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full mx-auto block'} onClick={ HandleClick }>Fetch information</button>
        </div>       
    )
}


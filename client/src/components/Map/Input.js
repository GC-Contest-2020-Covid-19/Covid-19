/* Get the Location of the User and fetch information afterwards */
import React from 'react'
import { GEO_KEY } from '../../credentials'

// redux
import { useDispatch } from 'react-redux'
import { addTestStation, clearTestStations, changeTestStatus, changeTestResults, addFoodBank, 
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
            fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${GEO_KEY}&location=${loc.coords.latitude},${loc.coords.longitude}`, { mode: 'cors' })
                .then(response => {
                    if (!response.ok){
                        throw new Error('Network response was not ok');
                    }
                    return response
                })
                .then(response => response.json())
                .then((json) => {
                    
                    // check that the person is in the USA
                    if (json.results[0].locations[0].adminArea1 !== 'US'){
                        dispatch(changeTestStatus(false))
                        dispatch(changeTestResults(0))
                        return false
                    }
                    
                    // get the full name of the us_state
                    const state = parseState(json.results[0].locations[0].adminArea3)
                    const city = json.results[0].locations[0].adminArea5

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
                                    if (e !== TypeError){
                                        console.log(e)
                                    }else{
                                        phone = 'Not Available'
                                    }
                                }
                                
                                fetchLocFromAddressAndCity(address, city).then((json) => {
                                    const newStation = {
                                        id: id,
                                        name: name,
                                        address: address,
                                        city: city,
                                        phone: phone,
                                        lat: json[0],
                                        lng: json[1],
                                    }
                                    dispatch(addTestStation(newStation))
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
                    fetch(SERVER_PATH + `api/foodbanks/${city.toLowerCase().replace(' ', '+')}`, { mode: 'cors' })
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
                                throw new Error('Success was false.');
                            }
                            // set amount of results
                            dispatch(changeFoodResults(json.names.length))
                            
                            // loop over arrays and add foodBanks to context
                            for(let i = 0; i < json.names.length; i++){
                                
                                const name = json.names[i]
                                const address = json.addresses[i]
                                const phone = json.phones[i]

                                // fech lat and lng
                                fetchLocFromAddress(address).then(json => {
                                    const newFoodBank = {
                                        name: name,
                                        address: address,
                                        phone: phone,
                                        lat: json[0],
                                        lng: json[1]
                                    }
                                    
                                    dispatch(addFoodBank(newFoodBank))
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



// fetch latitude and longitude
async function fetchLocFromAddressAndCity(address, city){
    const response = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${GEO_KEY}&location=${address},${city}`, { mode: 'cors' })
    const json = await response.json()
    return [json.results[0].locations[0].displayLatLng.lat, json.results[0].locations[0].displayLatLng.lng]
}
async function fetchLocFromAddress(address){
    const response = await fetch(`https://www.mapquestapi.com/geocoding/v1/address?key=${GEO_KEY}&location=${address}`, { mode: 'cors' })
    const json = await response.json()
    return [json.results[0].locations[0].displayLatLng.lat, json.results[0].locations[0].displayLatLng.lng] 
}

// Get the full name of a us state
function parseState(ab){
    const state_abbr = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AS': 'America Samoa',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        'DC': 'District of Columbia',
        'FM': 'Micronesia1',
        'FL': 'Florida',
        'GA': 'Georgia',
        'GU': 'Guam',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MH': 'Islands1',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NE': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PW': 'Palau',
        'PA': 'Pennsylvania',
        'PR': 'Puerto Rico',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VI': 'Virgin Island',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming'
      }
    return state_abbr[ab]
}
import React from 'react'

// Leaflet
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import leafBlue from '../../../node_modules/leaflet/dist/images/marker-icon.png'
import leafRed from '../../assets/images/marker_red.png';
import leafShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'

// redux
import { useSelector } from 'react-redux'


export const CoronaMap = () => {
    // retrive testStation object, foodBank object and user object from state
    const testStations = useSelector(state => state.map.testStations)
    const foodBanks = useSelector(state => state.map.foodBanks)
    const user = useSelector(state => state.user)
    
    // last request was unsuccessful 
    if (!(testStations.status || foodBanks.status) || (testStations.results === 0 && foodBanks.results === 0) ) {
        return (
            <div className={'text-center block'}>
                <h3>Nothing found.</h3>
            </div>
        )
    }else{
        // last request was successful 
        if (testStations.testStations.length > 0 || foodBanks.foodBanks.length > 0){

            // finished fetching, map will be loaded
            if (testStations.testStations.length === testStations.results && foodBanks.foodBanks.length === foodBanks.results){

                // process icons
                const blueIcon = L.icon({
                    iconUrl: leafBlue,
                    leafShadow: leafShadow,
                    iconSize:     [30, 50], // size of the icon
                    shadowSize:   [50, 64], // size of the shadow
                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor:  [-3, -76]
                })
                
                const redIcon = L.icon({
                    iconUrl: leafRed,
                    leafShadow: leafShadow,
                    iconSize:     [30, 50], // size of the icon
                    shadowSize:   [50, 64], // size of the shadow
                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                    shadowAnchor: [4, 62],  // the same for the shadow
                    popupAnchor:  [-3, -76]
                })

                // determine the center of the map
                let center                 
                // if the user's position is to far from the testStations, use the position of the testStations, else use the user's position
                if(Math.abs(user.coordinates[0] - testStations.testStations[0].lat) > 10 || Math.abs(user.coordinates[1] - testStations.testStations[1].lng) > 10){
                    center = [testStations.testStations[0].lat, testStations.testStations[0].lng]
                }else{
                    center = user.coordinates
                }
                
                // render the map
                return (
                    <div className={'text-center block'}>
                        <h3>Found { testStations.results } test stations and { foodBanks.results } food banks.</h3>
                        <p>Blue = Test Station, Red = Foodbanks</p><br/>
                        <Map center={center} zoom={10} style={mapStyle}>
                            <TileLayer attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            {/* render test Stations */}
                            {testStations.testStations.map((ts) =>(
                                <Marker key={ts.id} position={[ts.lat, ts.lng]} icon={blueIcon}>
                                    <Popup>
                                        { ts.name }, Number: { ts.phone }
                                    </Popup>    
                                </Marker>
                            ))}
                            {/* render foodbanks */}
                            {foodBanks.foodBanks.map((fb) => (
                                <Marker position={[fb.lat, fb.lng]} icon={redIcon}>
                                <Popup>
                                    { fb.name }, Number: { fb.phone }
                                </Popup>    
                                </Marker>
                            ))}
                        </Map> 
                    </div>
                )


            }else{
                // still fetching
                return(
                    <div className={'text-center block'}>
                        <h3 >Loading...</h3>
                    </div>
                )
            }

        }else{
            // nothing requested
            return(
                <></>
            )
        }
    }
}

const mapStyle = {
    margin: 'auto',
    width: '70vw',
    height: '70vh',
}


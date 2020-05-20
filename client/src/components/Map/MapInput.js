/* Get the Location of the User and fetch information afterwards */
import React from "react";

// redux
import { useDispatch } from "react-redux";
import {
    addTestStation,
    clearTestStations,
    changeTestStatus,
    changeTestResults,
    addTestResult,
    addFoodBank,
    changeFoodStatus,
    changeFoodResults,
    addFoodResult,
    clearFoodBanks,
    changeMapRequested,
} from "../../redux/actions/mapActions";
import { changeCoordinates, changeUsState, changeCity } from "../../redux/actions/userActions";

const SERVER_PATH = "https://covid19-gc.herokuapp.com/";

export const MapInput = () => {
    const dispatch = useDispatch();

    const HandleClick = () => {
        dispatch(changeMapRequested(true));
        navigator.geolocation.getCurrentPosition(function (loc) {
            // set the user's position
            dispatch(changeCoordinates([loc.coords.latitude, loc.coords.longitude]));

            // remove all previous stations
            dispatch(clearTestStations());

            // Get the us_state
            getGeocodeReverse(loc).then((json) => {
                // errorcheck
                if (!json) {
                    dispatch(changeTestStatus(false));
                    dispatch(changeFoodStatus(false));
                    return false;
                }

                // check that the person is in the USA
                if (json[0].country !== "United States of America") {
                    dispatch(changeTestStatus(false));
                    dispatch(changeTestResults(0));
                    dispatch(changeFoodStatus(false));
                    dispatch(changeFoodResults(0));
                    return false;
                }

                // get the full name of the us_state
                const state = json[0].state;
                const city = json[0].city;

                // set us_state and city
                dispatch(changeUsState(state.toLowerCase().replace(" ", "+")));
                if (typeof city !== "undefined") {
                    dispatch(changeCity(city));
                }

                // fetch testStations
                getTestStations(state).then((json) => {
                    // errorcheck
                    if (!json) {
                        dispatch(clearTestStations());
                        dispatch(changeTestResults(0));
                        dispatch(changeTestStatus(false));
                        return false;
                    }

                    dispatch(changeTestStatus(true));
                    dispatch(changeTestResults(json.length));

                    // create new testStation objects and add them to the state
                    for (let i = 0; i < json.length; i++) {
                        if (json[i].name !== "No Organizations Yet") {
                            createTestStation(json[i]).then((newStation) => {
                                if (!newStation) {
                                    // update the amount of teststations
                                    dispatch(addTestResult(-1));
                                } else {
                                    dispatch(addTestStation(newStation));
                                }
                            });
                        } else {
                            dispatch(addTestResult(-1));
                        }
                    }
                });

                // clear previously fetched foodBanks
                dispatch(clearFoodBanks());

                // fetch FoodBanks from own api
                if (typeof city !== "undefined") {
                    getFoodBanks(city).then((json) => {
                        // errorcheck
                        if (json === false || json.success === false) {
                            dispatch(clearFoodBanks());
                            dispatch(changeFoodResults(0));
                            dispatch(changeFoodStatus(false));
                            return false;
                        }

                        // set amount of results
                        dispatch(changeFoodResults(json.names.length));

                        // add foodBanks to store
                        for (let i = 0; i < json.names.length; i++) {
                            createFoodBank(json, i).then((newFoodBank) => {
                                if (!newFoodBank) {
                                    // update the amount of foodBanks
                                    dispatch(addFoodResult(-1));
                                } else {
                                    dispatch(addFoodBank(newFoodBank));
                                }
                            });
                        }
                    });
                } else {
                    dispatch(changeFoodResults(0));
                    dispatch(changeFoodStatus(false));
                }
            });
        });
    };

    return (
        <div className="custom-ml-5 custom-mr-5 custom-mt-3">
            <h3 className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">Map</h3>
            <p className="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                Test stations and food banks near you. We currently only support the USA.
            </p>
            <button className="button is-rounded" onClick={HandleClick}>
                Fetch information
            </button>
        </div>
    );
};

// creates a foodbank object
function createFoodBank(json, i) {
    const name = json.names[i];
    const address = json.addresses[i];
    const phone = json.phones[i];

    // fetch latitude and longitude
    return getGeocode(address)
        .then((json) => {
            if (json === false || json.success === false) {
                return false;
            } else {
                const newFoodBank = {
                    name: name,
                    address: address,
                    phone: phone,
                    lat: json.data[0].latitude,
                    lng: json.data[0].longitude,
                };
                return newFoodBank;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

// creates a teststation object
function createTestStation(json) {
    const id = json.id;
    const name = json.name;
    const address = json["physical_address"][0].address_1;
    const city = json["physical_address"][0].city;
    let phone;
    try {
        phone = json["phones"][0].number;
    } catch (e) {
        phone = "Not Available";
    }

    // fetch latitude and longitude
    return getGeocode(city + "," + address).then((json) => {
        if (json === false || json.success === false) {
            return false;
        } else {
            const newStation = {
                id: id,
                name: name,
                address: address,
                city: city,
                phone: phone,
                lat: json.data[0].latitude,
                lng: json.data[0].longitude,
            };
            return newStation;
        }
    });
}

// fetches the teststations in a given state
function getTestStations(state) {
    return fetch(
        `https://covid-19-testing.github.io/locations/${state.toLowerCase().replace(" ", "-")}/complete.json`,
        { mode: "cors" }
    )
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response;
        })
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return false;
        });
}

// returns information on a location from an adress
function getGeocode(address) {
    return fetch(encodeURI(SERVER_PATH + `api/map/geocoding/${address}`), {
        mode: "cors",
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response;
        })
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return false;
        });
}

// returns information on a location from coordinates
function getGeocodeReverse(loc) {
    return fetch(encodeURI(SERVER_PATH + `api/map/geocoding_reverse/${loc.coords.latitude}/${loc.coords.longitude}`), {
        mode: "cors",
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response;
        })
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return false;
        });
}

// fetches foodbanks in a given city
function getFoodBanks(city) {
    // fetch FoodBanks from own api
    return fetch(encodeURI(SERVER_PATH + `api/map/foodbanks/${city.toLowerCase().replace(" ", "+")}`), { mode: "cors" })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response;
        })
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return false;
        });
}

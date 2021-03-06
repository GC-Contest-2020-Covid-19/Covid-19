import React, { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { addCharity, clearCharities, changeCharityStatus } from "../../redux/actions/charityActions";

const SERVER_PATH = "https://covid19-gc.herokuapp.com/";

export const CharityInput = () => {
    const dispatch = useDispatch();

    const [city, setCity] = useState("");
    const [amount, setAmount] = useState("");
    const [btn, setBtn] = useState(true);
    const [showError, setError] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault();

        setBtn(false);

        dispatch(clearCharities());

        // check the inputed number
        if (isNaN(amount)) {
            setError(true);
            return false;
        }

        dispatch(changeCharityStatus(true));

        // fetch charities in the inputed city and add them to the store
        getCharities(city, amount)
            .then((json) => {
                if (json !== false && json.success !== false) {
                    for (let i = 0; i < json.data.length; i++) {
                        dispatch(addCharity(createCharity(json.data[i])));
                    }
                    setBtn(true);
                } else {
                    dispatch(changeCharityStatus(false));
                    setBtn(true);
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch(changeCharityStatus(false));
            });
    };

    return (
        <div className="custom-ml-5 custom-mr-5 custom-mt-3">
            <h3 className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">Charity</h3>
            <p className="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                You need help or want to donate? Find charities near you! We currently only support the USA.
            </p>
            <form onSubmit={SubmitHandler}>
                <input
                    className="input is-rounded custom-mb-3"
                    type="text"
                    id="city"
                    placeholder="City..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    className="input is-rounded custom-mb-3"
                    type="text"
                    id="amount"
                    placeholder="Amount of Results..."
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button type="submit" className="button is-rounded" disabled={btn ? false : true}>
                    Search
                </button>
            </form>
            {showError && <p className="is-size-4">Please input a valid number as amount.</p>}
        </div>
    );
};

function getCharities(city, amount) {
    return fetch(SERVER_PATH + `api/help/charity/${city}/${amount}`)
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

function createCharity(json) {
    const newCharity = {
        id: json.ein,
        name: json.charityName,
        url: json.websiteURL,
        tagLine: json.tagLine,
        mission: json.mission,
        affiliation: json.irsClassification.affiliation,
        subsection: json.irsClassification.subsection,
    };
    return newCharity;
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Donation } from "./Donation";

const SERVER_PATH = "https://covid19-gc.herokuapp.com/";

export const DonationList = () => {
    const [input, setInput] = useState({ donator: "", donation: "", location: "", contact: "" });
    const [info, setInfo] = useState("");
    const [donations, setDonations] = useState([]);

    // component did mount
    useEffect(() => {
        fetch(SERVER_PATH + "api/help/don/get")
            .then((response) => response.json())
            .then((json) => {
                if (json.success) {
                    setDonations(json.data);
                } else {
                    setInfo("Could not fetch donations.");
                }
            });
    }, []);

    const addDonation = (e) => {
        e.preventDefault();

        setInfo("");

        if (!(input.donator && input.donation && input.location && input.contact)) {
            setInfo("Please fill out all input fields.");
            return false;
        }

        axios
            .post(SERVER_PATH + "api/help/don/add", {
                donator: input.donator,
                donation: input.donation,
                location: input.location,
                contact: input.contact,
            })
            .then((response) => {
                if (response.data.success) {
                    setInfo("Thank you for your donation!");
                } else {
                    setInfo("Could not add donation.");
                }
            })
            .catch((err) => {
                setInfo("Could not add donation.");
                console.log(err);
            });
    };

    return (
        <div className="custom-mr-5 custom-ml-5">
            <h3 className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">Donations</h3>

            <div className="custom-mb-2">
                <p className="is-size-4-desktop is-size-5-tablet is-size-6-mobile">
                    Donate to people who need support…
                </p>

                <form onSubmit={addDonation}>
                    <input
                        className="input custom-m-1"
                        type="text"
                        placeholder="Name"
                        value={input.donator}
                        onChange={(e) => setInput({ ...input, donator: e.target.value })}
                    />
                    <input
                        className="input custom-m-1"
                        type="text"
                        placeholder="Donation"
                        value={input.donation}
                        onChange={(e) => setInput({ ...input, donation: e.target.value })}
                    />
                    <input
                        className="input custom-m-1"
                        type="text"
                        placeholder="Location"
                        value={input.location}
                        onChange={(e) => setInput({ ...input, location: e.target.value })}
                    />
                    <input
                        className="input custom-m-1"
                        type="text"
                        placeholder="Contact information"
                        value={input.contact}
                        onChange={(e) => setInput({ ...input, contact: e.target.value })}
                    />

                    <button type="submit" className="button is-rounded custom-mt-1">
                        Donate
                    </button>
                </form>
            </div>

            <p className="is-size-4-desktop is-size-5-tablet is-size-6-mobile">{info ? info : null}</p>

            <p className="is-size-4-desktop is-size-5-tablet is-size-6-mobile custom-mt-3">…or recieve donations</p>

            <div>{donations ? donations.map((d) => <Donation key={d._id} donation={d} />) : null}</div>
        </div>
    );
};

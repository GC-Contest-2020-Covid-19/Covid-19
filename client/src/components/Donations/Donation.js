import React, { useState } from "react";

const SERVER_PATH = "https://covid19-gc.herokuapp.com/";

export const Donation = ({ donation }) => {
    const [info, setInfo] = useState("");
    const [claimed, setClaimed] = useState(donation.claimed);

    const claimDonation = () => {
        fetch(SERVER_PATH + `api/help/don/claim/${donation._id}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.success) {
                    setInfo("Successfully claimed the Donation.");
                    setClaimed(true);
                } else {
                    setInfo("Could not claim this donation.");
                }
            })
            .catch((err) => {
                setInfo("Could not claim this donation.");
            });
    };

    return (
        <>
            <div className="box custom-mb-2">
                <div className="card-content">
                    <p className="is-size-3-desktop is-size-3-tablet is-size-4-mobile">{donation.donation}</p>
                    <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                        Donated by: {donation.donator}
                    </p>
                    <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">Location: {donation.location}</p>
                    <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">Contact: {donation.contact}</p>
                    {!claimed ? (
                        <button className="button is-rounded" onClick={claimDonation}>
                            Claim this donation
                        </button>
                    ) : (
                        <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile has-text-danger">
                            Already claimed
                        </p>
                    )}
                </div>
            </div>
            {info ? <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">{info}</p> : null}
        </>
    );
};

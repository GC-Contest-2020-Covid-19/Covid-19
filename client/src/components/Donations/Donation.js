import React from "react";

export const Donation = ({ donation }) => {
    return (
        <div className="box custom-mb-2">
            <div className="card-content">
                <p className="is-size-3-desktop is-size-3-tablet is-size-4-mobile">{donation.donation}</p>
                <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">Donated by: {donation.donator}</p>
                <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">Location: {donation.location}</p>
                <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">Contact: {donation.contact}</p>
            </div>
        </div>
    );
};

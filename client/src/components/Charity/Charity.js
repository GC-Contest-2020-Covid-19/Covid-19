import React, { useState } from "react";

export const Charity = ({ charity }) => {
    const [showMore, setShowMore] = useState(false);
    const onClick = () => setShowMore(!showMore);

    if (showMore) {
        return (
            <div className={"card custom-mb-2"}>
                <div className="card-content">
                    <a className="is-size-4-desktop is-size-4-tablet is-size-5-mobile" href={charity.url}>
                        {charity.name}
                    </a>
                    <div className="content">
                        <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">{charity.mission}</p>
                        <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                            Affiliation: {charity.affiliation}
                        </p>
                        <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                            Type: {charity.subsection}
                        </p>
                        <button onClick={onClick} className="button is-rounded is-size-6">
                            Show Less
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={"card custom-mb-2"}>
                <div className="card-content">
                    <a className="is-size-4-desktop is-size-4-tablet is-size-5-mobile" href={charity.url}>
                        {charity.name}
                    </a>
                    <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">{charity.tagLine}</p>
                    <button onClick={onClick} className="button is-rounded">
                        Show More
                    </button>
                </div>
            </div>
        );
    }
};

import React, { useState } from "react";

export const Course = ({ course }) => {
    const [showMore, setShowMore] = useState(false);
    const onClick = () => setShowMore(!showMore);

    if (showMore) {
        return (
            <div className={"card custom-mb-2"}>
                <div className="card-content">
                    <a className="is-size-4-desktop is-size-4-tablet is-size-5-mobile" href={course.link}>
                        {course.title}
                    </a>
                    <div className="content">
                        <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                            Offered by: {course.university}
                        </p>
                        <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                            Rating: {course.rating} / 5
                        </p>
                        <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                            {course.enrollement} students are enrolled.
                        </p>
                        <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                            Difficulty: {course.difficulty}
                        </p>
                        <button onClick={onClick} className="button is-rounded">
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
                    <a className="is-size-4-desktop is-size-4-tablet is-size-5-mobile" href={course.link}>
                        {course.title}
                    </a>
                    <p className="is-size-5-desktop is-size-6-tablet is-size-6-mobile">
                        Offered by: {course.university}
                    </p>
                    {course.rating ? (
                        <button onClick={onClick} className="button is-rounded">
                            Show More
                        </button>
                    ) : null}
                </div>
            </div>
        );
    }
};

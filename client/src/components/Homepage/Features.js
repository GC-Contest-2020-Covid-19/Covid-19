import React from "react";
import { Link } from "react-router-dom";
import SVG from "../SVGs/SVG";

const Features = () => {
    return (
        <main className="hero is-medium">
            <div className="hero-body">
                <div className="container">
                    <div className="custom-mb-5 has-text-centered">
                        <h2 className="title has-text-link">Keep yourself informed</h2>
                        <p className="subtitle">
                            We provide several services which help you to stay on top of the current situation!
                        </p>
                    </div>

                    <div className="columns">
                        <Link to="/summary" className="column is-relative custom-mt-5 has-text-centered">
                            <div className="box">
                                <h3 className="custom-mt-5 title">Summary</h3>
                                <p className="subtitle">
                                    Check out the summary of new cases today and total cases had so far
                                </p>
                                <div className="feature-image has-background-grey-lighter">
                                    <SVG type="pieChart" width="80" />
                                </div>
                            </div>
                        </Link>
                        <Link to="/progression" className="column is-relative custom-mt-5 has-text-centered">
                            <div className="box">
                                <h3 className="custom-mt-5 title">Progression</h3>
                                <p className="subtitle">
                                    Track the progerssion of cases from the start of case recording by country
                                </p>
                                <div className="feature-image has-background-grey-lighter">
                                    <SVG type="lineChart" width="80" />
                                </div>
                            </div>
                        </Link>
                        <Link to="/info/myths" className="column is-relative custom-mt-5 has-text-centered">
                            <div className="box">
                                <h3 className="custom-mt-5 title">Facts &amp; Myths</h3>
                                <p className="subtitle">
                                    Get the main facts and have myths debunked about the virus and disease
                                </p>
                                <div className="feature-image has-background-grey-lighter">
                                    <SVG type="medical" width="80" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Features;

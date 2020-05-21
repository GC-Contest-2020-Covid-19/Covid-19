import React from "react";

const Intro = () => {
    return (
        <section id="intro-hero" className="hero is-large">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered has-text-centered">
                        <div className="column is-half has-text-black-bis">
                            <p className="is-size-1 custom-black">
                                Do NOT <span className="has-text-danger">panic</span>
                            </p>
                        </div>
                        <div className="column has-text-black-bis">
                            <p className="is-size-2 is-size-4-mobile custom-black">
                                The last time a disease wreaked this level of havoc on the world was around century ago,
                                so it's understandable that everyone is freaking out. But
                                <span className="has-text-danger"> fear</span> never helped solve a problem
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;

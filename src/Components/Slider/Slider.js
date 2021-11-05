import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel fade className="mb-4">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/RvgB237/1.jpg"
                    alt="Slide"
                />
                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your Journey Begins</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-danger mt-3 px-4 hide">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/r5W9gS0/7.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your Journey Begins</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-danger mt-3 px-4 hide">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/sPqMGCS/10.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your Journey Begins</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-danger mt-3 px-4 hide">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Hp9d2Sc/3.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your Journey Begins</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-danger mt-3 px-4 hide">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/TRRphyr/5.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your Journey Begins</h3>
                    <div className="pb-3">
                        <div className="hide">
                            <small className="more-small-text">
                                With Exford, your journey starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide">
                            <small className="more-small-text">
                                sure to explore our offers
                            </small>
                        </div>

                        <NavLink to="service" className="btn btn-danger mt-3 px-4 hide">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
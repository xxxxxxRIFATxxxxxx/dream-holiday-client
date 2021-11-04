import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ExploreBanner.css';

const ExploreBanner = () => {
    return (
        <Container className="mb-4">
            <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/zrvXJJ3/13.jpg" alt="nature" />
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Explore the World</h4>
                        <p className="text-muted small-text">
                            Amazing tours and fun adventures
                            are waiting for you. Treat yourself
                            and see our offers.
                        </p>
                        <NavLink to="service" className="btn btn-danger px-5">Service</NavLink>
                    </div>
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Discover Beauty</h4>
                        <p className="text-muted small-text">
                            Amazing tours and fun adventures
                            are waiting for you. Treat yourself
                            and see our offers.
                        </p>
                        <NavLink to="service" className="btn btn-danger px-5">Service</NavLink>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/hZrwrC6/1.jpg" alt="nature" />
                </div>
            </div>
        </Container>
    );
};

export default ExploreBanner;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white"> TraveLite  <i className="fa-solid fa-plane-arrival"></i></Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon navbar-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-4">
                            <li className="nav-item ">
                                <Link to="/" className="nav-link active text-white" aria-current="page">Home  </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link active text-white" >Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link active text-white" >Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/sign-up" className="nav-link active btn btn-outline-white my-2 my-sm-0 text-white " >Sign Up!</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;

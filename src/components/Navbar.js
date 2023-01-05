import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"> TraveLite  <i className="fa-solid fa-plane-arrival"></i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-4">
                            <li className="nav-item ">
                                <Link to="/home" className="nav-link active" aria-current="page">Home  </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="#">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active">Disabled</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;

import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom";
import { FiSearch } from 'react-icons/fi';



export let NavBar = (props) => {

    let docWidth = window.width

    return (
        <div className="nav-bar">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="nav-search-button">
                        <nav className="navbar navbar-dark bg-dark">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarToggleExternalContent"
                                        aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <FiSearch size={32} />
                                </button>
                            </div>
                        </nav>
                        <div className="search-bar">
                            <div className="collapse" id="navbarToggleExternalContent">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <button className="btn btn-light" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='navbar-logo'>
                        <img className="logo-navigation" src="https://i.imgur.com/esaMyUF.png"/>
                    </div>
                    <div className="navbar-links">
                            <ul className="nav nav-pills">
                                <Link className="nav-link" to="/homepage">Home </Link>
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                                <Link className="nav-link" to="/about">About</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}



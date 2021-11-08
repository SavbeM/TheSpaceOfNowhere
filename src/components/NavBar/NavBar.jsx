import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom";



export let NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-light" type="submit">Search</button>
                    </form>
                    <div className="nav-item">
                       THE SPACE OF NOWHERE
                    </div>
                    <div className="navbar-links">
                        <ul className="nav nav-pills">
                            <Link className="nav-link" to="/homepage">HomePage</Link>
                            <Link className="nav-link" to="/contacts">Contacts</Link>
                            <Link className="nav-link" to="/about">About</Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

);
}



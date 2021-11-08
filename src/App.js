import './App.css';

import React from "react";
import {BrowserRouter} from "react-router-dom";
import {HomePage} from "./components/HomePage/HomePage";
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";


let App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Routes>
                    <Route path="homepage" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

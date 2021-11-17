import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {HomePage} from "./components/HomePage/HomePage";
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Footer} from "./components/Footer/Footer";
import {About} from "./components/About/About";
import {Contacts} from "./components/Contacts/Contacts";



let App = () => {
    return (
        <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="about" element={<About />} />
                    <Route path="contacts" element={<Contacts />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

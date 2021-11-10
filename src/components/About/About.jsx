import React from "react";
import "./About.css"
import {Card} from "react-bootstrap";


export let About = (props) => {
    return (
        <div className='content'>

            <div className='content-block'>
                <div className="about-skeleton-block">
                    <img className="about-skeleton" src="https://i.imgur.com/CqyWoeL.png" border="0"/>
                </div>
                <div className='about-title'>
                    The Space Of Nowhere
                </div>
                <div className="about-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex mauris, tempus sit amet mauris quis,
                    aliquet pulvinar sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Aliquam erat volutpat. Sed quis diam est. Ut luctus rhoncus turpis, ac tincidunt
                    lacus sagittis a. Pellentesque habitant morbi tristique
                </div>
            </div>
            <div className="our-contacts">
                <div className="contacts-title">Our contacts</div>
                <div className="school-contacts-cards">
                    <div id="contacts-card" className="card">
                        <img id="contacts-img" src="https://i.imgur.com/esaMyUF.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="card-title">Mark Selikhov || React Developer</div>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img id="contacts-img" src="https://i.imgur.com/esaMyUF.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="card-title">Danyl Danileyko|| Designer</div>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://i.imgur.com/esaMyUF.png" id="contacts-img" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="card-title">Maksym Tsaruk || Director</div>
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
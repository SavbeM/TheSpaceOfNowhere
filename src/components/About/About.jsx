import React from "react";
import "./About.css"
import {Card} from "react-bootstrap";


export let About = (props) => {


    return (
        <div className='content'>

            <div className='content-block'>
                <div className="about-skeleton-block">
                    <img className="about-skeleton" src="https://i.imgur.com/ASeA75h.png" border="0"/>
                </div>
                <div className='about-title'>
                    The Space Of Nowhere
                </div>
                <div className="about-subtitle">
                    The Space Of Nowhere is a project first and foremost aimed at people who have the desire to create and monetize their creativity. The newly developed NFT technology has opened up the unmatched freedom and ease in monetizing your art. So our Input in this community is a way to leave your mark in the history of art and the blockchain at the same time.
                    We provide comfortable and welcoming platform for any of your needs of sharing, tracking and communication. Take care of the transition of items and updating collections.
                    Our projects coding department is working on the problems or suggestions you may have had or have right now, so feel free to contact any member of our team.
                </div>
            </div>
            <div className="our-contacts">
                <div className="contacts-title">Our contacts</div>
                <div className="school-contacts-cards">
                    <div id="contacts-card" className="card">
                        <img id="contacts-img" src="https://i.imgur.com/DwBDUK5.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="card-title">Mark Selikhov || Programming developer  </div>
                            <p className="card-text">Mark Selikhov is our teams programming unit, he did all of the web-development, using many different tools such as React, Bootstrap , as well as creating 3d model for our project</p>
                        </div>
                    </div>
                    <div className="card">
                        <img id="contacts-img" src="https://i.imgur.com/5dNluWC.png" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="card-title">Danyl Danileyko || Web designer and illustrator</div>
                            <p className="card-text">Danyleiko Danylo is our projects design developer and creative director, he was responsible for creating business card and flyer designs for school, web site design and illustration, using Adobe Photoshop and Illustrator grafic editors and traditional sketching, and developing projects conceptual part</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://i.imgur.com/mwj0Cor.png" id="contacts-img" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <div className="card-title">Maksym Tsaruk || Leading developer</div>
                            <p className="card-text"> Maxim Tsaruk is our teams leader and marketing agent, he's share of work consisted of creating work flow presentations and the advertisment video for the school, using such techniques as audio and color processing plugins</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
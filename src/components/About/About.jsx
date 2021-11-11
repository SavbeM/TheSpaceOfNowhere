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
                            <div className="card-title">Mark Selikhov || Programming developer  </div>
                            <p className="card-text">Mark Selikhov is our teams programming unit, he did all of the web-development, using many different tools such as (умные слова про сайт), as well as creating 3d model for our project</p>
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
                            <p className="card-text"> Maxim Tsaruk is our teams leader and marketing agent, he's share of work consisted of creating work flow presentations and the advertisment video for the school, using such techniques as (умные слова о видосе)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
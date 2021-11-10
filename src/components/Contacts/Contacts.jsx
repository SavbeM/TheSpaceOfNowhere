import React from "react";
import "./Contacts.css"
import {Card} from "react-bootstrap"
import {AiFillPhone, CgWebsite, GrLocation} from "react-icons/all";


export let Contacts = (props) => {
    return (
        <div className='content'>
            <div className="contacts-content">
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
                <div className="school-contacts">
                    <div className="contacts-title">
                        School Contacts
                    </div>
                    <div className="school-init">
                        <div className="school-photo">
                            <img src="https://ssosp.sk/wp-content/uploads/2019/10/school-middle3-800x132.jpg"/>
                        </div>
                        <div className="school-logo">
                            <img src="https://ssosp.sk/wp-content/uploads/2019/09/logo-ssosp-final.png"/>
                        </div>
                    </div>
                    <div className="school-contacts-cards">
                        <Card>
                            <Card.Header>Adress</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <GrLocation/>
                                    <p>
                                        Hollého 1380/34, 905 01 Senica
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>Website</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <CgWebsite/>
                                    <p>
                                        https://www.sospodnikania.sk/
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Header>Phone Number</Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <AiFillPhone/>
                                    <p >
                                        +421346515593
                                    </p>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="contacts-map">
                    <div className="contacts-title">
                        SCHOOL LOCATION
                    </div>
                    <iframe className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.335332293613!2d17.372618951149295!3d48.679953079168676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476cb4deb8ce6bad%3A0x2b7c5e0b474aef50!2sPrivate%20Secondary%20School%20of%20Business!5e0!3m2!1sru!2ssk!4v1636459810895!5m2!1sru!2ssk"
                            width="600" height="450" allowFullScreen="" loading="lazy"/>
                </div>
            </div>
        </div>

    )
}
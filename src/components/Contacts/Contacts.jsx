import React from "react";
import "./Contacts.css"


export let Contacts = (props) => {
    return (
        <div className='content'>
            <div className="contacts-content">
                <div className="our-contacts">

                    <div className="card" >
                        <img src="" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="school-contacts">

                </div>
                <div className="contacts-map">
                    <iframe className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.335332293613!2d17.372618951149295!3d48.679953079168676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476cb4deb8ce6bad%3A0x2b7c5e0b474aef50!2sPrivate%20Secondary%20School%20of%20Business!5e0!3m2!1sru!2ssk!4v1636459810895!5m2!1sru!2ssk"
                            width="600" height="450" allowFullScreen="" loading="lazy"/>
                </div>
            </div>
        </div>

    )
}
import React from "react";
import "./HomePage.css"

export let HomePage = (props) => {
    return (
        <div className="wrapper">
            <div className="content">
                <div className="homepage-welcome-content">
                    <div className='welcome-content'>
                        <div id='welcome' className='welcome-title'>
                            WELCOME
                        </div>
                        <div id='welcome' className="welcome-subtitle">
                            We are a project that combines an online gallery with an NFT-marketplace. The mission of
                            this
                            project is to create a singular void space for viewing and exchanging your experience and
                            observations, concepts and ideas, through the form of virtual artwork as it is, in our
                            opinion
                            the only singular thing that won't perish as long as the humankind exists. we hope you'll be
                            able to find an artwork that may spark a creative idea inside of your mind.
                        </div>
                    </div>
                </div>
                <div className="art-cards-wrapper">
                    <div className="art-cards-content">
                        <div className="card">
                            <video class="card-img-top" width="320" height="240" controls>
                                <source src="https://i.imgur.com/14rlaPj.mp4" type="video/mp4"/>
                            </video>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="https://i.imgur.com/jufSf7j.jpeg" className="card-img-top" alt="404"></img>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="https://i.imgur.com/sSGAmAy.gif" className="card-img-top" alt="404"></img>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="https://i.imgur.com/JcsVhag.jpeg" className="card-img-top" alt="404"></img>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="art-cards-content">
                        <div className="card">
                            <video className="card-img-top" width="320" height="240" controls>
                                <source src="https://i.imgur.com/14rlaPj.mp4" type="video/mp4"/>
                            </video>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="https://i.imgur.com/jufSf7j.jpeg" className="card-img-top" alt="404"></img>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="https://i.imgur.com/sSGAmAy.gif" className="card-img-top" alt="404"></img>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-img">
                                <img src="https://i.imgur.com/JcsVhag.jpeg" className="card-img-top" alt="404"></img>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the
                                    bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <footer className="page-footer font-small blue pt-4 bg-secondary">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>
                        <hr className="clearfix w-100 d-md-none pb-3"/>
                        <div className="col-md-3 mb-md-0 mb-3">

                            <h5 className="text-uppercase">Powered by</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a className="pow-by-icons" href="https://ru.reactjs.org">Bootstrap</a>
                                </li>
                                <li>
                                    <a className="pow-by-icons" href="https://getbootstrap.com">React</a>
                                </li>
                                <li>
                                    <a className="pow-by-icons" href="https://react-icons.github.io/react-icons">React
                                        Icon</a>
                                </li>
                            </ul>

                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2021 Copyright:
                    <a href="https://www.instagram.com/cpt_prod/"> inst: @capt_prod</a>
                </div>
            </footer>
        </div>
    );
}



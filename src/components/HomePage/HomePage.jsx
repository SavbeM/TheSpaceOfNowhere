import React from "react";
import "./HomePage.css"

export let HomePage = (props) => {
    return (
        <div>
            <div className="homepage-welcome-content">
                <div className='welcome-content'>
                    <div className='welcome-title'>
                        WELCOME
                    </div>
                    <div className="welcome-subtitle">
                        We are a project that combines an online gallery with an NFT-marketplace. The mission of this project is to create a singular void space for viewing and exchanging your experience and observations, concepts and ideas, through the form of virtual artwork as it is, in our opinion the only singular thing that won't perish as long as the humankind exists. we hope you'll be able to find an artwork that may spark a creative idea inside of your mind.
                    </div>
                </div>
            </div>
            <div className="art-cards-content">
                <div className="card">
                    <img src="../images/logocircle.png" className="card-img-top" alt="404"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="logocircle.png" className="card-img-top" alt="404"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="logocircle.jpg" className="card-img-top" alt="404"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="logocircle.jpg" className="card-img-top" alt="404"></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the
                            bulk of the card's content.</p>
                    </div>
                </div>
            </div>

            <footer class="page-footer font-small blue pt-4 bg-secondary">
                <div class="container-fluid text-center text-md-left">
                    <div class="row">
                        <div class="col-md-6 mt-md-0 mt-3">
                            <h5 class="text-uppercase">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>
                        <hr class="clearfix w-100 d-md-none pb-3"/>
                            <div class="col-md-3 mb-md-0 mb-3">

                                <h5 class="text-uppercase">Links</h5>

                                <ul class="list-unstyled">
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
                            <div class="col-md-3 mb-md-0 mb-3">
                                <h5 class="text-uppercase">Links</h5>
                                <ul class="list-unstyled">
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
                <div class="footer-copyright text-center py-3">© 2021 Copyright:
                    <a href="https://www.instagram.com/cpt_prod/"> inst: @capt_prod</a>
                </div>
            </footer>
        </div>
    );
}



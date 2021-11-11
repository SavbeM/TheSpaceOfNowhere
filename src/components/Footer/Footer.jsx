import React from "react";
import "./Footer.css"


export let Footer = (props) => {
    return (
        <footer className="page-footer font-small bg-dark pt-4">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase">The Space Of Nowhere</h5>
                        <p className="footer-content">We are a project that combines an online gallery with an NFT-marketplace. The mission of this project is to create a singular void space for viewing and exchanging your experience and observations, concepts and ideas, through the form of virtual artwork as it is, in our opinion the only singular thing that won't perish as long as the humankind exists. we hope you'll be able to find an artwork that may spark a creative idea inside of your mind.</p>
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
                                <a className="pow-by-icons" href="#!">Link 1</a>
                            </li>
                            <li>
                                <a className="pow-by-icons" href="#!">Link 2</a>
                            </li>
                            <li>
                                <a className="pow-by-icons" href="#!">Link 3</a>
                            </li>
                            <li>
                                <a className="pow-by-icons" href="#!">Link 4</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2021 Copyright:
                <a className="copyright-link" href="https://www.instagram.com/cpt_prod/"> inst: @capt_prod</a>
            </div>
        </footer>
    )
}
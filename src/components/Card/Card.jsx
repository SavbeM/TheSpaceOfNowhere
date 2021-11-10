import React, {useState} from "react";
import "./Card.css"
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/cjs/Button";
import CloseButton from "react-bootstrap/cjs/CloseButton";
import {Fancybox, Carousel, Panzoom} from "@fancyapps/ui";

export const Card = (props) => {
    console.log(props.item.productName)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="card">
                <a href={props.item.productPhoto}>
                    <div className="card-img-block">
                        <img src={props.item.productPhoto} className="card-img-top"/>
                    </div>
                </a>
                <div className="card-body">
                    <p className="card-text">{props.item.productDesc}</p>
                </div>
                <button className="show-more" onClick={handleShow}>
                    Show more
                </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <CloseButton onClick={handleClose}/>
                    <div className="card-body">
                        <div className='name'>{props.item.productName}</div>
                        <div className="card-info-content">
                            <img className='prod-photo' src={props.item.productPhoto}/>
                            <div className='desc'>{props.item.productDesc}</div>
                        </div>
                        <div className="cost-block">
                            <div className="cost">
                                {props.item.cost}
                            </div>
                            <Button variant="success">Buy</Button>{' '}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
}


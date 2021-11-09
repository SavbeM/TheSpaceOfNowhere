import React, {useState} from "react";
import "./Card.css"
import Modal from "react-bootstrap/Modal";


export const Card = (props) => {
    console.log(props.item.productName)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="card">
                <div className="card-img-block">
                    <img src={props.item.productPhoto} className="card-img-top"/>
                </div>
                <div className="card-body">
                    <p className="card-text">{props.item.productDesc}</p>
                </div>
                <button className="show-more" onClick={handleShow}>
                    Show more
                </button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='name'>{props.item.productName}</div>
                    <div className="card-info-content">
                        <img className='prod-photo' src={props.item.productPhoto}/>
                        <div className='desc'>{props.item.productDesc}</div>
                    </div>
                    <div className="cost">
                        {props.item.cost}
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
}


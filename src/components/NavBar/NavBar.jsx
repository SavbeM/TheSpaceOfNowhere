import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {Form, Nav } from "react-bootstrap";
import {Offcanvas} from "react-bootstrap";
import {FormControl} from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import {HomePage} from "../HomePage/HomePage";


export let NavBar = (props) => {


    return (
        <Navbar bg="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand color="light">The Space Of Nowhere</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar"/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Link to="/">HOME</Link>
                            <Link to="/contacts">CODING</Link>
                            <Link to="/about">GUITAR</Link>
                            <div id="indicator"></div>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )
}



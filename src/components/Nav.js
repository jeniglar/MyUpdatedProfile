import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function CreateNav() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="myNav">
                <Navbar.Brand className="name" href="/Home">Jen Iglar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto navlink">
                        <Nav.Link className="name" href="/Home">Home</Nav.Link>
                        <Nav.Link className="name" href="/Portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    );
};

export default CreateNav; 
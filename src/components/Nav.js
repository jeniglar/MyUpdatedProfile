import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function CreateNav() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="shadow pt-2 pb-2 navbar bg-light navbar-light">
                <Navbar.Brand className="name" href="/home">Jen Iglar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto navlink">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    );
};

export default CreateNav; 
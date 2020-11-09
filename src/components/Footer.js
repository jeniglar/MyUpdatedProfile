import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function CreateFooter() {
    return (
        <>
            <Nav className="footer navbar fixed-bottom bg-light navbar-light">
                <Container className="container">          
                    <p class="mx-auto text-center">&copy;</p>
                </Container>
            </Nav>
        </>
    );
};

export default CreateFooter;
import React from 'react';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="#home">Fabrică de imbrăcăminte</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <Container className="mt-5 pt-5">
                <Row className="justify-content-md-center">
                    <Col md="auto">

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;
import React from 'react';
import './Menu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Form } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import LogoMenu from '../assets/logoTopo.png';

function Menu() {
    return (
        <Navbar className="menu" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to={'/home'}>
                        <img className="logo" src={LogoMenu} alt={'logo'} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='btnMenu' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container_link">
                        <Nav.Link className="link" as={Link} to={'/home'}>
                            Home
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to={'/filmes'}>
                            Filmes
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to={'/series'}>
                            Séries
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to={'/animes'}>
                            Animes
                        </Nav.Link>
                        <Nav.Link className="link" as={Link} to={'/sobre'}>
                            Sobre
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="inputMenu"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;

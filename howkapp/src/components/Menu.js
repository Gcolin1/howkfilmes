import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Form } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import LogoMenu from '../assets/logoTopo.png';

function Menu() {
    const [search, setSearch] = useState("");
    const navigate = useHistory(0);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!search) return

        navigate.push(`/search?q=${search}`)
        setSearch("")
    }

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
                    <Form onSubmit={handleSubmit} className="d-flex inpMenu">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="inputMenu"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;

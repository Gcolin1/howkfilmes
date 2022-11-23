import React, { useEffect, useState } from 'react';
import ListaDeFilmes from '../components/ListaDeFilmes';
import Loading from '../components/Loading';
import Tmdb from '../Tmdb';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import inaiara from '../assets/logoTopo.png';
import { Form } from 'react-bootstrap';
import './css/Series.css';
import Carousel from 'react-bootstrap/Carousel';
import imagem1 from '../assets/banner7.png';
import imagem2 from '../assets/banner3.png';
import imagem3 from '../assets/banner6.png';
import footer from '../assets/fundofooter.png';
import logo from '../assets/logoTopo.png';
import redes1 from '../assets/instagram-rodape.png';
import redes2 from '../assets/facebook-rodape.png';
import redes3 from '../assets/twitter.png';

function Series() {
    const [movieList, setMovieList] = useState([]);

    //useEffect quandop a tela for carregada ele vai executar a função que esta dentro dela
    useEffect(() => {
        const loadSeries = async () => {
            //pegando toda a lista de filmes

            let list = await Tmdb.getListSeries();
            setMovieList(list);
        };

        loadSeries();
    }, []);

    return (
        <div className="pageHome">
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        {' '}
                        <img src={inaiara} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="Link" href="#home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="Link" href="#link">
                                Séries
                            </Nav.Link>
                            <Nav.Link className="Link" href="#link">
                                Filmes
                            </Nav.Link>
                            <Nav.Link className="Link" href="#link">
                                Animes
                            </Nav.Link>
                            <Nav.Link className="Link" href="#link">
                                Sobre
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="Search"
                                placeholder="Search"
                                className="inputMenu"
                                aria-label="Search"
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagem1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Bem-vindo a HowkFilmes</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagem2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Filmes, séries e muito mais.</h3>
                        <p>
                            Você pode assistir a quantos filmes e séries quiser.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imagem3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Todas as temporadas do seu anime favorito.</h3>
                        <p>Assista o quanto quiser, quando quiser.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className="listas">
                {movieList.map((item, key) => (
                    <ListaDeFilmes
                        key={key}
                        title={item.title}
                        items={item.items}
                    />
                ))}
            </section>

            <footer className="Rodape">
                <div className="Degradefooter"></div>
                <img className="logo" src={logo} alt="logofooter" />

                <div className="Redessocias">
                    <a
                        href="https://www.instagram.com/howkfilmes.ltda/"
                        target="_blank_"
                    >
                        <img
                            className="Instagram"
                            src={redes1}
                            alt="Instagram"
                        />
                    </a>

                    <a
                        href="https://www.facebook.com/profile.php?id=100087671157679"
                        target="_blank_"
                    >
                        <img className="Facebook" src={redes2} alt="Facebook" />
                    </a>

                    <a 
                        href="https://twitter.com/FilmesHowk" target="_blank_">
                        <img className="Twitter" src={redes3} alt="Twitter" />
                    </a>
                </div>

                <div className="ItensRodape">
                    <div className="Item1">
                        <ul>
                            <li>Filmes</li>
                            <li>Séries</li>
                            <li>Animes</li>
                        </ul>
                    </div>

                    <div className="Item2">
                        <ul>
                            <li>Home</li>
                            <li>Sobre Nós</li>
                            <li>Equipe</li>
                        </ul>
                    </div>

                    <div className="Item3">
                        <ul>
                            <li>Contato</li>
                            <li>Planos</li>
                            <li>Sugestões</li>
                        </ul>
                    </div>
                </div>

                <div className='Final'>
                    &copy; HowkFilmes - Todos os direitos reservados.
                </div>
            </footer>

            {movieList.length <= 0 && <Loading />}
        </div>
    );
}

export default Series;

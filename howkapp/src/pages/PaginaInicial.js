import React from 'react';
import ButtonComp from '../components/ButtonComp';
import './css/PaginaInicial.css';
import logoTopo from '../assets/logoTopo.png';
import ImgFilmes from '../assets/img-filmes.png';
import ImgAnimes from '../assets/img-animes.png';
import ButtonRoxo from '../components/ButtonRoxo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Familia from '../assets/img-familia.png';


function PaginaInicial() {
    return (
        <div>
            <header className="bannerInicial">
                <div className="gradient-top"></div>
                <div className="btn-topo">
                    <Link to={'/login'}>
                        <ButtonComp />
                    </Link>
                </div>
                <div className="infoTop">
                    <img className="logoTop" src={logoTopo} alt="logo" />
                    <p>Séries, filmes e animes que você precisa</p>
                    <Link to={'/cadastro'}>
                        <ButtonRoxo />
                    </Link>
                </div>
            </header>

            <div className="gradient-bottom"></div>
            <main className="container_main site">
                <a href='#planet' className='arrowBottom'>
                    <KeyboardArrowDownIcon style={{ fontSize: 60 }}></KeyboardArrowDownIcon>
                </a>

                <section id='planet' className="container-planet">
                    <div>
                        <img
                            alt="imagem planeta"
                            className="img"
                            src={Familia}
                        />
                    </div>

                    <div className="planet-info">
                        <h2>Bem-vindo a HawkFilmes </h2>
                        <p>
                            Assine agora e tenha tudo que você deseja assistir na palma da sua mão
                        </p>
                    </div>
                </section>

                <section className="container-filmes">
                    <div className="planet-info">
                        <h2>Veja as novidades dos telões na sua casa </h2>
                        <p>
                           Do cinema para sua casa. Aqui você encotra todas as novidades, desde filmes até séries e animes 
                        </p>
                    </div>

                    <div>
                        <img
                            alt="imagem planeta"
                            className="img"
                            src={ImgFilmes}
                        />
                    </div>
                </section>

                <section className="container-Animes">
                    <div>
                        <img
                            alt="imagem planeta"
                            className="img"
                            src={ImgAnimes}
                        />
                    </div>

                    <div className="planet-info">
                        <h2>Veja suas séries e filmes favoritos</h2>
                        <p>
                            Suas séries e filmes favoritos estão aqui. Não perca tempo, venha assistir!
                        </p>
                    </div>
                </section>
            </main>

        

            <section className="fundoForm" id='formContato'>
                <div className="degrade-topo"></div>
                <div className="inputs">
                    <h3>Em caso de duvidas ou sugestões entre em contato conosco</h3>
                    <Form>
                        <FormGroup floating>
                            <Input
                                className="input"
                                id="exampleNome"
                                name="nome"
                                placeholder="Nome"
                                type="text"
                            />
                            <Label className="label" for="examplePassword">
                                Nome
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                className="input"
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <Label className="label" for="exampleEmail">
                                Email
                            </Label>
                        </FormGroup>{' '}
                        <FormGroup floating>
                            <Input
                                className="input"
                                id="exampleCelular"
                                name="Celular"
                                placeholder="Celular"
                                type="text"
                            />
                            <Label className="label" for="examplePassword">
                                Celular
                            </Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input
                                className="input"
                                id="exampleAssunto"
                                name="assunto"
                                placeholder="Assunto"
                                type="text"
                            />
                            <Label className="label" for="examplePassword">
                                Assunto
                            </Label>
                        </FormGroup>{' '}
                        <Button className="botaoEnviar">Enviar</Button>
                    </Form>
                </div>
            </section>
            <footer className="footer">
                <div>
                    <img alt="logo rodape" src={logoTopo} />
                </div>

                <div className="copy-footer">
                    <sup>&copy;</sup>Copyright HowkFilmes 2022 - Todos os
                    direitos reservados.
                </div>
            </footer>
        </div>
    );
}

export default PaginaInicial;

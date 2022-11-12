import React from "react"
import ButtonComp from "../components/ButtonComp"
import "./css/PaginaInicial.css"
import logoTopo from "../assets/logoTopo.png"
import ImgFilmes from "../assets/img-filmes.png"
import ImgAnimes from "../assets/img-animes.png"
import BotaoAmarelo from "../components/BotaoAmarelo"
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import Familia from '../assets/img-familia.png'
import Planos from '../components/Planos'


function PaginaInicial() {

    return (
        <div>
            <header className="bannerInicial">
                <div className="gradient-top"></div>
                <div className="btn-topo">
                    <Link to={"/login"}>
                        <ButtonComp />
                    </Link>
                </div>
                <div className="infoTop">
                    <img className="logoTop" src={logoTopo} alt="logo" />
                    <p>Séries, filmes e animes que você precisa</p>
                    <Link to={"/cadastro"}>
                        <BotaoAmarelo />
                    </Link>
                </div>
            </header>

            <div className="gradient-bottom"></div>
            <main className="site container_main">
                
                <section className="container-planet">
                    <div>
                        <img alt="imagem planeta" className="img" src={Familia} />
                    </div>

                    <div className="planet-info">
                        <h2>Bem vindo ao HawkFilmes </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        </p>
                    </div>

                </section>

                <section className="container-filmes">
                    <div className="planet-info">
                        <h2>Veja suas séries e filmes favoritos </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        </p>
                    </div>

                    <div>
                        <img alt="imagem planeta" className="img" src={ImgFilmes} />
                    </div>
                </section>

                <section className="container-Animes">
                    <div>
                        <img alt="imagem planeta" className="img" src={ImgAnimes} />
                    </div>

                    <div className="planet-info">
                        <h2>Veja suas séries e filmes favoritos</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        </p>
                    </div>
                </section>
            </main>

            <section>
                <div><Planos /></div>
            </section>

            <section className="fundoForm">
                    <div className='degrade-topo'></div>
                    <div className="inputs">
                        <h3>Entre em contato conosco</h3 >
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
                            </FormGroup>
                            {' '}
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
                            </FormGroup>
                            {' '}
                            <Button className="botaoEnviar">
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </section>
                <footer className="footer">
                        <div>
                            <img alt="logo rodape" src={logoTopo} />
                        </div>
                   
                        <div className="copy-footer">
                            <sup>&copy;</sup>Copyright HowkFilmes 2022 - Todos os direitos
                            reservados.
                        </div>
                </footer>
        </div>
    )
}

export default PaginaInicial
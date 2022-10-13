import React from "react"
import ButtonComp from "../components/ButtonComp"
import "./css/PaginaInicial.css"
import logoTopo from "../assets/logoTopo.png"
import Planet from "../assets/planet.png"
import ImgFilmes from "../assets/img-filmes.png"
import ImgAnimes from "../assets/img-animes.png"
import BotaoAmarelo from "../components/BotaoAmarelo"


function PaginaInicial(){
    return(
        <div>
            <header className="bannerInicial">
                <div className="gradient-top"></div>
                <div className="btn-topo">
                    <ButtonComp />
                </div>
                <div className="infoTop">
                    <img className="logoTop" src={logoTopo} alt="logo"/>
                    <p>Séries, filmes e animes que você precisa</p>
                    <BotaoAmarelo />
                </div>
                <div className="gradient-bottom"></div>
            </header>

            <main className="site container_main">
                <section className="container-planet">
                    <div>
                        <img alt="imagem planeta" className="img" src={Planet} />
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

                <section className="container_form">
                    <h2>Entre em contato conosco</h2>

                    <div>
                    <form type="submit" method="POST">
                        <label class="login-label">
                            <span>nome</span>
                            <input type="text" name="nome" class="input" />
                        </label>
                        <label class="login-label">
                            <span>Email</span>
                            <input type="email" name="email" class="input" />
                        </label>
                        <label class="login-label">
                            <span>Telefone</span>
                            <input type="tel" name="fone" class="input" />
                        </label>
                        <label class="login-label">
                            <span>Assunto</span>
                            <textarea name="mens" class="input"></textarea>
                        </label>
                    
                        <button class="btn-contato" type="submit">Enviar</button>
                    </form>
                    </div>
                </section>  
            </main>
        </div>
    )
}

export default PaginaInicial
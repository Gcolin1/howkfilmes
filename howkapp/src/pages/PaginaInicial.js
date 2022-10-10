import React from "react"
import ButtonComp from "../components/ButtonComp"
import "./css/PaginaInicial.css"
import logoTopo from "../assets/logoTopo.png"
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
        </div>
    )
}

export default PaginaInicial
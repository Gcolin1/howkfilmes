import Menu from '../components/Menu'
import ImgSobre from "../assets/imgSobre.png"
import Missao from "../assets/missao.png"
import Visao from "../assets/visao.png"
import Valores from "../assets/valores.png"
import Footer from "../components/Footer"
import './css/Sobre.css'
import Foto from '../assets/circulo.png'
import Colin from '../assets/colin.png'
import Santos from '../assets/santos.png'
import Rafa from '../assets/rafa.png'

function Sobre() {
    return (
        <div>
            <Menu />
            <section id='sobre'>
                <div id='info_sobre'>
                    <h1 className='titulo_sobre'>Sobre<span>nós</span></h1>
                    <p>
                        Nosso objetivo é criar o streaming que tenha a maior variação de filmes,
                        séries, desenhos e animes do mundo. Queremos que sua experiência
                        quando estiver procurando algo para assistir esteja em apenas
                        um site, somos práticos, tudo que você quer ver, está aqui!
                    </p>
                </div>
                <div className='imgSobre'>
                    <img src={ImgSobre} alt="imagem sobre" />
                </div>
            </section>

            <section id='parallaxSobre'>

            </section>

            <section id='containerMissao'>
                <div className="item" >
<<<<<<< HEAD
                    <img src={Missao} alt="missão"/>
                    <p>Nossa missão é levar a melhor experiência para nossos usuários e transformar em momentos mágicos. </p>
                </div>

                <div className="item">
                    <img src={Visao} alt="visão"/>
                    <p>Ser o lider em exibição, pela excelência em serviços e acessibilidade.</p>
                </div>

                <div className="item">
                    <img src={Valores} alt="valores"/>
                    <p>Atender a todos os nossos usuários com respeito, dedicação e transparência.</p>
=======
                    <img src={Missao} alt="missão" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting, remaining.</p>
                </div>

                <div className="item">
                    <img src={Visao} alt="visão" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting, remaining.</p>
                </div>

                <div className="item">
                    <img src={Valores} alt="valores" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting, remaining.</p>
>>>>>>> 5bc3c239053f8824a723101926c2aaf4f0c86dc4
                </div>
            </section>

            <section id='container_equipe'>
                <h2 className='titulo_equipe'>Nossa <span>equipe</span></h2>
                <section className='row1'>

                    <div>
                        <img src={Colin} alt="foto" />
                        <h3 className='nomeEquipe'>Guilherme Colin</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>

                    <div>
                        <img src={Foto} alt="foto" />
                        <h3 className='nomeEquipe'>Inaiara Araujo</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>

                    <div>
                        <img src={Santos} alt="foto" />
                        <h3 className='nomeEquipe'>Eriky Santos</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>

                    <div>
                        <img src={Rafa} alt="foto" />
                        <h3 className='nomeEquipe'>Rafaela Mendes</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>
                </section>
            </section>

            <section className='referencias_container'>
                <h2 className='tituloReferencias'>Referências</h2>
                <div className='containerNetflix'>
                    <h3 className='tituloParallax'>Netflix</h3>
                    <div className='gradient_topo'></div>
                    <div className='parallax_netflix'></div>
                    <div className='gradient_bottom'></div>
                </div>

                <div className='containerStar'>
                    <h3 className='tituloParallax'>Starplus</h3>
                    <div className='gradient_topo'></div>
                    <div className='parallax_star'></div>
                    <div className='gradient_bottom'></div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Sobre
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
                        séries e animes do mundo. Queremos que sua experiência
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
                    <img src={Missao} alt="missão"/>
                    <p>Nossa missão é levar a melhor experiência para nossos usuários através de conteúdo como séries e filmes. Queremos transformar momentos de descanso em experiências mágicas. </p>
                </div>

                <div className="item">
                    <img src={Visao} alt="visão"/>
                    <p>Ser o lider em exibição, pela excelência em serviços e acessibilidade.</p>
                </div>

                <div className="item">
                    <img src={Valores} alt="valores"/>
                    <p>Atender a todos os nossos usuários com respeito, dedicação e transparência.</p>
                </div>
            </section>

            <section id='container_equipe'>
                <h2 className='titulo_equipe'>Nossa <span>equipe</span></h2>
                <section className='row1'>

                    <div>
                        <img src={Colin} alt="foto" />
                        <h3 className='nomeEquipe'>Guilherme Colin</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                        <a className='linkLinkedin' target="_blank" href='https://linkedin.com/in/guilherme-nascimento-colin-684a50199/'>linkedin</a>
                    </div>

                    <div>
                        <img src={Foto} alt="foto" />
                        <h3 className='nomeEquipe'>Inaiara Araujo</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                        <a className='linkLinkedin' target="_blank" href='https://linkedin.com/in/'>linkedin</a>
                    </div>

                    <div>
                        <img src={Santos} alt="foto" />
                        <h3 className='nomeEquipe'>Eriky Santos</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                        <a className='linkLinkedin' target="_blank" href='https://www.linkedin.com/in/eriky-costa-b82b37255'>linkedin</a>
                    </div>

                    <div>
                        <img src={Rafa} alt="foto" />
                        <h3 className='nomeEquipe'>Rafaela Mendes</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                        <a className='linkLinkedin' target="_blank" href='https://linkedin.com/in/rafaela-martins-dos-santos-a74b75183'>linkedin</a>
                    </div>

                    <div>
                        <img src={Rafa} alt="foto" />
                        <h3 className='nomeEquipe'>Guilherme varjão</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                        <a className='linkLinkedin' target="_blank" href='https://www.linkedin.com/in/guilhermevarjãosantos'>linkedin</a>
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
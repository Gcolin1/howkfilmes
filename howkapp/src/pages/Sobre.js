import Menu from '../components/Menu'
import ImgSobre from "../assets/imgSobre.png"
import Missao from "../assets/missao.png"
import Visao from "../assets/visao.png"
import Valores from "../assets/valores.png"
import './css/Sobre.css'
import Foto from '../assets/circulo.png'

function Sobre(){
    return(
        <div>
            <Menu />
            <section id='sobre'>
                <div id='info_sobre'>
                    <h1 className='titulo_sobre'>Sobre<span>nós</span></h1>
                    <p>
                    Nosso objetivo é criar o streaming que tenha a maior variação de filmes, séries, desenhos e animes do mundo. Queremos que sua experiência quando estiver procurando algo para assistir esteja em apenas um site, somos práticos, tudo que você quer ver, está aqui!
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting, remaining.</p>
                </div>

                <div className="item">
                    <img src={Visao} alt="visão"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting, remaining.</p>
                </div>

                <div className="item">
                    <img src={Valores} alt="valores"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting, remaining.</p>
                </div>
            </section>

            <section id='container_equipe'>
                <h2 className='titulo_equipe'>Nossa <span>equipe</span></h2>
                <section className='row1'>

                    <div>
                        <img src={Foto} alt="foto" />
                        <h3 className='nomeEquipe'>Guilherme Colin</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>

                    <div>
                        <img src={Foto} alt="foto" />
                        <h3 className='nomeEquipe'>Inaiara Araujo</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>

                    <div>
                        <img src={Foto} alt="foto" />
                        <h3 className='nomeEquipe'>Eriky Santos</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>

                    <div>
                        <img src={Foto} alt="foto" />
                        <h3 className='nomeEquipe'>Rafaela Mendes</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>
                </section>

                <section className='row2'>
                <div>
                        <img src={Foto} alt="foto" />
                        <h3 className='nomeEquipe'>Guilherme Varjão</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>

                    <div>
                        <img src={Foto} alt="foto" />
                        <h3 className='nomeEquipe'>Gustavo Soarez</h3>
                        <p className='cargoEquipe'>Desenvolvedor<br></br>Front-end</p>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Sobre
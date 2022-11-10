import Menu from '../components/Menu'
import ImgSobre from "../assets/imgSobre.png"
import Missao from "../assets/missao.png"
import Visao from "../assets/visao.png"
import Valores from "../assets/valores.png"
import './css/Sobre.css'

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
        </div>
    )
}

export default Sobre
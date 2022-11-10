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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.
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
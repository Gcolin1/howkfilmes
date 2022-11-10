import Menu from '../components/Menu'
import ImgSobre from "../assets/imgSobre.png"
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
        </div>
    )
}

export default Sobre
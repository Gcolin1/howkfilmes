import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';
import Banner7 from '../assets/banner7.png'; 
import Banner3 from '../assets/banner3.png';
import Banner6 from '../assets/banner6.png';

function Banner() {
    return (
        <Carousel className="containerBanner">
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={Banner7} alt="filmes" />
                <Carousel.Caption>
                    <h3>Bem-vindo a howkfilmes</h3>
                    <p>
                        site para você acompanhar suas séries e filmes favoritos
                        de onde você estiver
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={Banner6} alt="animes" />
                <Carousel.Caption>
                    <h3>Todas as temporadas do seu anime favorito</h3>
                    <p>Assista agora a nova temporada de Demon Slayer</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Banner3} alt="Séries" />
                <Carousel.Caption>
                    <h3>Séries completas para você maratonar</h3>
                    <p>
                        Quer algo mais emocionante? Maratone agora todas as
                        temporadas de Braking Bad
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;

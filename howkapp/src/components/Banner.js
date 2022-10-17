import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'
import Banner1 from '../assets/banner.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/banner3.png';

function Banner() {
  return (
    <Carousel className="containerBanner">
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Banner1}
          alt="filmes"
        />
        <Carousel.Caption>
          <h3>Bem vindo a howkfilmes</h3>
          <p>site para vc acompanhar suas séries e filmes favoritos de onde vc estiver</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Banner2}
          alt="animes"
        />
        <Carousel.Caption>
          <h3>Todas as temporadas do seu anime favorito</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Banner3}
          alt="Séries"
        />
        <Carousel.Caption>
          <h3>Séries completas para você maratonar</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
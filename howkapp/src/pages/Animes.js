import React, { useEffect, useState } from 'react';
import Tmdb from '../Tmdb';
import Loading from '../components/Loading';
import ListaDeFilmes from '../components/ListaDeFilmes';
import Menu from '../components/Menu';
import Carousel from 'react-bootstrap/Carousel';
import BannerAnime1 from '../assets/bannerAnime1.png';
import BannerAnime2 from '../assets/bannerAnime2.png';
import BannerAnime3 from '../assets/bannerAnime3.png';
import Footer from '../components/Footer';

function Animes() {
    const [movieList, setMovieList] = useState([]);

    //useEffect quandop a tela for carregada ele vai executar a função que esta dentro dela
    useEffect(() => {
        const loadAnimes = async () => {
            //pegando toda a lista de filmes

            let list = await Tmdb.getAnimesList();
            setMovieList(list);
        };

        loadAnimes();
    }, []);

    return (
        <div className="pageHome">
            <Menu />

            <Carousel className="containerBanner">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={BannerAnime3}
                        alt="filmes"
                    />
                    <Carousel.Caption className="carrosselInfo">
                        <h3>Bem-vindo a howkfilmes</h3>
                        <p>
                            site para você acompanhar suas séries e filmes
                            favoritos de onde você estiver
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={BannerAnime1}
                        alt="animes"
                    />
                    <Carousel.Caption className="carrosselInfo">
                        <h3>Todas as temporadas do seu anime favorito</h3>
                        <p>Assista agora a nova temporada de Demon Slayer</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={BannerAnime2}
                        alt="Séries"
                    />
                    <Carousel.Caption className="carrosselInfo">
                        <h3>Séries completas para você maratonar</h3>
                        <p>
                            Quer algo mais emocionante? Maratone agora todas as
                            temporadas de Braking Bad
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className="listas">
                {movieList.map((item, key) => (
                    <ListaDeFilmes
                        key={key}
                        title={item.title}
                        items={item.items}
                    />
                ))}
            </section>

            {movieList.length <= 0 && <Loading />}
            <Footer />
        </div>
    );
}

export default Animes;

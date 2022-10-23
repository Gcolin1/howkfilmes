import React, { useEffect, useState } from 'react';
import ListaDeFilmes from '../components/ListaDeFilmes';
import Loading from '../components/Loading';
import Tmdb from '../Tmdb';
import logoTopo from '../assets/logoTopo.png';
import instagram from '../assets/instagram2.png';
import facebook from '../assets/facebook2.png';
import twitter from '../assets/twitter.png';

import './css/Filmes.css';

function Filmes() {
    const [movieList, setMovieList] = useState([]);

    //useEffect quandop a tela for carregada ele vai executar a função que esta dentro dela
    useEffect(() => {
        const loadfilmes = async () => {
            //pegando toda a lista de filmes

            let list = await Tmdb.PaginaFilmes();
            setMovieList(list);
        };

        loadfilmes();
    }, []);

    return (
        <div className="pageHome">
            <header className="cabeça">
                <img className="logoTop" src={logoTopo} alt="logo" />

                <a className="navegaçao" href="https://www.youtube.com/">
                    Filmes
                </a>

                <a className="navegaçao" href="https://www.youtube.com/">
                    Séries
                </a>

                <a className="navegaçao" href="https://www.youtube.com/">
                    Animes
                </a>

                <a className="navegaçao" href="https://www.youtube.com/">
                    Para toda família
                </a>

                <div className="search-box">
                    <input
                        autocomplete="off"
                        type="text"
                        name="tPesquisar"
                        id="Filmes"
                        required="required"
                        placeholder="Pesquisar..."
                    />
                </div>
            </header>

            <section className="bem-vindo">
                <h1>Bem-vindo ao HowkFilmes</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{' '}
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{' '}
                </p>
            </section>

            <section></section>

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

            <footer className="rodape">
                <img className="logoBottom" src={logoTopo} alt="logoTopo" />
                <br></br>

                <a
                    className="logoBottom"
                    href="https://www.instagram.com/"
                    target="_blank_"
                >
                    <img
                        className="redessocial-1"
                        src={instagram}
                        alt="instagram"
                    />
                </a>
                <a
                    className="logoBottom"
                    href="https://www.facebook.com/"
                    target="_blank_"
                >
                    <img
                        className="redessocial-2"
                        src={facebook}
                        alt="facebook"
                    />
                </a>

                <a
                    className="logoBottom"
                    href="https://twitter.com/home"
                    target="_blank_"
                >
                    <img
                        className="redessocial-3"
                        src={twitter}
                        alt="twitter"
                    />
                </a>
                <br></br>

                <small className="copy">
                    <sup>&copy;</sup> HowkFilmes 2022 - Todos os direitos
                    reservados.
                </small>
            </footer>
        </div>
    );
}

export default Filmes;

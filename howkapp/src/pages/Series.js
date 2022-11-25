import React, { useEffect, useState } from 'react';
import ListaDeFilmes from '../components/ListaDeFilmes';
import Loading from '../components/Loading';
import Tmdb from '../Tmdb';
import './css/Series.css';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import  Menu  from '../components/Menu';


function Series() {
    const [movieList, setMovieList] = useState([]);

    //useEffect quandop a tela for carregada ele vai executar a função que esta dentro dela
    useEffect(() => {
        const loadSeries = async () => {
            //pegando toda a lista de filmes

            let list = await Tmdb.getListSeries();
            setMovieList(list);
        };

        loadSeries();
    }, []);

    return (
        <div className="pageSeries">

<header className="cabeça">
                <Menu />
                <Banner />
            </header>

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

export default Series;

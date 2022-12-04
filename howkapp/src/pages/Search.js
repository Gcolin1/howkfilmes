import Menu from '../components/Menu';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Search.css';
import Footer from '../components/Footer'

function Search() {
    const API_KEY = '582270ca0cc6eefd08e343e5c968c71f';
    const searchUrl = 'https://api.themoviedb.org/3/search/multi'; 
    
    const { search } = useLocation();
    const searchParams = useMemo(() => new URLSearchParams(search), [search]);

    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');

    const getSearchMovies = async (url) => {
        const req = await fetch(url);
        const json = await req.json();
        setMovies(json.results);
        console.log(movies);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchUrl}?api_key=${API_KEY}&query=${query}`;

        getSearchMovies(searchWithQueryURL);
    }, [query]);

    return (
        <div>
            <Menu />
            
            <section className='containerMain'>
                <h2 className="query-text">
                    Resultados para: <span>{query}</span>
                </h2>
                {movies.length <= 0 &&
                    <p className='carregando'>Carregando...</p>
                }
                <div className='container_movies'>
                    {movies.map((movie) => (
                        <div className='item_movie' key={movie}>
                            <Link to={`/detalhe/${movie.id}`} >
                                <img
                                    alt={movie.title}
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    className="movie_img"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Search;

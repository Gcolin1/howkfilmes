import Menu from '../components/Menu';
import { useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useState } from 'react';
import './css/Search.css';
import MovieCard from '../components/MovieCard'

function Search() {
    const API_KEY = '582270ca0cc6eefd08e343e5c968c71f';
    const searchUrl = "https://api.themoviedb.org/3/search/movie/"
    const { search } = useLocation();

    const searchParams = useMemo(() => new URLSearchParams(search), [search]);

    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');

    const getSearchMovies = async (url) => {
        const req = await fetch(url);
        const json = await req.json();
        console.log(movies)
        setMovies(json.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchUrl}?api_key=${API_KEY}&query=${query}`

        getSearchMovies(searchWithQueryURL)
    }, [query]);

    return (
        <div>
            <Menu />
            <h2 className="query-text">
                Resultados para: <span>{query}</span>
            </h2>
            
        </div>
    );
}

export default Search;

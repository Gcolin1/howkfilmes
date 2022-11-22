const API_KEY = '582270ca0cc6eefd08e343e5c968c71f';
const API_BASE = 'https://api.themoviedb.org/3' ;

/*
    requisitando listas de filmes da API

    Recopmendados 
    ação 
    comedia
    terror
    romance
    documentarios 
    animes
*/

const basicFetch = async(endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = req.json()
    return json;
}

export default{

    getlistmovies: async() =>{
        return[
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            
            
            {
                slug: 'movies',
                title: 'filmes',
                items: await basicFetch(`/discover/movie?&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'series',
                title: 'Séries',
                items: await basicFetch(`/discover/tv?&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'animes',
                title: 'Animes',
                items: await basicFetch(`/discover/tv?with_genres=16&with_keywords=210024&language=pt-BR&api_key=${API_KEY}`)
            },

            
        ]
    },

    PaginaFilmes: async() =>{
        return[

            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'animes',
                title: 'Animes',
                items: await basicFetch(`/discover/movie?with_genres=16&with_keywords=210024&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getListSeries: async () =>{
        return [
            {
                slug: 'series',
                title: 'Séries',
                items: await basicFetch(`/discover/tv?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'series_comedy',
                title: 'Séries de Comédia',
                items: await basicFetch(`/discover/tv?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'series_romance',
                title: 'Séries de Romance',
                items: await basicFetch(`/discover/tv?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

    getAnimesList: async () =>{
        return [
            {
                slug: 'animes',
                title: 'Filmes',
                items: await basicFetch(`/discover/movie?with_genres=16&with_keywords=210024&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'animes',
                title: 'Animes',
                items: await basicFetch(`/discover/tv?with_genres=16&with_keywords=210024&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'animes',
                title: 'Animes Romanticos',
                items: await basicFetch(`/discover/tv?with_genres=10749&with_keywords=210024&language=pt-BR&api_key=${API_KEY}`)
            },

            {
                slug: 'animes',
                title: 'Animes de Comédia',
                items: await basicFetch(`/discover/tv?with_genres=35&with_keywords=210024&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },

}
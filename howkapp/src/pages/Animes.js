import React, {useEffect, useState}  from 'react'
import Tmdb from '../Tmdb'
import Loading from "../components/Loading"
import ListaDeFilmes from '../components/ListaDeFilmes'
import Menu from '../components/Menu'

function Animes(){
    const [movieList, setMovieList] = useState([])

    //useEffect quandop a tela for carregada ele vai executar a função que esta dentro dela
    useEffect(() => {
        const loadAnimes = async () => {
            //pegando toda a lista de filmes

            let list = await Tmdb.getAnimesList()
            setMovieList(list);
        }

        loadAnimes()
    }, [])

    return(
        <div className='pageHome'>
                <Menu />
                <section className='listas'>
                    {movieList.map((item, key) =>(
                        <ListaDeFilmes key={key} title={item.title} items={item.items} />
                    ))}
                </section>

                {movieList.length <= 0 &&
                     <Loading />    
               }

        </div>
    )
}

export default Animes
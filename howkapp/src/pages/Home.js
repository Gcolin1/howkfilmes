import React, {useEffect, useState}  from 'react'
import Tmdb from '../Tmdb'
import Loading from '../components/Loading'
import ListaDeFilmes from '../components/ListaDeFilmes'
import Menu from '../components/Menu'
import Banner from '../components/Banner'


function Home(){

    const [movieList, setMovieList] = useState([])

    //useEffect quandop a tela for carregada ele vai executar a função que esta dentro dela
    useEffect(() => {
        const loadAll = async () => {
            //pegando toda a lista de filmes

            let list = await Tmdb.getlistmovies()
            setMovieList(list);
        }

        loadAll()
    }, [])

    return(
        <div className='pageHome'>
                <Menu />
                <Banner />

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

export default Home;
import React, {useEffect, useState} from "react"
import ListaDeFilmes from "../components/ListaDeFilmes"
import Tmdb from "../Tmdb"

function Series(){
    const [movieList, setMovieList] = useState([])

    //useEffect quandop a tela for carregada ele vai executar a função que esta dentro dela
    useEffect(() => {
        const loadSeries = async () => {
            //pegando toda a lista de filmes

            let list = await Tmdb.getListSeries()
            setMovieList(list);
        }

        loadSeries()
    }, [])

    return(
        <div className='pageHome'>
                <section className='listas'>
                    {movieList.map((item, key) =>(
                        <ListaDeFilmes key={key} title={item.title} items={item.items} />
                    ))}
                </section>

        </div>
    )
}

export default Series
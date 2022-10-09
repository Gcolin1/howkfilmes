import React, {useEffect, useState} from "react"
import ListaDeFilmes from "../components/ListaDeFilmes"
import Tmdb from "../Tmdb"

function Filmes(){
    const [movieList, setMovieList] = useState([])

    //useEffect quandop a tela for carregada ele vai executar a função que esta dentro dela
    useEffect(() => {
        const loadfilmes = async () => {
            //pegando toda a lista de filmes

            let list = await Tmdb.PaginaFilmes()
            setMovieList(list);
        }

        loadfilmes()
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

export default Filmes;
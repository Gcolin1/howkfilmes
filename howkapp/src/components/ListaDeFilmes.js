import React from "react";
import './ListaDeFilmes.css'

export default({title, items}) => {
    return(
        <div className="LinhaDeFilmes">
            <h2 className="LinhaDeFilmes--title">{title}</h2>
            <div className="LinhaDeFilmes--container">   
                <div class="LinhaDeFilmes--lista">
                    {items.results.length > 0 && items.results.map((item, key)=>(
                       <div key={key} className="LinhaDeFilmes--item"> <img alt={items.title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} /></div>
                    ))}
                </div>   
            </div>
        </div>
    )   
}


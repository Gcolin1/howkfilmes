function MovieCard({ title, items }) {

    return (
        <div>
            {items.results.length > 0 &&
                items.results.map((item, key) => (
                    <div key={key} className="LinhaDeFilmes--item">
                        {' '}
                        <img
                            alt={items.title}
                            src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        />
                    </div>
                ))}
        </div>
    );
}

export default MovieCard;

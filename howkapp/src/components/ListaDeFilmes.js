import React, { useState } from 'react';
import './ListaDeFilmes.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listaL = items.results.length * 150;
        if (window.innerWidth - listaL > x) {
            x = window.innerWidth - listaL - 60;
        }
        setScrollX(x);
    };

    return (
        <div className="LinhaDeFilmes">
            <h2 className="LinhaDeFilmes--title">{title}</h2>

            <div className="left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>

            <div className="right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="LinhaDeFilmes--container">
                <div
                    class="LinhaDeFilmes--lista"
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150,
                    }}
                >
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
            </div>
        </div>
    );
};

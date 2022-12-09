import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './css/Detalhe.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';

function Detalhe() {
    const API_KEY = '582270ca0cc6eefd08e343e5c968c71f';
    const movieURL = 'https://api.themoviedb.org/3/movie/';

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [video, setVideo] = useState(null);

    const getMovie = async (url) => {
        const req = await fetch(url);
        const json = await req.json();
        setMovie(json);
    };

    useEffect(() => {
        const movieUrl = `${movieURL}${id}?api_key=${API_KEY}&language=pt-BR`;
        getMovie(movieUrl);
    }, []);

    //Busca de videos

    const getVideo = async (url) => {
        const req = await fetch(url);
        const json = await req.json();
        setVideo(json);
        console.log(video);
    };

    useEffect(() => {
        const videoUrl = `${movieURL}${id}/videos?api_key=${API_KEY}`;
        getVideo(videoUrl);
    }, []);

    return (
        <div>
            <Menu />
            {movie && (
                <div className="infoDetalhe">
                    <section
                        className="bannerDetalhe"
                        style={{
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                        }}
                    >
                        <div className="degradeVertical">
                            <div className="degradeHorizontal">
                                <h1 className="tituloDetalhe">{movie.title}</h1>
                                <section className="bannerInfo">
                                    <div className="detalheInfo">
                                        <h3>
                                            <StarIcon
                                                style={{
                                                    fontSize: 25,
                                                    marginRight: 4,
                                                }}
                                            ></StarIcon>
                                            Avaliação
                                        </h3>
                                        <p className="pontos">
                                            {movie.vote_average}
                                        </p>
                                        <h3 className="orcamento">
                                            <AttachMoneyIcon
                                                style={{
                                                    fontSize: 25,
                                                    marginRight: 4,
                                                }}
                                            ></AttachMoneyIcon>
                                            Orçamento:
                                        </h3>
                                        <p>{movie.budget}</p>
                                    </div>
                                    <div className="descricaoDetalhe">
                                        <h3 className="duracao">
                                            <AccessTimeIcon
                                                style={{
                                                    fontSize: 20,
                                                    marginRight: 10,
                                                }}
                                            ></AccessTimeIcon>
                                            Duração:
                                        </h3>
                                        <p>{movie.runtime} minutos</p>
                                        <h3>
                                            <DescriptionIcon
                                                style={{
                                                    fontSize: 20,
                                                    marginRight: 10,
                                                }}
                                            ></DescriptionIcon>
                                            Sinopse:
                                        </h3>
                                        <p>{movie.overview}</p>
                                        <video autoPlay loop>
                                            {movie.video}
                                        </video>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </section>

                    {video && (
                        <div className="containerTrailer">
                            <h2 className="tituloTrailer">Confira o trailer</h2>
                            <iframe
                                src={`https://www.youtube.com/embed/${video.results[1].key}`}
                                className='trailer'
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    )}
                </div>
            )}
            <Footer />
        </div>
    );
}

export default Detalhe;

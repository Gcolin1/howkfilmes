import React from 'react';
import logoTopo from '../assets/logoTopo.png';
import instagram from '../assets/instagram-rodape.png';
import facebook from '../assets/facebook-rodape.png';
import twitter from '../assets/twitter.png';
import './Footer.css'

function Footer(){
    return(
        <footer className="rodape">
                <div className='degrade-top'></div>
                <img className="logoBottom" src={logoTopo} alt="logoTopo" />
                

                <div className='redes'>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank_"
                    >
                        <img
                            className="redessocial-1"
                            src={instagram}
                            alt="instagram"
                        />
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank_"
                    >
                        <img
                            className="redessocial-2"
                            src={facebook}
                            alt="facebook"
                        />
                    </a>
                    <a
                        href="https://twitter.com/home"
                        target="_blank_"
                    >
                        <img
                            className="redessocial-3"
                            src={twitter}
                            alt="twitter"
                        />
                    </a>
                </div>
        

                <small className="copy">
                    <sup>&copy;</sup> HowkFilmes 2022 - Todos os direitos
                    reservados.
                </small>
            </footer>
    )
}

export default Footer
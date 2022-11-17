import React from 'react';
import '../components/Planos.css';
import BotaoRoxo from '../components/BotaoRoxo'
import { Link } from 'react-router-dom';

function Planos() {
    return (
        
        <section>
        <div>
            <h2 className="titulo">Conheça nossos planos</h2>

            <div className="planos">
                <div className="plano-1">
                    <p>Por apenas</p>
                    <p id="p-1">R$20,00</p>
                    <p>mensais</p>
                </div>

                <div className="plano-2">
                    <p>Plano anual</p>
                    <p id="p-2">R$156,00</p>
                    <p>desconto especial</p>
                </div>

                <div className="plano-3">
                    <p>
                        Baixa renda<br></br>
                        pague R$12,00 e<br></br>
                        ganhe 3 messes<br></br>
                        gratuitos
                    </p>
                </div>

                <div className="hover-1">
                <p className='texto'>
                    tenha acesso a nossa<br></br>
                    plataforma e assista<br></br>
                    seus conteudos<br></br>
                    preferidos<br></br>
                    <Link to={'/cadastro'}>
                        <BotaoRoxo />
                    </Link>
                </p>
            </div>

            <div className="hover-2">
                <p className='texto'>
                    tenha acesso a nossa<br></br>
                    plataforma e assista<br></br>
                    seus conteudos<br></br>
                    preferidos<br></br>
                    <Link to={'/cadastro'}>
                        <BotaoRoxo />
                    </Link>
                </p>
            </div>

            <div className="hover-3">
                <p className='texto'>
                    tenha acesso a nossa<br></br>
                    plataforma e assista<br></br>
                    seus conteudos<br></br>
                    preferidos<br></br>
                    <Link to={'/cadastro'}>
                        <BotaoRoxo />
                    </Link>
                </p>
            </div>
            </div>

          
        </div>
    </section>

    );
}

export default Planos;

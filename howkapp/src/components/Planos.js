import React from 'react';
import '../components/Planos.css';
import BotaoRoxo from '../components/BotaoRoxo'
import BotaoRoxo2 from '../components/BotaoRoxo2'
import { Link } from 'react-router-dom';

function Planos() {
    return (
        
        <section>
        <div className='tudo'>
            <h2 className="titulo">Conheça nossos planos</h2>

            <div className="planos">
                <div className="plano-1">
                    <div className='bordaRoxa-1'>
                    <p>Por apenas</p>
                    <p id="p-1">R$20,00</p>
                    <p>mensais</p>
                    </div>
                    <p className='texto-1'>
                    tenha acesso a nossa<br></br>
                    plataforma e assista<br></br>
                    seus conteudos<br></br>
                    preferidos<br></br>
                    <Link to={'/cadastro'}>
                        <BotaoRoxo2 />
                    </Link>
                </p>
                </div>

                <div className="plano-2">
                    <div className='bordaRoxa-2'>
                    <p>Plano anual</p>
                    <p id="p-2">R$156,00</p>
                    <p>desconto especial</p>
                    </div>

                    <p className='texto-2'>
                    tenha acesso a nossa<br></br>
                    plataforma e assista<br></br>
                    seus conteudos<br></br>
                    preferidos<br></br>
                    <Link to={'/cadastro'}>
                        <BotaoRoxo2 />
                    </Link>
                </p>
                </div>

                <div className="plano-3">
                    <div className='bordaRoxa-3'>
                    <p>
                        Baixa renda<br></br>
                        pague R$12,00 e<br></br>
                        ganhe 3 messes<br></br>
                        gratuitos
                    </p>
                    </div>
                    <p className='texto-2'>
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

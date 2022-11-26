import React from 'react';
import '../components/Planos.css';
import BotaoRoxo from '../components/BotaoRoxo';
import BotaoRoxo2 from '../components/BotaoRoxo2';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Planos() {
    return (
        <section>
            <div className="tudo">
                <h2 className="titulo">Escolha seu plano</h2>

                <div className="planos">
                    <div className="plano-1">
                        <div className="bordaRoxa-1">
                            <h4>Plano mensal</h4>
                            <h4>R$20,00/mês</h4>
                            <Link to={'/cadastro'}>
                                <BotaoRoxo2 />
                            </Link>
                            <hr></hr>

                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="cartoes" title="Cartões">
                                    <form className="preencher">
                                        <input
                                            className="inputCartaoNumero"
                                            name="Numero de Cartão"
                                            placeholder="Numero de Cartão"
                                            type="Numero de Cartão"
                                        />

                                        <input
                                            className="inputCartaoNome"
                                            name="Nome do cartão"
                                            placeholder="Nome do cartão"
                                            type="Nome do Cartão"
                                        />

                                        <input
                                            className="inputmmaa"
                                            name="MM/AA"
                                            placeholder="MM/AA"
                                            type="MM/AA"
                                        />

                                        <input
                                            className="inputCvv"
                                            name="CVV"
                                            placeholder="CVV"
                                            type="CVV"
                                        />
                                    </form>
                                </Tab>
                                <Tab eventKey="boleto" title="Boleto"></Tab>
                                <Tab eventKey="pix" title="Pix"></Tab>
                            </Tabs>
                        </div>
                        <p className="texto-1"></p>
                    </div>



                    <div className="plano-2">
                        <div className="bordaRoxa-2">
                            <h3>Plano anual</h3>
                            <h3>R$168,00/ano</h3>
                            <h4>Economeze 30% no plano anual</h4>
                            <Link to={'/cadastro'}>
                                <BotaoRoxo2 />
                            </Link>
                            <hr></hr>

                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="cartoes" title="Cartões">
                                    <form className="preencher">
                                        <input
                                            className="inputCartaoNumero"
                                            name="Numero de Cartão"
                                            placeholder="Numero de Cartão"
                                            type="Numero de Cartão"
                                        />

                                        <input
                                            className="inputCartaoNome"
                                            name="Nome do cartão"
                                            placeholder="Nome do cartão"
                                            type="Nome do Cartão"
                                        />

                                        <input
                                            className="inputmm/aa"
                                            name="MM/AA"
                                            placeholder="MM/AA"
                                            type="MM/AA"
                                        />

                                        <input
                                            className="inputCvv"
                                            name="CVV"
                                            placeholder="CVV"
                                            type="CVV"
                                        />
                                    </form>
                                </Tab>
                                <Tab eventKey="boleto" title="Boleto"></Tab>
                                <Tab eventKey="pix" title="Pix"></Tab>
                            </Tabs>
                        </div>

                  
                    </div>

                    <div className="plano-3">
                        <div className="bordaRoxa-3">
                            <h3>Baixa renda</h3>
                            <h3>R$12,00/mês</h3>
                            <h4>3 messes gratuitos, pague a partir do 4 mês</h4>
                            <Link to={'/cadastro'}>
                                <BotaoRoxo2 />
                            </Link>
                            <hr></hr>

                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="cartoes" title="Cartões">
                                    <form className="preencher">
                                        <input
                                            className="inputCartaoNumero"
                                            name="Numero de Cartão"
                                            placeholder="Numero de Cartão"
                                            type="Numero de Cartão"
                                        />

                                        <input
                                            className="inputCartaoNome"
                                            name="Nome do cartão"
                                            placeholder="Nome do cartão"
                                            type="Nome do Cartão"
                                        />

                                        <input
                                            className="inputmm/aa"
                                            name="MM/AA"
                                            placeholder="MM/AA"
                                            type="MM/AA"
                                        />

                                        <input
                                            className="inputCvv"
                                            name="CVV"
                                            placeholder="CVV"
                                            type="CVV"
                                        />
                                    </form>
                                </Tab>
                                <Tab eventKey="boleto" title="Boleto"></Tab>
                                <Tab eventKey="pix" title="Pix"></Tab>
                            </Tabs>
                        </div>
                   
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Planos;

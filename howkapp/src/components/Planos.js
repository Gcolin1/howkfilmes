import React from 'react';
import '../components/Planos.css';
import { Link } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function Planos() {
    return (
        <section>

            <div className="containerPlanos">
            <div className='containerLink'>
                <Link className='linkVoltar' to={"/cadastro"}>
                    <NavigateBeforeIcon style={{ fontSize: 50 }}></NavigateBeforeIcon>
                    <h3>Voltar</h3>
                </Link>
            </div>

                <h2 className="titulo">Escolha seu plano</h2>
                <div className="planos">
                    <div className="plano-1">
                        <div className="bordaRoxa-1">
                            <div className='planoInfo'>
                                <h2>Plano mensal</h2>
                                <h3>R$20,00/mês</h3>
                            </div>
                            <Link to={'/login'}>
                                <button className='BtnAssinar'>
                                    Assinar
                                </button>
                            </Link>
                            <hr></hr>

                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example"
                                className="mb-3 tabs1"
                            >
                                <Tab className='tab1 text-white' eventKey="cartoes" title="Cartões">
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

                                        <div className='inpVenc'>
                                            <input
                                                className="inputMmaa"
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
                                        </div>
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
                            <div className='planoInfo'>
                                <h2>Plano anual</h2>
                                <h3>R$15,00/mês</h3>
                            </div>
                            <Link to={'/login'}>
                                <button className='BtnAssinar'>
                                    Assinar
                                </button>
                            </Link>
                            <h4 className='textEco'>Economeze 30% no plano anual</h4>

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

                                        <div className='inpVenc'>
                                            <input
                                                className="inputMmaa"
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
                                        </div>
                                    </form>
                                </Tab>
                                <Tab eventKey="boleto" title="Boleto"></Tab>
                                <Tab eventKey="pix" title="Pix"></Tab>
                            </Tabs>
                        </div>


                    </div>

                    <div className="plano-3">
                        <div className="bordaRoxa-3">
                            <div className='planoInfo'>
                                <h2>Baixa renda</h2>
                                <h3>R$12,00/mês</h3>
                            </div>
                            <Link to={'/login'}>
                                <button className='BtnAssinar'>
                                    Assinar
                                </button>
                            </Link>

                            <h4 className='textEco' >3 messes gratuitos, pague a partir do 4 mês</h4>

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

                                        <div className='inpVenc'>
                                            <input
                                                className="inputMmaa"
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
                                        </div>
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

import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import IconGoogle from '../assets/google.png';
import IconApple from '../assets/apple.png';
import IconFace from '../assets/facebook.png';
import './css/cadastrodapagina.css';

function Cadastro() {
    return (
        <div className="containerCadastro">
            <div className="containerInput">
                <h1>Cadastre-se</h1>
                <Form className='formLogin'>
                        <FormGroup floating>
                            <Input
                                className="inputLogin"
                                id="exampleNome"
                                name="email"
                                placeholder="Nome Completo"
                                type="text"
                            />
                            <Label className="labelLogin" for="exampleEmail">
                                Nome Completo
                            </Label>
                        </FormGroup>

                        <FormGroup floating>
                            <Input
                                className="inputLogin"
                                id="exampleEmail"
                                name="email"
                                placeholder="E-mail"
                                type="email"
                            />
                            <Label className="labelLogin" for="examplePassword">
                                E-mail
                            </Label>
                        </FormGroup>

                        <FormGroup floating>
                            <Input
                                className="inputLogin"
                                id="exampleTelefone"
                                name="Telefone"
                                placeholder="Telefone"
                                type="Telefone"
                            />
                            <Label className="labelLogin" for="examplePassword">
                                Telefone
                            </Label>
                        </FormGroup>

                        <FormGroup floating>
                            <Input
                                className="inputLogin"
                                id="exampleSenha"
                                name="senha"
                                placeholder="Senha"
                                type="senha"
                            />
                            <Label className="labelLogin" for="examplePassword">
                                Senha
                            </Label>
                        </FormGroup>
                        {' '}
                </Form>
                <Link to={'/cadastro'} className="linkCad">
                    Esqueceu a Senha?
                </Link>

                <div class="login-icons">
                    <button type="button" class="icon-button">
                        <img src={IconFace} alt="facebook" />
                    </button>
                    <button type="button" class="icon-button">
                        <img src={IconGoogle} alt="google" />
                    </button>
                    <button type="button" class="icon-button">
                        <img src={IconApple} alt="apple" />
                    </button>
                </div>

                <Link to={'/home'}>
                    <Button id="BtnLogin">Entrar</Button>
                </Link>
            </div>

            <div className="backgroundCadastro"></div>
        </div>
    );
}

export default Cadastro;

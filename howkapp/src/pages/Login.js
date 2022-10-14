import React from 'react'
import './css/Login.css'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import IconGoogle from '../assets/google.png'
import IconApple from '../assets/apple.png'
import IconFace from '../assets/facebook.png'

function Login(){
    return(
        <div className='backgroundLogin'>
           <div className='containerInput'>
                <h1>Entrar</h1>
                <Form>
                        <FormGroup floating>
                            <Input
                                className="inputLogin"
                                id="exampleNome"
                                name="email"
                                placeholder="E-mail"
                                type="email"
                            />
                            <Label className="labelLogin" for="exampleEmail">
                                E-mail
                            </Label>
                        </FormGroup>

                        <FormGroup floating>
                            <Input
                                className="inputLogin"
                                id="exampleSenha"
                                name="senha"
                                placeholder="Senha"
                                type="password"
                            />
                            <Label className="labelLogin" for="examplePassword">
                                Senha
                            </Label>
                        </FormGroup>
                        {' '}
                </Form>
                <Link to={"/cadastro"} className="linkCad">Não tem acesso? assine.</Link>

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

                <Link to={"/"}>
                    <Button id='BtnLogin'>
                       Entrar
                    </Button>
                </Link>
           </div>
        </div>
    )
}

export default Login
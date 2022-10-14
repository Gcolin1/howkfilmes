import React from 'react'
import './css/Login.css'
import {Form, FormGroup, Input, Label, Button} from 'reactstrap'

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
                <a className="linkCad">Não tem acesso? assine.</a>

                <Button id='BtnLogin'>
                   Entrar
                </Button>
           </div>
        </div>
    )
}

export default Login
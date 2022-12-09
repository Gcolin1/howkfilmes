import React, { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import IconGoogle from '../assets/google.png';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconApple from '../assets/apple.png';
import IconFace from '../assets/facebook.png';
import './css/cadastrodapagina.css';

function Cadastro() {
    const history = useHistory();

    const [form, SetForm] = useState({
        email: '',
        senha: '',
    });

    const [objetosVazios, setObjetosVazios] = useState(false);

    const handleChange = (e) => {
        let newProp = form;
        newProp[e.target.name] = e.target.value;
        SetForm({ ...newProp });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let objetosVazios = Object.values(form).some((obj) => obj == '');
        setObjetosVazios(objetosVazios);

        if (!objetosVazios) {
            history.push('/escolherPlanos');
        }
    };

    return (
        <div className="containerCadastro">
            <div className="containerInput">
                <h1>Cadastre-se</h1>
                <Form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                    className="formLogin"
                >
                    {objetosVazios && form['nome'] == '' ? (
                        <span className="messageErro">
                            O campo nome precisa ser preenchido
                        </span>
                    ) : (
                        ''
                    )}
                    <FormGroup floating>
                        <Input
                            className="inputLogin"
                            id="exampleNome"
                            name="nome"
                            placeholder="Nome Completo"
                            type="text"
                            onBlur={(e) => handleChange(e)}
                        />
                        <Label className="labelLogin" for="exampleEmail">
                            Nome Completo
                        </Label>
                    </FormGroup>
                    {objetosVazios && form['email'] == '' ? (
                        <span className="messageErro">
                            O campo email precisa ser preenchido
                        </span>
                    ) : (
                        ''
                    )}
                    <FormGroup floating>
                        <Input
                            className="inputLogin"
                            id="exampleEmail"
                            name="email"
                            placeholder="E-mail"
                            type="email"
                            onBlur={(e) => handleChange(e)}
                        />
                        <Label className="labelLogin" for="examplePassword">
                            E-mail
                        </Label>
                    </FormGroup>
                    {objetosVazios && form['telefone'] == '' ? (
                        <span className="messageErro">
                            O campo telefone precisa ser preenchido
                        </span>
                    ) : (
                        ''
                    )}
                    <FormGroup floating>
                        <Input
                            className="inputLogin"
                            id="exampleTelefone"
                            name="telefone"
                            placeholder="Telefone"
                            type="number"
                            onBlur={(e) => handleChange(e)}
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
                            type="password"
                            onBlur={(e) => handleChange(e)}
                        />
                        <Label className="labelLogin" for="examplePassword">
                            Senha
                        </Label>
                    </FormGroup>{' '}
                    <div class="login-icons">
                    <button type="button" class="icon-button">
                        <a target='_blank' href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjcwNjIyODM3LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D"><img src={IconFace} alt="facebook" /></a>
                    </button>
                    <button type="button" class="icon-button">
                        <a target='_blank' href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%26ogbl%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&ifkv=AeAAQh4JcFrXOGTGRz9CYJ1NhtWUuRv0Ty4h9wUxYfUrr12JJKSkd6I-wGXJvSUdoEO3dHHEUZCYTg&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><img src={IconGoogle} alt="google" /></a>
                    </button>
                    <button type="button" class="icon-button">
                        <a target='_blank' href="https://appleid.apple.com/sign-in"><img src={IconApple} alt="apple" /></a>
                    </button>
                    </div>
                    <Link to={'/login'} className="linkLog">
                        Ja tem acesso? entre
                    </Link>
                    <Button id="BtnCadastro">
                        <NavigateNextIcon style={{ fontSize: 50 }} />
                    </Button>
                </Form>
            </div>

            <div className="backgroundCadastro"></div>
        </div>
    );
}

export default Cadastro;

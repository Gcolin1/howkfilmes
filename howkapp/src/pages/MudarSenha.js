import './css/MudarSenha.css';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import ButtonSenha from '../components/ButtonSenha'


function MudarSenha() {
    const history = useHistory();

    const [form, SetForm] = useState({
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
        <div className="containerMudarSenha">

            <h1 id='titulo'>Altere sua senha</h1>
            <div className="containerInput2">
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
                    <FormGroup  floating>
                        <Input
                            className="inputLogin"
                            id="exampleSenha"
                            name="senha"
                            placeholder=""
                            type="password"
                            onBlur={(e) => handleChange(e)}
                        />
                        <Label className="labelLogin" for="examplePassword">
                            Nova senha
                        </Label>
                    </FormGroup>{' '}
                    <FormGroup floating>
                        <Input
                            className="inputLogin"
                            id="exampleSenha"
                            name="senha"
                            placeholder=""
                            type="password"
                            onBlur={(e) => handleChange(e)}
                        />
                        <Label className="labelLogin" for="examplePassword">
                            Confirmar nova senha
                        </Label>
                    </FormGroup>{' '}
                    <Link  to={'/login'}> <ButtonSenha id="Btnsenha">Confirmar </ButtonSenha></Link>
                  
                    
                </Form>
            </div>
        </div>
    );
}

export default MudarSenha;

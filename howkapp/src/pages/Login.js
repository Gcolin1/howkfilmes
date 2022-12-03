import './css/Login.css'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import IconGoogle from '../assets/google.png'
import IconApple from '../assets/apple.png'
import IconFace from '../assets/facebook.png'
import { useState } from 'react'

function Login() {
    const history = useHistory();

    const [form, SetForm] = useState({
        email: "",
        senha: ""
    })

    const [objetosVazios, setObjetosVazios] = useState(false)

    const handleChange = (e) =>{
        let newProp = form
        newProp[e.target.name] = e.target.value
        SetForm({ ...newProp})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let objetosVazios = Object.values(form).some(obj => obj == "");
        setObjetosVazios(objetosVazios)

        if(!objetosVazios){
            history.push("/home")
        }
    }

    return (
        <div className='containerLogin'>
            <div className='containerInput'>
                <h1>Entrar</h1>
                {objetosVazios && form.email == ""  ? <span className='messageErro'>O campo email precisa ser preenchido</span> : ""}
                <Form onSubmit={(e) => {
                    handleSubmit(e)
                }} className='formLogin'>
                    <FormGroup floating>
                        <Input
                            className="inputLogin"
                            id="exampleEmail"
                            name="email"
                            placeholder="E-mail"
                            type="email"
                            onBlur={(e) => handleChange(e)}
                            
                        />
                        <Label className="labelLogin" for="exampleEmail">
                            E-mail
                        </Label>
                    </FormGroup>

                    {objetosVazios && form["senha"] == "" ? <span className='messageErro'>O campo senha precisa ser preenchido</span> : ""}
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
                    </FormGroup>
                    {' '}
                
                <Link to={'/cadastro'} className="linkCad">Esqueceu a Senha?</Link><br></br>
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

                <Button type="submit" id='BtnLogin'>
                    Entrar
                </Button>
                </Form>
            </div>

            <div className='backgroundLogin'>
            </div>
        </div>
    )
}

export default Login
import React, { useState } from 'react';
import logo_2 from '../../assests/img/logo_2.png';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Form, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {url} from '../../assests/constants'
import './index.css';
import jwt_decode from 'jwt-decode';


const Login = () => {

    let history = useHistory('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        console.log(`${email} - ${senha}`)

        fetch( url + '/login',{
            method : 'POST',
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }

            alert('dados invalidos')
        })
        .then(data => {
            console.log(data)
        
            localStorage.setItem('token-edux', data.token);

            let usuario = jwt_decode(data.token)

            if(usuario.role === 'Administrador'){
                history.push('/dicas')
            }else{
                history.push('/')
            }
            
            console.log(usuario);
        })
        .catch(err => console.log(err))
    } 

    return(
        <div>
            <Menu />
            <Container className='form-height' style={{marginBottom : '2em', marginTop : '2em'}}>
                <Form className='form-signin' onSubmit={event => logar(event)} >
                    <div className="text-center">
                        <img src={logo_2} alt="Edux" style={{width : "64px"}}/>
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>
                    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Informe a senha" value={senha} onChange={event => setSenha(event.target.value)}  required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                        <br/><br/>
                        <a href="/cadastrar" style={{marginTop: '30px'}}>Não tenho conta!</a>
                        <a href="/recuperarsenha" style={{marginTop: '30px', marginLeft : '20px'}}>Esqueci a senha!</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )
}

export default Login;
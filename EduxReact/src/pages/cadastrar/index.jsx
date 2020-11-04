import React, {useState, useEffect} from 'react';
import logo_2 from '../../assests/img/logo_2.png';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {url} from '../../assests/constants'
import { Form, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './index.css';


const Cadastrar = () => {

    // const RenderBtnAdm = () => {
    //     const token = localStorage.getItem('token-edux')

    //     if(jwt_decode(token).role === 'Administrador'){
    //       return( 
    //         <Button variant="primary" type="submit" onClick={event => event(history.push('/adm/cadastrar'))}>
    //             Definir Adm!
    //         </Button>
    //       )
    //     }
    // }
    const history = useHistory();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [idPerfil, setidPerfil] = useState('');
    const [perfis, setPerfis] = useState([])

    useEffect(() => {
        listarPerfis()
    }, []);

    const listarPerfis = () => {
        fetch(url + '/perfil')
            .then(response => response.json())
            .then(data => {
                setPerfis(data.data);

                console.log(data);

                limparCampos()
            })
            .catch(err => console.error(err));
    }

    const limparCampos = () => {
        setNome('');
        setSenha('');
        setEmail('')
    }


    const cadastro = (event) => {
        event.preventDefault();

        fetch(url + '/usuario',{
            method : 'POST',
            body : JSON.stringify({
                nome  : nome,
                email : email,
                senha : senha,
                idPerfil : idPerfil

            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
    } 
    return(
        <div>
            <Menu />
            <Container className='form-height' style={{marginBottom : '2em', marginTop : '2em'}}>
                <Form className='form-signin' onSubmit={event => cadastro(event)} >
                    <div className="text-center">
                        <img src={logo_2} alt="Edux" style={{width : "64px"}}/>
                    </div>
                    <br/>
                    <small>Informe os dados Abaixo</small>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Informe o seu nome" value={nome} onChange={event => setNome(event.target.value)} required />
                        </Form.Group>
                    
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Informe o email" value={email} onChange={event => setEmail(event.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Informe a senha" value={senha} onChange={event => setSenha(event.target.value)} required />
                        </Form.Group>


                        <Form.Group controlId="formBasicPerfil">
                        <Form.Label>Tipo de usuário</Form.Label>
                        <Form.Control as="select" type="text" placeholder="Informe o tipo de usuário" value={idPerfil} onChange={event => setidPerfil(event.target.value)} >
                            {
                                perfis.map((item, index) => {
                                    return(
                                        <option value={item.idPerfil}>{item.permissao}</option>
                                    )
                                })
                            }
                        </Form.Control>
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                        {/* { RenderBtnAdm() } */}
                        <br/><br/>
                        <a href="/login" style={{marginTop: '30px'}}>Já tenho conta!</a>
                </Form>
            </Container>
            <Rodape />
        </div>
    )
}

export default Cadastrar;
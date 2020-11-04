import React, { useEffect, useState } from 'react'
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Container, Row, Col, Card, Button, Form,Table} from 'react-bootstrap';
import {url} from '../../../utils/constants';


const InstituicaoCadastrar = () => {

    const [idInstituicao, setIdInstituicao] = useState(0);
    const [texto, setTexto] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [instituicao, setInstituicao] = useState([]);


    useEffect(() => {
        listar()
    }, []);

        const listar = () => {
            fetch(url + 'instituicaocadastrar')
                .then(response => response.json())
                .then(data => {
                    setInstituicao(data);
                    limparCampos();
                })
                .catch(err => console.error(err));
        }

        const editar = (event) => {
            event.preventDefault();

            fetch(`${url}instituicaocadastrar/${event.target.value}`)
                .then(response => response.json())
                .then(dado => {
                    console.log(dado)
                    setidInstituicao(dado.titulo)
                    setUrlImagem(dado.urlImagem)
                })
        }

        const excluir = (event) => {
            event.preventDefault();

            console.log(event.target.value)

            fetch(url + 'instituicaocadastrar/' + event.target.value, {
                method: 'DELETE',
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('token-edux')
                }
            })
                .then(response => response.json())
                .then(dados => {
                    alert('Instituição removida!')
                    listar()
                })
        }

        const uploadFile = (event) => {
            event.preventDefault();

            let formdata = new FormData();

            formdata.append('arquivo', event.target.files[0]);

            fetch(`${url}upload`, {
                method: 'POST',
                body: formdata
            })
                .then(response => response.json())
                .then(data => {
                    setUrlImagem(data.url);
                })
                .catch(err => console.error(err))
        }

        const salvar = (event) => {
            event.preventDefault();

            let method = (idInstituicao === 0 ? 'POST' : 'PUT')
            let urlRequest = (idInstituicao === 0 ? `${url}instituicaocadastrar` : `${url}instituicaocadastrar/${idInstituicao}`)

            fetch(urlRequest, {
                method: method,
                body: JSON.stringify(idInstituicao),
                headers: {
                    'content-type': 'application/json',
                    'authorization': 'Bearer ' + localStorage.getItem('token-edux')
                }
            })
                .then(response => response.json())
                .then(dados => {
                    alert('Instituição Cadastrada!');
                    listar();
            })
        }

        const limparCampos = () => {
            setIdInstituicao(0);
            setUrlImagem('');
        }

    return (
        <div>
            <Menu />
            <Container>
                <h1>Instituição</h1>
                   
                
                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                            <Form.Group>
                                    <Form.File id="fileCategoria" label="Imagem da Instituição" onChange={event => uploadFile(event)} />
                                    {urlImagem && <img src={urlImagem} style={{height: '130px'}} />}
                                </Form.Group>
                            </Form.Group>
                            <Button type="submit">Cadastrar</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Imagem</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <br/>
                    <tbody>
                        {
                             isntituicoes.map((item, index) => {
                                return (
                                     <tr key={index}>
                                        
                                        <td><img src={item.urlImagem} style={{ width: '130px' }} /></td>
                                         
                                         <td>
                                            <Button variant="warning" value={item.idInstituicao} onClick={event => editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.idInstituicao} onClick={event => excluir(event)} style={{ marginLeft: '40px' }}>Excluir</Button>
                                         </td>
                                    </tr>
                                )
                            })
                        }
                  </tbody>
                </Table>
            </Container>
            <Rodape />
        </div>
    )

}

export default InstituicaoCadastrar;
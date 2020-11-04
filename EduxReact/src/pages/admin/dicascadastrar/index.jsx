import React, { useEffect, useState } from 'react'
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import {Container, Row, Col, Card, Button, Form,Table} from 'react-bootstrap';
import {url} from '../../../utils/constants';


const DicasCadastrar = () => {

    const [idDica, setIdDica] = useState(0);
    const [texto, setTexto] = useState('');
    const [urlImagem, setUrlImagem] = useState('');
    const [dicas, setDicas] = useState([]);

    useEffect(() => {
        listar()
    }, []);

        const listar = () => {
            fetch(url + 'dicascadastrar')
                .then(response => response.json())
                .then(data => {
                    setDicas(data);
                    limparCampos();
                })
                .catch(err => console.error(err));
        }

        const editar = (event) => {
            event.preventDefault();

            fetch(`${url}dicascadastrar/${event.target.value}`)
                .then(response => response.json())
                .then(dado => {
                    console.log(dado)
                    setIdDica(dado.idCategoria)
                    setTexto(dado.titulo)
                    setUrlImagem(dado.urlImagem)
                })
        }

        const excluir = (event) => {
            event.preventDefault();

            console.log(event.target.value)

            fetch(url + 'dicascategoria/' + event.target.value, {
                method: 'DELETE',
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('token-edux')
                }
            })
                .then(response => response.json())
                .then(dados => {
                    alert('Dica removida!')
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

            const dicascategoria = {
                titulo: texto,
                urlImagem: urlImagem
            }

            let method = (idDica === 0 ? 'POST' : 'PUT')
            let urlRequest = (idDica === 0 ? `${url}dicascadastrar` : `${url}dicascadastrar/${idDica}`)

            fetch(urlRequest, {
                method: method,
                body: JSON.stringify(idDica),
                headers: {
                    'content-type': 'application/json',
                    'authorization': 'Bearer ' + localStorage.getItem('token-edux')
                }
            })
                .then(response => response.json())
                .then(dados => {
                    alert('Dica Salva!');
                    listar();
            })
        }

        const limparCampos = () => {
            setIdDica(0);
            setTexto('');
            setUrlImagem('');
        }

    return (
        <div>
            <Menu />
            <Container>
                <h1>Dicas</h1>
                   
                
                <Card>
                    <Card.Body>
                        <Form onSubmit={event => salvar(event)}>
                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Título</Form.Label>
                                {<Form.Control type="text" value={texto} onChange={event => setTexto(event.target.value)} placeholder="Tecnologia, Inovação, Startups.." /> }
                                <Form.Group>
                                    <Form.File id="fileCategoria" label="Imagem da Dica" onChange={event => uploadFile(event)} />
                                    {urlImagem && <img src={urlImagem} style={{height: '120px'}} />}
                                </Form.Group>
                            </Form.Group>
                            <Button type="submit">Salvar</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Imagem</th>
                                <th>Texto</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <br/>
                    <tbody>
                        {
                             dicas.map((item, index) => {
                                return (
                                     <tr key={index}>
                                        
                                        <td><img src={item.urlImagem} style={{ width: '120px' }} /></td>
                                        
                                         <td>{item.texto}</td>
                                         
                                         <td>
                                            <Button variant="warning" value={item.idCategoria} onClick={event => editar(event)} >Editar</Button>
                                            <Button variant="danger" value={item.idCategoria} onClick={event => excluir(event)} style={{ marginLeft: '40px' }}>Excluir</Button>
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

export default DicasCadastrar;
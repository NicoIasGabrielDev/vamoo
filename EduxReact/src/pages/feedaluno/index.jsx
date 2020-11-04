import React from 'react';
import logo_2 from '../../assests/img/logo_2.png';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Form, Container, Button, Card, Row, Col } from 'react-bootstrap';
import './index.css';

//pure function FeedAluno
const FeedAluno = ({titulo, foto, texto}) => {
    return(

        <div>
            <Menu />
            <br/>
            <Container fluid className='form-height'>
                <Form className='form-signin' >
                    <div className="text-center">
                        <img src={logo_2} alt="Edux" style={{width : "150px"}}/>

                    </div>
                    <br/>

                    <div className="text-center">
                        <h3>"Um objetivo sem um plano, é somente um desejo!"</h3>
                    </div>
                    </Form>
            </Container>
            <br/>
            
            <Container>
            <Row className="text-center">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.lg.com.br/blog/wp-content/uploads/2019/11/tecnologia-e-ser-humano.png" />
                        <Card.Body>
                            <Card.Title>ATV. do livro pag.148</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Concluir objetivo! <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.economiasc.com/wp-content/uploads/2020/04/esta-correta.jpg" />
                        <Card.Body>
                            <Card.Title>Recuperação de mat dia 11/11!</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Concluir objetivo! <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://d3q93wnyp4lkf8.cloudfront.net/revista/post_images/19580/2ae2c2aaa3c9b3912769332306c5a292f4817b1a.jpg?1559248176" />
                        <Card.Body>
                            <Card.Title>Prova de mat dia 26/10!</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Concluir objetivo! <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Container>
    <br/><br/>

            
            <Rodape />
        </div>
    )
}

export default FeedAluno;
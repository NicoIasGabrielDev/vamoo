import React from 'react';
import logo_2 from '../../assests/img/logo_2.png';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Form, Container, Button, Card, Row, Col } from 'react-bootstrap';
import './index.css';

//pure function Dicas
const Dicas = ({titulo, foto, texto}) => {
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
                        <h3>Consulte sua dica!</h3>
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
                            <Card.Title>ASDASDADASDASD</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Curtir dica!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.economiasc.com/wp-content/uploads/2020/04/esta-correta.jpg" />
                        <Card.Body>
                            <Card.Title>Inovação</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Curtir dica!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://d3q93wnyp4lkf8.cloudfront.net/revista/post_images/19580/2ae2c2aaa3c9b3912769332306c5a292f4817b1a.jpg?1559248176" />
                        <Card.Body>
                            <Card.Title>Educação</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Curtir dica!</Button>
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

export default Dicas;
import React from 'react';
import logo_2 from '../../assests/img/logo_2.png'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';

const Menu = () =>{
    const history = useHistory();

    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-edux')

        history.push('/');
    }

    const RenderMenu = () => {
        const token = localStorage.getItem('token-edux')

        if(token === null){
          return(
            <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
            </Nav>
          )
        }else if(jwt_decode(token).role === 'Administrador'){
          return( 
            <Nav>
                <Nav.Link href="/dicas">Dicas</Nav.Link>
                <Nav.Link href="/">Instituição</Nav.Link>
                <Nav.Link href="/curso">Curso</Nav.Link>
                <NavDropdown title={jwt_decode(token).nameid} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
                </NavDropdown>

            </Nav>
          )
        } else{
          return(
          <Nav>
            <Nav.Link href="/">Curso</Nav.Link>
            <NavDropdown title={jwt_decode(token).nameid} id="basic-nav-dropdown">
              <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          )
        }
    }

    return(

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img src={logo_2} alt="Edux" style={{width : "64px"}}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Instituição</Nav.Link>
          <Nav.Link href="/dicas">Dicas</Nav.Link>
          <Nav.Link href="/curso">Curso</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      { RenderMenu() }
    </Navbar>

    )

}

export default Menu;
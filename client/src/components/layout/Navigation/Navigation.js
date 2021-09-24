import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

const authService = new AuthService()


export default function Navigation(props) {
  const logout = () => {
    authService.logout()
      .then(res => props.storeUser(null))
      .catch(err => console.log(err))
  }
  return (
    <Navbar bg="light" expand="md" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Coasters App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/montañas-rusas">Montañas rusas</Link>

            {props.loggedUser ?
              <>
                <Link className="nav-link" to="/perfil">Mi perfil</Link>
                <span className="nav-link" onClick={logout}>Logout</span>
              </>
              :
              <>
                <Link className="nav-link" to="/registro">Registro</Link>
                <Link className="nav-link" to="/iniciar-sesion">Iniciar sesión</Link>
              </>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

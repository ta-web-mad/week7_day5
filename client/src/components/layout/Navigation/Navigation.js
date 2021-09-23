import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg="light" expand="md" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Coasters App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/montañas-rusas">Montañas rusas</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

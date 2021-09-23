import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <h1>Bienvenid@ a Coasters App</h1>
      <h3>MERN Application</h3>

      <Link to="/montañas-rusas">
        <Button>Ver montañas rusas</Button>
      </Link>
    </Container>
  )
}

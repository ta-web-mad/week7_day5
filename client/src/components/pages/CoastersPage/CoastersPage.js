import React from 'react'
import { Container } from 'react-bootstrap'
import CoastersList from './CoastersList'

export default function CoastersPage() {
  return (
    <Container>
      <h1>Coasters Page</h1>

      <CoastersList/>
    </Container>
  )
}

import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CoasterItem({ _id, title, imageUrl }) {
  return (
    <Col md={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Link to={`/montañas-rusas/${_id}`}>
           <Button variant="primary">Ver detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

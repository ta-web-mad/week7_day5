import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import CoastersService from '../../../services/coasters.service'

const coasterService = new CoastersService();
const CoasterForm = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [inversions, setInversions] = useState(0)
  const [length, setLength] = useState(0)

  const clearState = () => {
    setTitle("")
    setDescription("")
    setImageUrl("")
    setInversions(0)
    setLength(0)
  }

  const handleChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case "title":
        setTitle(value)
        break;
      case "description":
        setDescription(value)
        break;
      case "imageUrl":
        setImageUrl(value)
        break;
      case "inversions":
        setInversions(value)
        break;
      case "length":
        setLength(value)
        break;
      default:
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    coasterService.createCoaster({title, description, imageUrl, inversions, length})
      .then(() => {
        props.closeModal();
        props.refreshCoasters();
        clearState()
      })
      .catch(err => console.error(err))
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Título: </Form.Label>
        <Form.Control onChange={(e) => handleChange(e)} name="title" value={title} type="text" placeholder="Introduce título" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Descripción: </Form.Label>
        <Form.Control onChange={(e) => handleChange(e)} name="description" value={description} type="text" placeholder="Introduce descripción" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="inversions">
        <Form.Label>Inversiones: </Form.Label>
        <Form.Control onChange={(e) => handleChange(e)} name="inversions" value={inversions} type="number" placeholder="Introduce inversiones" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="length">
        <Form.Label>Longitud: </Form.Label>
        <Form.Control onChange={(e) => handleChange(e)} name="length" value={length} type="number" placeholder="Introduce longitud" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="imageUrl">
        <Form.Label>Imagen: </Form.Label>
        <Form.Control onChange={(e) => handleChange(e)} name="imageUrl" value={imageUrl} type="text" placeholder="Introduce imagen" />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default CoasterForm

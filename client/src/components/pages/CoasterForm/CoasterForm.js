import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import CoastersService from '../../../services/coasters.service'

export default class CoasterForm extends Component {
  state = {
    title: "",
    description: "",
    imageUrl: "",
    inversions: 0,
    length: 0
  }

  coasterService = new CoastersService();

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.coasterService.createCoaster(this.state)
      .then(() => {
        this.props.closeModal();
        this.props.refreshCoasters();
        this.setState({
          title: "",
          description: "",
          imageUrl: "",
          inversions: 0,
          length: 0
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Título: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="title" value={this.state.title} type="text" placeholder="Introduce título" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descripción: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="description" value={this.state.description} type="text" placeholder="Introduce descripción" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="inversions">
          <Form.Label>Inversiones: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="inversions" value={this.state.inversions} type="number" placeholder="Introduce inversiones" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="length">
          <Form.Label>Longitud: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="length" value={this.state.length} type="number" placeholder="Introduce longitud" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imageUrl">
          <Form.Label>Imagen: </Form.Label>
          <Form.Control onChange={(e) => this.handleChange(e)} name="imageUrl" value={this.state.imageUrl} type="text" placeholder="Introduce imagen" />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}

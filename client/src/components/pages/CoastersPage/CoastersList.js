import React, { Component } from 'react'
import { Button, FormControl, InputGroup, Modal, Row } from 'react-bootstrap'
import CoastersService from '../../../services/coasters.service';
import CoasterForm from '../CoasterForm/CoasterFormHooks';
import CoasterItem from './CoasterItem';

export default class CoastersList extends Component {
  constructor() {
    super();

    this.state = {
      coasters: null,
      show: false,
      searchValue: ""
    }
    this.coasterService = new CoastersService();
  }

  componentDidMount() {
    this.refreshCoasters();
  }

  refreshCoasters = () => {
    this.coasterService.getCoasters()
      .then(res => {
        this.setState({
          ...this.state,
          coasters: res.data
        })
      })
      .catch(err => console.error(err))
  }

  displayCoasters = () => {
    const filteredCoasters = this.state.coasters.filter(coaster => coaster.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    return (
      filteredCoasters.length > 0 ?
        filteredCoasters.map(coaster => {
          return (
            <CoasterItem key={coaster._id} {...coaster} />
          )
        }) :
        <p>Sin resultados</p>
    )
  }

  openModal = () => {
    this.setState({
      ...this.state,
      show: true
    })
  }

  closeModal = () => {
    this.setState({ ...this.state, show: false });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    })
  }

  render() {
    return (
      this.state.coasters ?
        <div>
          <Button block className="mt-2" onClick={() => this.openModal()}>Añadir montaña rusa</Button>

          <InputGroup className="mb-3 mt-4">
            <FormControl
              onChange={this.handleChange}
              name="searchValue"
              value={this.state.searchValue}
              placeholder="Buscar por título..."
              aria-label="buscar"
            />
          </InputGroup>

          <Modal show={this.state.show} onHide={() => this.closeModal()}>
            <Modal.Header closeButton>
              <Modal.Title>Añadir montaña rusa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CoasterForm closeModal={() => this.closeModal()} refreshCoasters={this.refreshCoasters} />
            </Modal.Body>
          </Modal>
          <Row className="mt-4">
            {
              this.displayCoasters()
            }
          </Row>
        </div>
        :
        <h3>Loading...</h3>
    )
  }
}

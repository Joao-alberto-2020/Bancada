import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { render } from 'react-dom';
import "./apidragon.css"
class Apidragon extends Component {
    constructor(){
        super();
        this.state = {listDragons: [], showModal: false, showAlert: false};
         this.onDelete=this.onDelete.bind(this)
         this.onEdit=this.onEdit.bind(this)
         this.onCreate=this.onCreate.bind(this)
    }

    componentDidMount(){
        this.getList();
    }
getList(){
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon') 
        .then( response => response.json() ) 
        .then( data => {this.setState({listDragons: data}); } );
}

onCreate(event){
    event.preventDefault();
    let form = event.target

  const dragon = {name: form.elements.name.value, type: form.elements.type.value,}
  const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dragon),



  }
  fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', request) 
  .then(response => response.json())
  .then( response => this.getlist())
} 


onEdit(id){
console.log('editar' +id)
}

onDelete(id){
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/' +id, {method: 'DELETE'},) 
    .then(response => response.json()).then(response2 => console.log(response2))
    .then( response => this.getlist())
}
handleModalClose(){
    this.setState({showModal: false})
}

handleModalOpen(){
    this.setState({showModal: true})
}



    render(){
        const {listDragons, showModal, showAlert} = this.state;
        return <> 
        <div className="row">
        <div className="col-3">

        </div>
        <button className="botao3 col-6" onClick={() => this.handleModalOpen()}>Criar</button>
        </div>
            <div className="container flutuar cards">
                <div className="row">
                    <div className="col">

                    <table className="table bg-card cards">
                            <thead className="">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Tipo</th>
                                    <th>Data</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody className="">
                                {listDragons.map(
                                    dragon =>
                                    <tr>
                                        <td>{dragon.id}</td>
                                        <td>{dragon.name}</td>
                                        <td>{dragon.type}</td>
                                        <td>{dragon.createdAt}</td>
                                        <td>
                                            <button className="botao1" onClick={() => this.onEdit(dragon.id)}>Editar</button>
                                            <button className="botao2" onClick={() => this.onDelete(dragon.id)}>Deletar</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={()=> this.handleModalClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Criar Dragão</Modal.Title>
                    </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={this.onCreate}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name"></Form.Control>
                        </Form.Group>
                          <Form.Group controlId="formType">
                               <Form.Label>Type</Form.Label>
                               <Form.Control type="text" name="type"></Form.Control>
                         </Form.Group>
                         <Button variant="primary" type="submit">
                             Submit
                         </Button>
                    </Form>     
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={() => this.handleModalClose()}>close</Button>
                </Modal.Footer>
            </Modal>
        </>;
    }
}

export default Apidragon;
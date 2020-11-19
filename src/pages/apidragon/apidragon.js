import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './apidragon.css';


class Apidragon extends Component {
    constructor(){
        super();
        this.state = {
            listDragons: [],
            showModalDeletar: false,
            dragon: [],
            id_dragon: 0
        };
    }

    componentDidMount(){
        this.getList();
    }

    getList(){
        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon') 
        .then( response => response.json() ) 
        .then( data => {this.setState({listDragons: data}); } );
    }

    onDelete(){
        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/'+this.state.id_dragon, {method: 'DELETE'})
        .then(response => response.json())
        .then( () => {this.getList(); this.fechaModalDeletar()})
    }

    fechaModalDeletar(){
        this.setState({showModalDeletar: false});
    }
    abreModalDeletar(id_dragon){
        this.setState({id_dragon: id_dragon});
        this.setState({showModalDeletar: true});
    }

    render(){
        const {listDragons, showModalDeletar} = this.state;
        return <>
        
    <div className="container botao3">
    <Link to="/apidragon/add" className="colortext3">Criar</Link>
        </div>
         

            {listDragons.map(
                    dragon =>       
                   <div className="container mb-2 mt-1 cards bordermobile">
                       <br></br>

                         <div className="row">
                            <div className="col">
                                 Id: {dragon.id}
                             </div>
                         </div>

                         <div className="row">
                             <div className="col">
                                  Nome: {dragon.name}
                            </div>
                         </div>

                          <div className="row">
                             <div className="col">
                                 Tipo: {dragon.type}
                             </div>
                          </div>

                          <div className="row">
                              <div className="col">
                                 Data: {dragon.createdAt}
                             </div>
                          </div>
                    

                           <div className="row">
                               <div className="col">
                                 <Link to={`/apidragon/edit/${dragon.id}`} className="colortext2 botao1">Editar</Link>      
                                 </div>     
                           </div>
                             <div className="row">
                                 <div className="col">
                                  <button onClick={() => this.abreModalDeletar(dragon.id)} className="botao2">Deletar</button>
                                  </div>
                             </div>
                        <br></br>
                     
                    </div>

            )}

            <Modal className="mobal" show={showModalDeletar} onHide={()=> this.fechaModalDeletar()}>
                <Modal.Header closeButton>
                    <Modal.Title>Deletar Dragão</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Tem certeza que quer deletar o dragão?</p>
                    <Button variant="danger" className="mr-4" onClick={()=> this.onDelete()}>
                        Deletar
                    </Button>
                    <Button variant="secondary" onClick={()=> this.fechaModalDeletar()}>
                        Fechar
                    </Button>
                </Modal.Body>
            </Modal>
        </>;
    }
}

export default Apidragon;
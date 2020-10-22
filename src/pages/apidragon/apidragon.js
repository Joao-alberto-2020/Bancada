import React, { Component } from 'react';
import { render } from 'react-dom';
import "./apidragon.css"
class Apidragon extends Component {
    constructor(){
        super();
        this.state = {listDragons: [], dragon: {}, id_dragon: 0};
         this.onDelete=this.onDelete.bind(this)
         this.onEdit=this.onEdit.bind(this)
         this.onCreate=this.onCreate.bind(this)
    }

    componentDidMount(){
        fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon') 
        .then( response => response.json() ) 
        .then( data => {this.setState({listDragons: data}); } );
    }
getlist(){
    fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon') 
        .then( response => response.json() ) 
        .then( data => {this.setState({listDragons: data}); } );
}

onCreate(){
  const dragon = {name: 'rato', type: 'anao'}
  const request = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dragon),



  }
  fetch('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon', request) 
  .then(response => response.json()).then(response2 => console.log(response2))
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




    render(){
        const {listDragons} = this.state;
        return <>
        <button className="botao3" onClick={() => this.onCreate()}>Criar</button>
            <div className="container cards">
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
        </>;
    }
}

export default Apidragon;
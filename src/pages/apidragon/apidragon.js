import React, { Component } from 'react';
import { render } from 'react-dom';

class Apidragon extends Component {
    constructor(){
        super();
        this.state = {listDragons: [], dragon:{}, id_dragon: 0}
        
    } 

        componentDidMount(){
            fetch("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon") //esse comando pega as infos do github.
            .then ( response => response.json() ) // esse comando converte as infos para o formato json.
            .then ( data => {this.setState({listDragons: data}) } ); // comando coloca o valor 'data2' dentro de um atributo data.
        }
        
        render(){
            const{listDragons} = this.state;
            return (
                <div className="container">
                <div className="row">
                    <div className="col">
                        
                        {listDragons.map(
                            dragon => 
                             <div>
                                <p>{dragon.id}</p>
                                
                                <p>{dragon.createdAt}</p>
                                
                                <p>{dragon.name}</p>
                                
                                <p>{dragon.type}</p>
                                
                                <p>{dragon.histories}</p>
                             </div>
      
                        )}
                        

             </div>
           </div>
         </div>
            )

            
        }
    }


















export default Apidragon;
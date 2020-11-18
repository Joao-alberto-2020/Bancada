import React, { Component } from 'react';
import "./github.css"
class Github extends Component{
 constructor(){
    super();
    this.state = {
        user: [],
        repo: [],
    };
  }

  componentDidMount(){
      fetch("https://api.github.com/users/Joao-alberto-2020") 
      .then ( response => response.json() ) 
      .then ( data => {this.setState({user: data}) } );
      
      fetch("https://api.github.com/users/Joao-alberto-2020/repos") 
      .then ( response => response.json() ) 
      .then ( data => {this.setState({repo: data}) } ); 
    }



render(){
    const {user, repo} = this.state;
    return(
        <div className="container texto">
            <div className="row">
              <div className="col bg-card1">
                <p className="titulo">Meu github infos</p>
                    <div>
                        <img className="circle-photo" src={user.avatar_url}></img>
                        <div>
                         Login: @{user.login}<br></br>
                         Biografia: {user.bio}<br></br>
                         Localização: {user.location}<br></br>
                         Repositórios públicos: {user.public_repos}<br></br>   
                        </div>
                    </div>
                 </div>

                 <div className="col">     
                   
                     {repo.map(
                        repositorio => 
                         <div className="card container bg-card1">
                             Nome do repositorio: {repositorio.name}
                                 Descrição: {repositorio.description} <br></br>    
                                     Link do repositorio: <a href={repositorio.html_url}>clique aqui</a>   
                 </div>
                
         )}
                  </div>
            </div>
      </div>

       

    )
};

}


export default Github;
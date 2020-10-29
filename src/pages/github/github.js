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
      fetch("https://api.github.com/users/Joao-alberto-2020") //esse comando pega as infos do github.
      .then ( response => response.json() ) // esse comando converte as infos para o formato json.
      .then ( data => {this.setState({user: data}) } ); // comando coloca o valor 'data2' dentro de um atributo data.
      
      fetch("https://api.github.com/users/Joao-alberto-2020/repos") //esse comando pega as infos do github.
      .then ( response => response.json() ) // esse comando converte as infos para o formato json.
      .then ( data => {this.setState({repo: data}) } ); // comando coloca o valor 'data2' dentro de um atributo data.
    }



render(){
    const {user, repo} = this.state;
    return(
        <div className="texto bg-card1">
            <div className="row">


            <div className="col mt-5 ">
               
                <p className="titulo bg-card1">Meu github infos</p>
                <div>
                    <img className="circle-photo tossing" src={user.avatar_url}></img>
                    <div>
                    Login: @{user.login}<br></br>

                    </div>
                  
                </div>
                <br></br>
                <br></br>
            </div> 

            <div className="col">     
           
            <img src={user. vatar_url}></img>
            {repo.map(
                repositorio => 
                <div className="card container texto bg-card1">
             <div>Nome do repositorio: {repositorio.name}</div>
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
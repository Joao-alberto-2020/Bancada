import React, { Component } from 'react';
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
        <div className="texto ">
            <div className="">


            <div className="">
               
                <p>Meu github infos</p>
                <p>
                    Login: @{user.login}<br></br>
                </p>
                <br></br>
                <br></br>
            </div>

            

            </div>
            
            <div className="">     
            <div>{user.login}</div>
            <img src={user.avatar_url}></img>
            {repo.map(
                repositorio => 
                <p>Nome do repositorio: {repositorio.name}
                 Descrição: {repositorio.description} <br></br>    
                 Link do repositorio: <a href={repositorio.html_url}>clique aqui</a>   
                </p>
                
            )}
                   </div>
          
             </div>

       

    )
};

}


export default Github;
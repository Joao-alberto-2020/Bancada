
import React, { Component } from 'react';
import "./home.css";
import Git from"../../icon/git.png"
import Dragon from"../../icon/dragon.png"

class Home extends Component{
    render(){
        return<>
        <div className="blur3 container">
            <div className="">Bem vindo(a)!</div>

            <div className="">neste projeto, utilizei as api's do GitHub e ApiDragon</div>

            <div className="row">
                <div className=" mt-2 mb-2 col-md-6 pic"> <img src={Git}></img> </div>
                <div className=" mt-2 mb-2 col-md-6 pic"> <img src={Dragon}></img> </div>
                </div> 
             </div>
             
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </> 
    }
}



export default Home;

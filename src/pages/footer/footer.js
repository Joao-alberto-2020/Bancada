import React, {Component} from "react";
import "./footer.css";
import facebook from"../../icon/face.png"
import insta from"../../icon/insta.png"
import discord from"../../icon/discord.png"
import youtube from"../../icon/you.png"


class Footer extends Component {
    render(){
        return(
            <footer>
                <br></br>
                <div className="container">
                    <div className="row">
    
                        <div className="col-4">
                        <p>redes sociais</p>
                        <div className="row-5 img">
                          <a href="https://www.facebook.com"><img src={facebook}></img></a>
                          <a href="https://youtube.com"> <img src={youtube}></img></a>
                          <a href="https://www.discord.com"> <img src={discord}></img></a>
                          <a href="https://www.instagram.com"> <img src={insta}></img></a>
                        </div>
                        </div>
                        <div className="col-4 contato ">
                        <p> contato: <a href="tel:05551997670000">(51) 98354467</a> </p>
                        <p>email: <a href="mailto:example@gmail.com">example@gmail.com</a></p>
                        </div>   
                        
                               <div className="col-4">
                               <p className="endereço">
                            Endereço:<br></br>
                            avenida brasil <br></br>
                            </p>              
                               </div>
                    </div>
                </div>
                <p className="copyright py-2 ">copyright@2020 - MXPLAYBRz</p>
            </footer>
        )
    }
}

export default Footer;
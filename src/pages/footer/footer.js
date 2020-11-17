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
                <span className="container">
                    <div className="row limit pt-3 pb-2">
                        <div className="col-6">
                            <p>redes sociais</p>
                             <div className="container">
                                         <div className="row-6 img">
                                             <div className="col-12">
                                         <a href="https://www.facebook.com"><img src={facebook}></img></a>
                                         <a href="https://youtube.com"> <img src={youtube}></img></a>
                                            </div>
                                         </div>

                                         <div className="row-6 img">
                                             <div className="col-12">
                                         <a href="https://www.discord.com"> <img src={discord}></img></a>
                                         <a href="https://www.instagram.com"> <img src={insta}></img></a>
                                            </div>
                                    </div>
                              </div>
                        </div>
                    
                        <div className="col-6">
                                 <p>Endereço:<br></br>
                                     Rua: Campos flores 404 <br></br>
                                     Porto Alegre - RS
                                  </p>
                                  <p className="contato show"> contato: <a href="tel:05551997670000">(51) 98354467</a> </p>
                                  <p className="contato show"> email: <a href="mailto:example@gmail.com">example@gmail.com</a></p>
                            </div>
                         </div>

                </span>
            <div className="row contato">
                <div className="col-12">
                        <p className="none"> contato: <a href="tel:05551997670000">(51) 98354467</a> </p>
                </div>   
            </div>

            <div className="row contato">
                <div className="col-12">
                        <p className="none"> email: <a href="mailto:example@gmail.com">example@gmail.com</a></p>
                 </div>
            </div>

                <p className="copyright py-2">copyright@2020 - MXPLAYBRz
                </p>

         </footer>
        )
    }
}

export default Footer;
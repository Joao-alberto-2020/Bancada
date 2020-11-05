import React, {Component} from "react";
import "../header/header.css";
import {Link, Route} from 'react-router-dom';
import routesConfig from '../../routesConfig';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Apidragon from "../apidragon/apidragon";
import Github from "../github/github";

class Header extends Component {
    render(){
        return(

            <header>
               <div>
                   <div className="row">
                   <Link className="blur col-4" to="/apidragon"><div className="blur"><span className="colortext mt">APIDRAGONS</span></div></Link>
                   <Link className="blur col-4" to="/"><div className="blur3"><span classname="colortext mt">HOME</span></div></Link>
                   <Link className="blur col-4" to="/git"><div className="blur2"><span className="colortext mt">GITHUB</span></div></Link>
                   </div>
               </div>
               <br></br>
               <br></br>
               <br></br>
             
               {routesConfig.map(
                (value, key) => {
                  return <Route key={key} path={value.path} component={value.component} exact={value.exact}
                  ></Route>
                }
              )}
                   
            </header>
            
        )
    }
}

export default Header;
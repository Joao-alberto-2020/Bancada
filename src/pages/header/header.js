import React, {Component} from "react";
import "../header/header.css";
import { Link, Route, withRouter } from 'react-router-dom';
import routesConfig from '../../routesConfig';


class Header extends Component {
    render(){
        return(

            <header>
               <div className="cont">
                   <div className="row blur">
                   <Link className=" col-4 colortext" to="/apidragon">DRAGON</Link>
                   <Link className=" col-4 colortext" to="/">HOME</Link>
                   <Link className=" col-4 colortext" to="/git">GITHUB</Link>
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
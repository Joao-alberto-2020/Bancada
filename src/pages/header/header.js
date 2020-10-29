import React, {Component} from "react";
import "../header/header.css";
import {Link, Route} from 'react-router-dom';
import routesConfig from '../../routesConfig';


class Header extends Component {
    render(){
        return(

            <header>
               <div>
                   <div className="row">
                   <Link className="blur" to="/apidragon"><div className="blur"><span className="colortext mt-4">APIDRAGONS</span></div></Link>
                   <Link className="blur" to="/git"><div className="blur2"><span className="colortext mt-4">GITHUB</span></div></Link>
                   
                    
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
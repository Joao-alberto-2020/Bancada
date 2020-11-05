import React from 'react';
import logo from './logo.svg';
import './App.css';
import Github from './pages/github/github';
import Footer from './pages/footer/footer';
import Apidragon from './pages/apidragon/apidragon';
import Header from "./pages/header/header";
import {Link, Route} from 'react-router-dom';
import routesConfig from './routesConfig';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
function App() {
  return (
    <div className="App-header texto ">
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;

// boa noite meu nome é joão alberto tenho 21 anos e fiz esse projeto utilizando o modelo 
// nesse projeto utilizei o framework do bootstrap
// utilizei duas api's
// nesta parte aparece os dados da api Github
// criei uma tabela para mostrar os dados dos dragons 
// estou usando a biblioteca react-router-dom, react-bootstrap
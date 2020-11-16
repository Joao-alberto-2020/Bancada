import React from 'react';
import logo from './logo.svg';
import './App.css';
import Github from './pages/github/github';
import Footer from './pages/footer/footer';
import Apidragon from './pages/apidragon/apidragon';
import Header from "./pages/header/header";
import {Link, Router, withRouter} from 'react-router-dom';
import routesConfig from './routesConfig';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function App() {
  return (
     <span className="App-header2">
      <Header></Header>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
      </span>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Github from './pages/github/github';
import Footer from './pages/footer/footer';
import Apidragon from './pages/apidragon/apidragon';
import Header from "./pages/header/header";
import {Link, Route} from 'react-router-dom';
import routesConfig from './routesConfig';

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

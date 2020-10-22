import React from 'react';
import logo from './logo.svg';
import './App.css';
import Github from './pages/github/github'
import Footer from './pages/footer/footer'
import Apidragon from './pages/apidragon/apidragon'

function App() {
  return (
    <div className="App-header texto ">
      {/* <Github></Github> */}
      <br></br>
      <br></br>
      <Apidragon></Apidragon>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;

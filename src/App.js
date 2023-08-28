import React from 'react';
import './App.css';
import  Header from "./components/header";
import  About from "./components/about";
import  Skills from "./components/skills";
import  Portfolio from "./components/portfolio";
import  Footer from "./components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Skills />
      <Portfolio/>
      <Footer/>
      <FontAwesomeIcon/>
      <faEnvelope/>
      

      
    </div>
  );
}


export default App;
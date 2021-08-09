import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Band from './Components/Band/Band';
import Tour from './Components/Tour/Tour';
import Contact from './Components/Contact/Contact';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Band/>
      <Tour/>
      <Contact/>
      <Map/>
      <Footer/>
    </>
  );
}

export default App;

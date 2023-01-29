import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Cards from './components/pages/Cards';
import Popup from './components/Popup';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import About from './components/pages/About';

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='Gallery' element={<Gallery/>} />
            <Route path='Contact' element={<Contact/>} />
            <Route path='About' element={<About/>} />
            <Route path='Cards' element={<Cards/>} />
          </Routes>
        </Router>
      </>
      <Popup>
        <h3>Message has been sent!</h3>
      </Popup>
    </div>
  );
}

export default App;

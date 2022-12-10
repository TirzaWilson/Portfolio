import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Popup from './components/Popup';
import setButtonPopup from './components/Contact'

function App() {
  return (
    <div className='App'>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
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

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }  
  };

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <a href='' className="navbar-logo" onClick={closeMobileMenu}>
                <i className='logo1'></i>
            </a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <a href='' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='#cards__link' className='nav-links' onClick={closeMobileMenu}>
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a href='#skills__wrapper' className='nav-links' onClick={closeMobileMenu}>
                  Skills
                </a>
              </li>
              <li className='nav-item'>
                <a href='#about__link' className='nav-links' onClick={closeMobileMenu}>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a href='#contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact
                </a>
              </li>
            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
    </nav>
    </>
  )
}

export default Navbar
 
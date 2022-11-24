import React, { useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import Aos from "aos";
import "aos/dist/aos.css";


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-3.mp4" autoPlay loop muted/>
        <h1 data-aos="fade">TAZMOND MERCHANT</h1>
        <h2 data-aos="fade">Front end developer</h2>
        <div data-aos="fade" className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Contact Me
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;

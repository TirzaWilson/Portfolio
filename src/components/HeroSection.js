import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Aos from "aos";
import "aos/dist/aos.css";
import ResumeButton from './ResumeButton';


function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <video src="/videos/video-3.mp4" type='video/mp4' controls="false" autoPlay loop muted/> */}
        <h1>Tirza Wilson</h1>
        <h2>Cyber Security Analyst</h2>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Contact Me
            </Button>
            <ResumeButton className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Resume
            </ResumeButton>
        </div>
    </div>
  );
}

export default HeroSection;

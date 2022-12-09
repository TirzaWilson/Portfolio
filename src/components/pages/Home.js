import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Skills from '../Skills';
import About from '../About';
import Contact from '../Contact';

function Home () {
    return (
        <>
          <HeroSection />
          <Cards />
          <Skills />
          <About />
          <Contact />
        </>
    );
}

export default Home;
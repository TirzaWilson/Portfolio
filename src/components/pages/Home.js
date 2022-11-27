import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Skills from '../Skills';
import About from '../About';

function Home () {
    return (
        <>
          <HeroSection />
          <Cards />
          <Skills />
          <About />
        </>
    );
}

export default Home;
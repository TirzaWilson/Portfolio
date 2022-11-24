import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Skills from '../Skills';

function Home () {
    return (
        <>
          <HeroSection />
          <Cards />
          <Skills />
        </>
    );
}

export default Home;
import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
        <h1 className="about__header" data-aos="fade-in">About</h1>
        <div className="about__wrapper"></div>
        <div className='about__container'>
            <ul>
                <li className="about__item" data-aos="fade-left">Born in Dekalb county Georgia and moved to florida in 2009.</li>
                <li className="about__item" data-aos="fade-right">Aside from coding I'm also a self taught sound engineer. Check out my youtube channel to listen to some nice tunes. </li>
                <li className="about__item" data-aos="fade-left">Currently working on an architectural Visualization. Reconstructing a two story 5000 sq ft residential house using blender and unreal engine.</li>
            </ul>
        </div>
    </div>
  )
}

export default About

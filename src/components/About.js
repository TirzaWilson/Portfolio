import React from 'react'
import './About.css'

function About() {
  return (
    <div id="about">
        <div id='about__link'></div>
        <h1 className="about__header" data-aos="fade-in">About</h1>
        <div className="about__wrapper"></div>
        <div className='about__container'>
            <ul>
                <li className="about__item" data-aos="fade-left">Born in Dekalb county Georgia and moved to florida in 2009.</li>
                <li className="about__item" data-aos="fade-right">Graduated from Allen D. Nease High School in 2012.</li>
                <li className="about__item" data-aos="fade-left">Aside from coding I'm also a self taught sound engineer. Check out my <a className="yt--link" href="https://youtu.be/G8lC1Kc7CAg"><i class="fa-brands fa-youtube"></i> YouTube</a> channel.</li>
                <li className="about__item" data-aos="fade-right">Currently working on an architectural Visualization. Reconstructing a two story 5000 sq ft residential house using blender and unreal engine.</li>
                <li className="about__item" data-aos="fade-left">Other hobbies include photography and videography. Gallary page commming soon!</li>                
            </ul>
        </div>
    </div>
  )
}

export default About

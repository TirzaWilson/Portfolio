import React from 'react'
import '../../Styles/About.css'
import Skills from '../Skills' 


function About() {
  return (
    <>
    <div id="about">
        <div id='about__link'></div>
        <h1 className="about__header">About</h1>
        <div className='about__container'>
            <ul>
                <li className="about__item">Born in Dekalb county Georgia and moved to Florida in 2009.</li>
                <li className="about__item">Graduated from Allen D. Nease High School in 2012.</li>
                <li className="about__item">Aside from coding I'm also a self taught music producer/sound engineer. Check out my <a className="yt--link" href="https://youtu.be/G8lC1Kc7CAg"><i class="fa-brands fa-youtube"></i> YouTube</a> channel.</li>
                <li className="about__item">Currently working on an architectural visualization, reconstructing a two story 5000 sq ft residential house using Blender and Unreal Engine 5.</li>
                <li className="about__item">Other hobbies include photography and videography. Gallary page coming soon!</li>                
            </ul>
        </div>
        <Skills />
    </div>
    </>
    
  )
}

export default About

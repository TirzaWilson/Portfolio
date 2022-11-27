import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div id="skills">
      <div id='skills__wrapper'></div>  
      <div className="skills__container">
        <div className='skills__intro' data-aos="fade-right">
            <h1 className="skills__header">Skills</h1>
            <p>
                I'm an enthusiastic and quick learner. Within one year I was able to learn the following languages/frameworks without any prior programming knowledge.
            </p>
        </div>
        <div className='skills__list' data-aos="fade-left">
            <ul className='skills__items'>
                <li className='skills__item'>HTML</li>
                <li className='skills__item'>CSS</li>
                <li className='skills__item'>Javascript</li>
                <li className='skills__item'>ReactJS</li>
                <li className='skills__item'>Bootstrap</li>
            </ul>
            <ul className='skills__items'>
                <li className='skills__item'>Node.js</li>
                <li className='skills__item'>Python 3.8</li>
                <li className='skills__item'>Pycharm</li>
                <li className='skills__item'>Git/Github</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

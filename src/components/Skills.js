import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div id="skills">
      <div id='skills__wrapper'></div>  
      <div className="skills__container">
        <div className='skills__intro'>
            <h1 className="skills__header" data-aos="fade-in">Skills</h1>
            <p data-aos="fade-in">
                I'm enthusiastic and a quick learner. Within one year I was able to learn the following languages/frameworks without any prior programming knowledge.
            </p>
        </div>
        <div className='skills__list'>
            <ul className='skills__items'>
                <li className='skills__item' data-aos="fade-in">HTML</li>
                <li className='skills__item' data-aos="fade-in">CSS</li>
                <li className='skills__item' data-aos="fade-in">Javascript</li>
                <li className='skills__item' data-aos="fade-in">ReactJS</li>
                <li className='skills__item' data-aos="fade-in">Bootstrap</li>
            </ul>
            <ul className='skills__items'>
                <li className='skills__item' data-aos="fade-in">Node.js</li>
                <li className='skills__item' data-aos="fade-in">Python 3.8</li>
                <li className='skills__item' data-aos="fade-in">Pycharm</li>
                <li className='skills__item' data-aos="fade-in">Git/Github</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

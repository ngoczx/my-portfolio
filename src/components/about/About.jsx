import React from 'react';
import { BiCodeBlock, BiDevices, BiDetail } from 'react-icons/bi';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <img src="https://mattfarley.ca/img/hero-devices.svg" alt="img"></img>
      <div className="content">
        <h2>Hi, I'm Ngoc. Welcome to my Portfolio</h2>
        <p>
          It's been 3 years since i first wrote my line of code. It has been an
          amazing journey, i wish i could learn more about coding. Learn from
          the betters and others, so it would be an honor if i can work in an
          enviroment that can myself in line. I am quitely confident, eager to
          learn. Please contact me if you are interested.
        </p>
      </div>
      <div className="skills">
        <div className="container">
          <div className="box">
            <div className="column column-1">
              <figure className="icon">
                <BiDevices />
              </figure>
              <h2>Presentation</h2>
              <p>Good at presenting</p>
              <h2>Skills:</h2>
              <ul>
                <li>PowerPoint</li>
                <li>Fonts</li>
                <li>Photoshop</li>
              </ul>
            </div>
            <div className="column column-2">
              <figure className="icon">
                <BiCodeBlock />
              </figure>
              <h2>Developer</h2>
              <p>I like to code and discover things</p>
              <h2>Skills:</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
                <li>Restful API</li>
                <li>Github</li>
                <li>Vercel</li>
                <li>Responsive</li>
              </ul>
            </div>
            <div className="column column-3">
              <figure className="icon">
                <BiDetail />
              </figure>
              <h2>English</h2>
              <p>Toeic 700+</p>
              <h2>Skills:</h2>
              <ul>
                <li>Speaking</li>
                <li>Writting</li>
                <li>Reading</li>
                <li>Listening</li>
                <li>Communicating</li>
                <li>Reasearch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

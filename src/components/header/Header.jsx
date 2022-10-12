import React from 'react';
import Intro from './Intro';
import './Header.css';
import ME from '../../assets/ME.png';
import Socials from './Socials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I am Bao Ngoc</h5>
        <h1>Welcome to my portfolio</h1>
        <h5 className="text-light">
          Front-End Developer (main) / Fullstack Developer
        </h5>
        <Intro />
        <Socials />
        <div className="me">
          <img src={ME} alt="My avatar" />
        </div>
        <a className="scroll__down" href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

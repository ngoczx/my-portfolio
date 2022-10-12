import React from 'react';
import {
  BsGithub,
  BsFacebook,
  BsLinkedin,
  BsChatLeftText,
  BsMessenger,
} from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  const handleClick = () => {
    let x = document.querySelectorAll('.popup a');
    for (let i = 0; i < x.length; i++) {
      x[i].style.animation = `popup 1s linear ${i / 3}s forwards`;
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <h2>Interested in collaborating or investing?</h2>
        <p>
          I’m always open to discussing product design work or partnership
          opportunities.
        </p>
        <button className="button" onClick={handleClick}>
          <span className="icon2">
            <BsChatLeftText />
          </span>
          <span>Contact Me</span>
        </button>
        <div className="popup">
          <a href="https://github.com/ngoczx" target="_blank" rel="noreferrer">
            <BsGithub className="svg-gh" />
          </a>
          <a
            href="https://www.facebook.com/ngoc.nguyen.03/"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="svg-fb" />
          </a>
          <a
            href="https://www.linkedin.com/in/ngoczx/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="svg-in" />
          </a>

          <a
            href="https://www.messenger.com/t/100005936374961"
            target="_blank"
            rel="noreferrer"
          >
            <BsMessenger className="svg-me" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

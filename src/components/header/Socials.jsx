import React from 'react';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ngoczx/">
        <BsLinkedin />
      </a>
      <a href="https://www.facebook.com/ngoc.nguyen.03/">
        <BsFacebook />
      </a>
      <a href="https://github.com/ngoczx">
        <BsGithub />
      </a>
    </div>
  );
};

export default Socials;

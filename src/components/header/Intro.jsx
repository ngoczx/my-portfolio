import React from 'react';
import myCV from '../../assets/ME.png';

const Intro = () => {
  return (
    <div className="cta">
      <a className="btn" href={myCV} download>
        Download my CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
};

export default Intro;

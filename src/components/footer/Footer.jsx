import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="cv">
          <h2>Interested in Me?</h2>
          <button className="btn-cv">Download my CV</button>
        </div>
        <div className="text">
          <h3>Bao Ngoc's Portfolio</h3>
          <p>Built with ReactJS</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

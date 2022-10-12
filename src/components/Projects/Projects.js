import React from 'react';
import './Projects.css';
import projects from './projects.json';
import { AiFillGithub } from 'react-icons/ai';

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1>My Recent Projects</h1>
        <p>Here are a few design projects I've worked on recently.</p>
        <div className="demos">
          {projects.map((project) => (
            <div className="demo">
              <div className="info">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-github"
                  >
                    <AiFillGithub />
                  </a>
                  <button className="btn-live">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  </button>
                </div>
              </div>
              <img src={project.img} alt="img"></img>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

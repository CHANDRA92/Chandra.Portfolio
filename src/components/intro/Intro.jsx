import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me_pic.jpg';
import './intro.css';

const Intro = () => {
    return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
          Hi there! My name is <span>Chandra Sekhar Karmakar</span> and I'm an MCA student that loves technology. My skill set is varied, ranging from system analysis to coding. I'm dedicated to converting creative concepts into workable solutions, and I do best in group settings. View my portfolio to get an idea of my work, then get in touch with me to discuss how we can utilise technology to realise all of its potential!
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
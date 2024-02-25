import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Run the effect only once on component mount

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    const targetSection = document.querySelector(navId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav>
      <a href="#home" onClick={() => handleNavClick('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => handleNavClick('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Topbar;

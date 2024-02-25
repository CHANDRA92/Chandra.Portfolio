import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/chandra-sekhar-karmakar/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/CHANDRA92" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/chandra_sekhar_karmakar/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials
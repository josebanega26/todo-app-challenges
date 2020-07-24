import React from 'react';
import './Footer.style.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        <a href="https://josebanega.netlify.app/">José Banega </a>
        {year} @ <a href="https://devchallenges.io/challenges/hH6PbOHBdPm6otzw2De5">DevChallenges.io</a>
      </p>
    </footer>
  );
};

export default Footer;

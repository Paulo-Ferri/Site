import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';
import linkedinIcon from '../images/linkedin-icon.png';
import githubIcon from '../images/github-icon.png';
import gmailIcon from '../images/gmail-icon.png';

function Footer() {
  const location = useLocation();
  
  return (
    <div className="footer_component" id="footer_container">
      <h1>
        { location.pathname === '/' ? "Entre em contato comigo e me siga nas redes!"
        :
        "Fell free to contact me and follow me on the networks!"
        }
      </h1>
      <div className="footer_icons">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=pauloferrisouza@gmail.com" target="_blank" rel="noreferrer">
          <img src={gmailIcon} alt="gmail icon" />
        </a>
        <a href="https://www.github.com/Paulo-Ferri" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="linkedin icon" />
        </a>
        <a href="https://www.linkedin.com/in/paulo-afonso-ferri-de-souza-4766181b5/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="github icon" />
        </a>
      </div>
      <p>
        { location.pathname === '/' ? "Todos os ícons foram retirados de: https://www.flaticon.com/icons"
        :
        "All icons have been taken from: https://www.flaticon.com/icons" }
      </p>
    </div>
  );
}

export default Footer;
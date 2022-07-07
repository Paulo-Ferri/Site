import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="header_component">
      <div className="nav_lang">
        <button
          className="pt_btn"
          onClick={() => navigate('/')}
        >
          PT
        </button>
        <span>|</span>
        <button
          className="en_btn"
          onClick={() => navigate('/en')}
        >
          EN
        </button>
      </div>
      <nav className= "header_nav">
        <AnchorLink href="#main_component">
          Home
        </AnchorLink>
        <AnchorLink href="#about_container">
        { location.pathname === '/' ? "Sobre" : "About" }
        </AnchorLink>
        <AnchorLink href="#works_container">
        { location.pathname === '/' ? "Projetos" : "Projects" }
        </AnchorLink>
      </nav>
    </div>

  );
}

export default Header;
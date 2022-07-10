import React, {useEffect, useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHeaderOpen, setIsHeaderOpen] = useState(false)

  function getWindowDimensions() {
    const { outerWidth: width, outerHeight: height } = window;
    return {
      width,
      height
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    windowDimensions.width > 767 ? (
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
        <AnchorLink href="#footer_container">
        { location.pathname === '/' ? "Contato" : "Contact" }
        </AnchorLink>
      </nav>
    </div>
    ) :
    <div className="header_mobile">
      <button
        className="toggle_header_btn"
        onClick={() => setIsHeaderOpen(!isHeaderOpen)}
      >
        <div className={isHeaderOpen ? "menu_btn open" : "menu_btn"}>
          <div className="menu_btn_inside" />
        </div>
      </button>
      {isHeaderOpen && (
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
            <AnchorLink href="#footer_container">
              { location.pathname === '/' ? "Contato" : "Contact" }
            </AnchorLink>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
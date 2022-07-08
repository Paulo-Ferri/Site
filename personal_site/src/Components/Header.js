import React, {useEffect, useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css'
import headerIcon from '../images/header-icon.png';

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
    windowDimensions.width > 768 ? (
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
    ) :
    <div>
      <button
        className="toggle_header_btn"
        onClick={() => setIsHeaderOpen(!isHeaderOpen)}
      >
        <img src={headerIcon} alt="display header icon" />
      </button>
      {isHeaderOpen === true && (
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
      )}
    </div>
  );
}

export default Header;
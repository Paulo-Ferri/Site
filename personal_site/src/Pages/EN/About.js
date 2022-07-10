import React from 'react';
import '../About.css';
import bugIcon from '../../images/bug-icon.png';
import apiIcon from '../../images/api-icon.png';
import responsiveIcon from '../../images/responsive-icon.png';
import javascriptIcon from '../../images/javascript-icon.png';
import htmlIcon from '../../images/html-icon.png';
import cssIcon from '../../images/css-icon.png';

function About() {
  return(
    <>
      <div className="about_container" id="about_container">
        <div className="icons_about_left">
          <img className="bug_icon_about" src={bugIcon} alt="icon representing a bug" />
          <img className="api_icon_about" src={apiIcon} alt="icon representing an API" />
          <img className="responsive_icon_about" src={responsiveIcon} alt="icon representing an responvie application" />
        </div>
        <div className="icons_about_right">
          <img className="javascript_icon_about" src={javascriptIcon} alt = "icon representing JavaScript" />
          <img className="html_icon_about" src={htmlIcon} alt = "icon representing html" />
          <img className="css_icon_about" src={cssIcon} alt = "icon representing css" />
        </div>
        <h2>Who I am</h2>
        <div className="about_content">
          <p>Hello visitor, how are you? I'm Paulo Afonso, I'm a law graduate from IMED college and during my study period I participated in various work environments, both in the private and public areas. I seek to re-enter the job market through web development, a dream that I am working hard to achieve. I developed this site to share a little of my study and also to have my own space in this gigantic sea that is the web. I'm currently studying web development at Trybe by the XP class and I'm open to proposals!</p>
        </div>
      </div>
              {/* <div className="custom-shape-divider-bottom-about">
              <svg className="about_svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
              </svg>
            </div> */}
            </>
  );
}

export default About;
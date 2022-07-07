import React from 'react';
import '../About.css';

function About() {
  return(
      <div className="about_container" id="about_container">
        <h2>Who am I?</h2>
        <div className="about_content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ipsum nisl, laoreet et sem id, ullamcorper porttitor turpis. Integer pellentesque sed augue sed lobortis. Phasellus sodales auctor convallis. Vestibulum et sagittis sem, ut mollis est. Ut condimentum, lacus nec convallis consequat, arcu ex imperdiet nisl, at maximus quam purus lacinia sem. Sed aliquam feugiat porttitor. Fusce vehicula enim quis turpis consectetur placerat. Nam posuere nisi vitae dui sagittis malesuada.</p>
        </div>
        <div className="custom-shape-divider-bottom-about">
          <svg className="about_svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
  );
}

export default About;
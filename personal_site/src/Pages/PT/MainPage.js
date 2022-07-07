import React from 'react';
import '../MainPage.css';
import profilePicture from '../../images/profile_picture.png';
import profileBackground from '../../images/profile_background5.svg';

function MainPagePT() {
  return(
  <>
    <div className="main_page">
      <div className="apresentation_container apresentation_container_pt">
        <h3>Olá! Eu sou o</h3>
        <h1>Paulo Afonso</h1>
        <h3>Estudante de desenvolvimento web full stack</h3>
      </div>
      <div className="profile_picture_container">
        <img src={profileBackground} className="profile_background" alt="profile background"/>
        <img src={profilePicture} alt="profile" className="profile_picture"/>
      </div>
    </div>
    <div className="custom-shape-divider-bottom-1653059723">
      <svg className="mainpage_svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
    </div>
</>
  );
}

export default MainPagePT;
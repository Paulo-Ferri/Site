import React from 'react';
import About from './EN/About';
import MainPage from './EN/MainPage';
import Works from './EN/Works';
import Header from '../Components/Header';

function EnPage() {
  return (
    <div className="main_component" id="main_component">
      <Header/> 
      <MainPage />
      <About />
      <Works />
    </div>
  )
}

export default EnPage;
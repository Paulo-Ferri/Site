import React from 'react';
import About from './EN/About';
import MainPage from './EN/MainPage';
import Works from './EN/Works';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function EnPage() {
  return (
    <div className="main_component" id="main_component">
      <Header/> 
      <MainPage />
      <About />
      <Works />
      <Footer />
    </div>
  )
}

export default EnPage;
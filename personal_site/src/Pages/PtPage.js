import React from 'react';
import About from './PT/About';
import MainPage from './PT/MainPage';
import Works from './PT/Works';
import Header from '../Components/Header';

function PtPage() {
  return (
    <div className="main_component" id="main_component">
      <Header />
      <MainPage />
      <About />
      <Works />
    </div>
  )
}

export default PtPage;
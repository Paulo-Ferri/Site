import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EnPage from './Pages/EnPage';
import PtPage from './Pages/PtPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PtPage />} />
          <Route path="/en" element={<EnPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

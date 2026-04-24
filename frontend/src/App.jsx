import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorSearch from './pages/DoctorSearch';
import SymptomChecker from './pages/SymptomChecker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<DoctorSearch />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

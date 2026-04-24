import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorSearch from './pages/DoctorSearch';
import SymptomChecker from './pages/SymptomChecker';
import TravelerMode from './pages/TravelerMode';
import DoctorDetail from './pages/DoctorDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<DoctorSearch />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/traveler-mode" element={<TravelerMode />} />
        <Route path="/doctor/:id" element={<DoctorDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

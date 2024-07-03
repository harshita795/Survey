import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PresentationPage from './components/PresentationPage';
import CenteredDiv from './components/CenteredDiv';
import LandingPage from './components/LandingPage';
import QuestionPage from './components/QuestionPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presentation" element={<PresentationPage />} />
        <Route path="/centered-div" element={<CenteredDiv />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/question" element={<QuestionPage />} />

      </Routes>
    </Router>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';
import Home from './pages/Home';
import './App.css'; // Keeping it imported but empty just in case

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white text-vc-dark selection:bg-vc-orange selection:text-white overflow-x-hidden">
        {/* Background Layer */}
        <BackgroundAnimation />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

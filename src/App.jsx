import React from 'react';
import Navbar from '/src/components/layout/Navbar';
import HomePage from '/src/components/pages/HomePage';
import Footer from '/src/components/layout/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

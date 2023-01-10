import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';

function App() {
  return (
    <Router>
      <>
      <Navbar />
        <Routes>
        <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/services"
              element={<Services />}
            />
            <Route
              path="/sign-up"
              element={<SignUp />}
            />
             <Route
              path="/products"
              element={<Products />}
            />


        </Routes>
      
      </>
    
  </Router>
  );
}

export default App;

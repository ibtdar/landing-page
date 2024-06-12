import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Ecommerce from './landingPage/Ecommerce';
import HomeRedirect from './landingPage/HomeRedirect';

function App() {

  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Ecommerce />} />
          <Route path="/ecommerce-website-development/" element={<Ecommerce />} />
        </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App

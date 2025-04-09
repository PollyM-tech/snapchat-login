import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BodyContent from './components/content'
import LogIn from './components/login'
import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import "./App.css"; // Import styles

function App() {
  return (
    <div className="app-container">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Content Section */}
      <div className='container'>
        <div className='left-section'>
          <LogIn/>
        </div>
        <BodyContent/>
      </div>

      {/*  */}
      <Footer />
    </div>
  )
}

export default App;

import './App.css'
import './index.css'
import BodyContent from './components/content'
import LogIn from './components/login'
import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer"; // Import Footer

function App() {
  return (
    <>
      {/* Navbar Section */}
      {/* <Navbar /> */}

      {/* Main Content Section */}
      <div className='container'>
        <div className='left-section'>
          <LogIn/>
        </div>
        <BodyContent/>
      </div>

      {/*  */}
      {/* <Footer /> */}
    </>
  )
}

export default App;
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
      <main className="main-content">
        <h1></h1>
        {/* Add other content here */}
      </main>

      {/*  */}
      <Footer />
    </div>
  );
}

export default App;

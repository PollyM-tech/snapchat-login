import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import necessary React Icons
import { FaSnapchat } from "react-icons/fa6";
import { LiaGripLinesVerticalSolid } from "react-icons/lia";
import { CiPlay1 } from "react-icons/ci"; // Spotlight icon
import { BsChatRight } from "react-icons/bs"; // Chats icon
import { IoIosCamera } from 'react-icons/io'; // Lenses icon
import { TbGridDots } from "react-icons/tb"; // Menu icon
import './Navbar.css'; // For custom styling

const Navbar = () => {
  return (
    <header className="header">
      {/* Left Section: Logo and Search Bar */}
      <div className="header-left">
        <FaSnapchat size={40} className="snapchat-icon" />
        <div className="header-search">
          <input type="text" placeholder="Search..." className="search-input" />
          <FaSearch size={20} color="#000" className="search-icon" />
        </div>
      </div>

      {/* Icons Section */}
      <div className="header-icons">
        <div className="icon-container">
          <LiaGripLinesVerticalSolid size={24} color="#000" className="icon" />
          <span className="icon-label">Stories</span>
        </div>

        <div className="icon-container">
          <CiPlay1 size={24} color="#000" className="icon" />
          <span className="icon-label">Spotlight</span>
        </div>

        <div className="icon-container">
          <BsChatRight size={24} color="#000" className="icon" />
          <span className="icon-label">Chat</span>
        </div>

        <div className="icon-container">
          <IoIosCamera size={24} color="#000" className="icon" />
          <span className="icon-label">Lenses</span>
        </div>

        <div className="icon-container">
          <FaSnapchat size={30} color="black" className="icon" />
          <span className="icon-label">Snapchat+</span>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="header-buttons">
        {/* Menu Button with Grid Dots Icon and Tooltip */}
        <div className="icon-wrapper">
        <div className="icon-hover">
          <TbGridDots size={24} className="dots-icon" />
          <span className="tooltip">Menu</span> {/* Tooltip element */}
        </div>
        </div>

        <button className="btn">Snapchat Ads</button>
        <button className="btn">Download</button>
      </div>
    </header>
  );
};

export default Navbar;

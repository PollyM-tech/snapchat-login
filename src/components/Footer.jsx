import React from 'react';
import { FaWalking } from "react-icons/fa";
import { LiaWalkingSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer >
      {/* Icons */}
      <div className="flex items-center">
        <FaWalking className="icon" />
      </div>

      {/* Text and Link */}
      <p>
        Are you a parent? Learn what we're doing to help keep{' '}
        <a href="#" className="text-yellow-400 underline hover:opacity-80">
          Snapchatters safe.
        </a>
      </p>
    </footer>
  );
};

export default Footer;

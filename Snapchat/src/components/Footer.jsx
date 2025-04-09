import React from 'react';
import { FaWalking } from "react-icons/fa";
import { LiaWalkingSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white text-sm px-6 py-3 flex items-center gap-3">
      {/* Icons */}
      <div className="flex items-center">
      <FaWalking className="icon" />
      <LiaWalkingSolid className="icon" />
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

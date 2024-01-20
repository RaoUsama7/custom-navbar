import React from 'react';
import Image from 'next/image';
import Icon from "@/app/assserts/Logo.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-icon">
        <Image src={Icon} width={120} height={55} alt="logo" />
      </div>

      {/* Center Links */}
      <div className="navbar-links">
        <a href="#link1"> Swape </a>
        <a href="#link2"> Pool </a>
        <a href="#link3"> Vote </a>
      </div>

      {/* Right Buttons */}
      <div className="navbar-buttons">
        <button className="btn btn-grey">0 SAP</button>
        <button className="btn btn-black">Connect to Wallet</button>
      </div>
    </nav>
  );
};

export default Navbar;

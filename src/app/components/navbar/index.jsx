import React from 'react';
import Image from 'next/image';
import Icon from "@/app/assserts/Logo.png"

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-white p-5 md:p-10 ">
      
     
      <div className="p-2 md:p-0">
        <Image src={Icon} width={120} height={55} alt="logo" />
      </div>

     
      <div className="hidden md:flex md:block">
        <a href="#link1" className="text-black mr-6">Swape</a>
        <a href="#link2" className="text-black mr-6">Pool</a>
        <a href="#link3" className="text-black">Vote</a>
      </div>

      <div className="flex flex-col md:hidden text-center mt-4 navbar-buttons">
        <a href="#link1" className="text-black my-2">Swape</a>
        <a href="#link2" className="text-black my-2">Pool</a>
        <a href="#link3" className="text-black my-2">Vote</a>
        <button className="btn btn-grey my-2 ">0 SAP</button>
        <button className="btn btn-black my-2">Connect to Wallet</button>
      </div>
     
      <div className="flex  navbar-buttons">
        <button className="btn btn-grey hidden md:inline-block">0 SAP</button>
        <button className="btn btn-black ml-4 hidden md:inline-block">Connect to Wallet</button>
      </div>

    </nav>
  );
};

export default Navbar;

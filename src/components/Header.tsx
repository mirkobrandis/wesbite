import React from 'react';
import { Menu } from 'lucide-react';
import { scrollToElement } from '../utils/smoothScroll';

const Header = () => {
  return (
    <header className="bg-black py-4 px-6 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <img 
              src="https://cdn.panel.dollarotools.xyz/i/file/6b3d3fda-d521-4cc2-844f-547281229275" 
              alt="DollaroTools Logo" 
              className="h-8 w-auto mr-2"
            />
            <span className="text-blue-600 text-2xl font-bold">DollaroTools</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToElement('home')} className="text-gray-300 hover:text-white">Home</button>
            <button onClick={() => scrollToElement('pricing')} className="text-gray-300 hover:text-white">Pricing</button>
            <button onClick={() => scrollToElement('features')} className="text-gray-300 hover:text-white">Features</button>
            <button onClick={() => scrollToElement('contact')} className="text-gray-300 hover:text-white">Contact</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-300 hover:text-white px-4 py-2">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign Up</button>
          <Menu className="md:hidden text-white w-6 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
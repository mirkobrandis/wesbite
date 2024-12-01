import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../utils/smoothScroll';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img 
                src="https://cdn.panel.dollarotools.xyz/i/file/6b3d3fda-d521-4cc2-844f-547281229275" 
                alt="DollaroTools Logo" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-blue-600 text-2xl font-bold">DollaroTools</span>
            </div>
            <p className="mt-4">Premium virtual servers for your business needs.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToElement('home')} className="hover:text-white">Home</button></li>
              <li><button onClick={() => scrollToElement('pricing')} className="hover:text-white">Pricing</button></li>
              <li><button onClick={() => scrollToElement('features')} className="hover:text-white">Features</button></li>
              <li><button onClick={() => scrollToElement('contact')} className="hover:text-white">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>support@dollarotools.com</li>
              <li>
                <a 
                  href="https://discord.gg/dollarotools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Join our Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} DollaroTools. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
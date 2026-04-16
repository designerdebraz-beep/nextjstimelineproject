import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
       <footer className="bg-[#1D3C33] text-white py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Brand Name */}
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
          KeenKeeper
        </h2>

        {/* Tagline */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links Section */}
        <div className="mb-16">
          <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
          <div className="flex justify-center gap-4">
            {/* Instagram */}
            <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaInstagram className="text-xl text-[#1D3C33]" />
            </a>
            
            {/* Facebook */}
            <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaFacebookF className="text-xl text-[#1D3C33]" />
            </a>
            
            {/* X (Twitter) */}
            <a href="#" className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FaXTwitter  className="text-xl text-[#1D3C33]" />
            </a>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full border-t border-white/10 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;
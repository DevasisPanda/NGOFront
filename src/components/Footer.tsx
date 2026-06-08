import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t-4 border-[#ed8901]">
      <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* About Column */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-[24px] font-bold text-[#ed8901] border-b border-gray-700 pb-2 inline-block">About</h3>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ed8901] hover:text-[#00123a] transition-colors" href="#">F</a>
            <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ed8901] hover:text-[#00123a] transition-colors" href="#">I</a>
            <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ed8901] hover:text-[#00123a] transition-colors" href="#">Y</a>
          </div>
          <ul className="space-y-3 mt-4 text-gray-400">
            <li><Link className="nav-link" to="/"><span className="material-symbols-outlined text-sm">chevron_right</span> Home</Link></li>
            <li><Link className="nav-link" to="/about"><span className="material-symbols-outlined text-sm">chevron_right</span> About Us</Link></li>
            <li><Link className="nav-link" to="/mission"><span className="material-symbols-outlined text-sm">chevron_right</span> Mission & Vision</Link></li>
            <li><Link className="nav-link" to="/"><span className="material-symbols-outlined text-sm">chevron_right</span> Management Body</Link></li>
          </ul>
        </div>
        
        {/* Quick Links Column */}
        <div>
          <h3 className="text-[24px] font-bold text-[#ed8901] border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3 mt-6 text-gray-400">
            <li><Link className="nav-link" to="/programs"><span className="material-symbols-outlined text-sm">chevron_right</span> Our Projects</Link></li>
            <li><Link className="nav-link" to="/gallery"><span className="material-symbols-outlined text-sm">chevron_right</span> Activity Gallery</Link></li>
            <li><Link className="nav-link" to="/"><span className="material-symbols-outlined text-sm">chevron_right</span> Campaigns</Link></li>
          </ul>
          <h3 className="text-[24px] font-bold text-[#ed8901] border-b border-gray-700 pb-2 inline-block mt-8">Policies</h3>
          <ul className="space-y-3 mt-6 text-gray-400">
            <li><Link className="nav-link" to="/"><span className="material-symbols-outlined text-sm">chevron_right</span> Terms & Conditions</Link></li>
            <li><Link className="nav-link" to="/"><span className="material-symbols-outlined text-sm">chevron_right</span> Privacy Policy</Link></li>
          </ul>
        </div>
        
        {/* Verification Column */}
        <div>
          <h3 className="text-[24px] font-bold text-[#ed8901] border-b border-gray-700 pb-2 inline-block">Verification</h3>
          <ul className="space-y-3 mt-6 text-gray-400">
            <li><Link className="nav-link" to="/"><span className="material-symbols-outlined text-sm">chevron_right</span> Members Verification</Link></li>
            <li><Link className="nav-link" to="/internship"><span className="material-symbols-outlined text-sm">chevron_right</span> Internship Certificate Verification</Link></li>
            <li><Link className="nav-link" to="/"><span className="material-symbols-outlined text-sm">chevron_right</span> Check Donation History</Link></li>
          </ul>
        </div>
        
        {/* Contact Details Column */}
        <div>
          <h3 className="text-[24px] font-bold text-[#ed8901] border-b border-gray-700 pb-2 inline-block">Contact Details</h3>
          <ul className="space-y-4 mt-6 text-gray-400">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ed8901]">call</span>
              <span>+91 85648 53303</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ed8901]">mail</span>
              <span>valmikisamajtrust@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#ed8901]">location_on</span>
              <span>Lucknow, Uttar Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container-main pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Valmiki Samaj Charitable Trust. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

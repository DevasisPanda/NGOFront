import React from 'react';

const ViewInternship: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center py-20 px-6 relative bg-[#f9f9f9] min-h-screen">
      <div className="w-full max-w-[700px] relative mt-12">
        {/* Central Card */}
        <div className="bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-12 relative border border-[#e2e2e2]">
          {/* Logo Overlay */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2">
            <div className="bg-white p-2 rounded-full shadow-lg border border-[#e2e2e2]">
              <img alt="Trust Logo" className="w-28 h-28 object-contain rounded-full" src="/logo.jpg" />
            </div>
          </div>
          
          {/* Card Content */}
          <div className="mt-16 text-center">
            <h1 className="text-[#061941] text-[38px] font-extrabold tracking-tight leading-tight uppercase">Valmiki Samaj Charitable Trust</h1>
            <p className="text-[#64748B] text-xl mt-2 font-medium">Internship Certificate Verification</p>
            <div className="w-16 h-1 mx-auto mt-4 bg-[#061941] rounded-full"></div>
            
            {/* Verification Input */}
            <div className="mt-12 max-w-lg mx-auto">
              <div className="bg-white card-content rounded-2xl shadow-sm border border-[#e2e2e2]">
                <div className="relative flex items-center border-2 border-[#e2e2e2] rounded-xl px-4 py-4 focus-within:border-[#061941] transition-colors">
                  <span className="material-symbols-outlined text-[#061941] text-2xl mr-3">badge</span>
                  <input className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-lg text-[#1a1c1c] placeholder-[#64748B]" placeholder="Enter Internship ID (e.g., INT-2025-001)" type="text" />
                </div>
              </div>
              
              {/* Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button className="bg-[#f3f3f4] text-[#061941] font-bold py-4 rounded-2xl hover:bg-[#e2e2e2] transition-colors text-lg border border-[#e2e2e2]">
                  Verify Now
                </button>
                <button className="bg-[#f3f3f4] text-[#061941] font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#e2e2e2] transition-colors text-lg border border-[#e2e2e2]">
                  <span className="material-symbols-outlined">restart_alt</span> Clear
                </button>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-[#e2e2e2]">
              <div className="flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-[#061941] text-4xl">lock</span>
                <span className="text-[#061941]/80 font-bold text-sm">Secure Verification</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-[#061941] text-4xl">bolt</span>
                <span className="text-[#061941]/80 font-bold text-sm">Instant Results</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="material-symbols-outlined text-[#061941] text-4xl">database</span>
                <span className="text-[#061941]/80 font-bold text-sm">Official Records</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInternship;

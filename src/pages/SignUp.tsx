import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex-grow flex items-center justify-center card-content md:p-12 relative overflow-hidden min-h-screen bg-[#f9f9f9]">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#b6c5f6] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#fed813] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      
      {/* Signup Card */}
      <div className="bg-white rounded-xl shadow-md w-full max-w-[500px] p-12 relative z-10 border border-[#c5c6cf]/30">
        {/* Brand & Heading */}
        <div className="w-full flex flex-col items-center justify-center bg-white mb-8 relative z-10">
          <img alt="Valmiki Samaj Trust Logo" className="h-[80px] w-[80px] mx-auto mb-4 rounded-full border border-[#c5c6cf] shadow-sm object-cover shrink-0" src="/logo.jpg" />
          <h2 className="text-3xl font-extrabold text-[#00123a] mb-2 text-center shrink-0">Create an Account</h2>
          <p className="text-body text-center">Create an account to become a member or volunteer.</p>
        </div>
        
        {/* Signup Form */}
        <form action="#" className="space-y-5" method="POST">
          {/* Full Name Field */}
          <div>
            <label className="block text-[14px] font-semibold text-[#1a1c1c] mb-1" htmlFor="fullName">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#75777f] text-[20px]">person</span>
              </div>
              <input className="block w-full pl-[40px] pr-3 py-2 border border-[#c5c6cf] rounded-lg bg-white text-[#1a1c1c] focus:outline-none focus:ring-2 focus:ring-[#061941] focus:border-transparent transition-colors text-[16px] placeholder-[#64748B]" id="fullName" name="fullName" placeholder="Enter your full name" required type="text" />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-[14px] font-semibold text-[#1a1c1c] mb-1" htmlFor="email">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#75777f] text-[20px]">mail</span>
              </div>
              <input className="block w-full pl-[40px] pr-3 py-2 border border-[#c5c6cf] rounded-lg bg-white text-[#1a1c1c] focus:outline-none focus:ring-2 focus:ring-[#061941] focus:border-transparent transition-colors text-[16px] placeholder-[#64748B]" id="email" name="email" placeholder="Enter your email" required type="email" />
            </div>
          </div>
          
          {/* Phone Field */}
          <div>
            <label className="block text-[14px] font-semibold text-[#1a1c1c] mb-1" htmlFor="phone">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#75777f] text-[20px]">call</span>
              </div>
              <input className="block w-full pl-[40px] pr-3 py-2 border border-[#c5c6cf] rounded-lg bg-white text-[#1a1c1c] focus:outline-none focus:ring-2 focus:ring-[#061941] focus:border-transparent transition-colors text-[16px] placeholder-[#64748B]" id="phone" name="phone" placeholder="Enter your mobile number" required type="tel" />
            </div>
          </div>
          
          {/* Password Field */}
          <div>
            <label className="block text-[14px] font-semibold text-[#1a1c1c] mb-1" htmlFor="password">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#75777f] text-[20px]">lock</span>
              </div>
              <input className="block w-full pl-[40px] pr-[40px] py-2 border border-[#c5c6cf] rounded-lg bg-white text-[#1a1c1c] focus:outline-none focus:ring-2 focus:ring-[#061941] focus:border-transparent transition-colors text-[16px] placeholder-[#64748B]" id="password" name="password" placeholder="••••••••" required type={showPassword ? "text" : "password"} />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#75777f] hover:text-[#1a1c1c] transition-colors" onClick={() => setShowPassword(!showPassword)} type="button">
                <span className="material-symbols-outlined text-[20px]">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-[14px] font-semibold text-[#1a1c1c] mb-1" htmlFor="confirmPassword">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#75777f] text-[20px]">lock_reset</span>
              </div>
              <input className="block w-full pl-[40px] pr-[40px] py-2 border border-[#c5c6cf] rounded-lg bg-white text-[#1a1c1c] focus:outline-none focus:ring-2 focus:ring-[#061941] focus:border-transparent transition-colors text-[16px] placeholder-[#64748B]" id="confirmPassword" name="confirmPassword" placeholder="••••••••" required type={showConfirmPassword ? "text" : "password"} />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#75777f] hover:text-[#1a1c1c] transition-colors" onClick={() => setShowConfirmPassword(!showConfirmPassword)} type="button">
                <span className="material-symbols-outlined text-[20px]">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
          </div>
          
          {/* Submit Button */}
          <button className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-[14px] font-bold text-[#00123a] bg-[#ed8901] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ed8901] transition-colors duration-200 mt-4" type="submit">
            Create Account
          </button>
        </form>
        
        {/* Bottom Link */}
        <div className="mt-8 text-center">
          <p className="text-body">
            Already have an account?{' '}
            <Link className="text-[14px] font-semibold text-[#061941] hover:text-[#ed8901] transition-colors hover:underline" to="/signin">Sign In Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

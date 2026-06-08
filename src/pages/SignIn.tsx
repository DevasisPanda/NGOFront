import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex-grow flex items-center justify-center card-content md:p-12 relative overflow-hidden min-h-screen bg-[#f9f9f9]">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#b6c5f6] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#fed813] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      
      {/* Login Card */}
      <div className="bg-white rounded-xl shadow-md w-full max-w-[480px] p-12 relative z-10 border border-[#c5c6cf]/30">
        {/* Brand & Heading */}
        <div className="w-full flex flex-col items-center justify-center bg-white mb-8">
          <img alt="Valmiki Samaj Trust Logo" className="h-[80px] w-[80px] mx-auto mb-4 rounded-full border border-[#c5c6cf] shadow-sm object-cover" src="/logo.jpg" />
          <h2 className="text-3xl font-extrabold text-[#00123a] mb-2 text-center">Welcome Back</h2>
          <p className="text-body text-center">Sign in to your administration dashboard.</p>
        </div>
        
        {/* Login Form */}
        <form action="#" className="space-y-6" method="POST">
          {/* Email Field */}
          <div>
            <label className="block text-[14px] font-semibold text-[#1a1c1c] mb-1" htmlFor="email">Email or Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#75777f] text-[20px]">person</span>
              </div>
              <input className="block w-full pl-[40px] pr-3 py-2 border border-[#c5c6cf] rounded-lg bg-white text-[#1a1c1c] focus:outline-none focus:ring-2 focus:ring-[#061941] focus:border-transparent transition-colors text-[16px] placeholder-[#64748B]" id="email" name="email" placeholder="Enter your email" required type="text" />
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
          
          {/* Options Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input className="h-4 w-4 text-[#061941] border-[#c5c6cf] rounded focus:ring-[#061941]" id="remember-me" name="remember-me" type="checkbox" />
              <label className="ml-2 block text-[12px] font-medium text-[#45464e]" htmlFor="remember-me">Remember me</label>
            </div>
            <a className="text-[12px] font-medium text-[#061941] hover:text-[#ed8901] transition-colors hover:underline" href="#">Forgot Password?</a>
          </div>
          
          {/* Submit Button */}
          <button className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-[14px] font-bold text-[#00123a] bg-[#ed8901] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ed8901] transition-colors duration-200" type="submit">
            Sign In
          </button>
        </form>
        
        {/* Bottom Link */}
        <div className="mt-12 text-center">
          <p className="text-body">
            Don't have an account?{' '}
            <Link className="text-[14px] font-semibold text-[#061941] hover:text-[#ed8901] transition-colors hover:underline" to="/signup">Request Access</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

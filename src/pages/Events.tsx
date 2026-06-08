import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Events: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-section fade-in-section" id="programs">
      <section className="bg-[#00123a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-main text-center relative z-10">
          <h1 className="text-[#ed8901] mb-6 text-5xl md:text-6xl font-extrabold tracking-tight flex items-center justify-center gap-4">
            Our Events
          </h1>
          <p className="opacity-90 max-w-3xl mx-auto text-xl md:text-2xl font-medium italic">
            "Join our community events and be a part of the change we're making."
          </p>
        </div>
      </section>

      <section className="container-main -mt-12 mb-20 relative z-20">
        <div className="bg-white rounded-xl shadow-lg border border-[#c5c6cf] card-content md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-6">
              <label className="block text-sm font-bold text-[#1a1c1c] mb-2">Search Events</label>
              <div className="flex">
                <input className="flex-1 border-[#c5c6cf] focus:border-[#00123a] focus:ring-[#00123a] rounded-l-lg bg-[#f3f3f4] text-[#1a1c1c] py-2.5 px-4 outline-none border" placeholder="Search events..." type="text"/>
                <button className="bg-[#00123a] text-white px-6 rounded-r-lg hover:opacity-90 transition-all flex items-center gap-2 font-bold whitespace-nowrap">
                  <span className="material-symbols-outlined text-xl">search</span> Search
                </button>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <label className="block text-sm font-bold text-[#1a1c1c] mb-2">Category</label>
              <div className="relative">
                <select className="w-full appearance-none border border-[#c5c6cf] focus:border-[#00123a] focus:ring-[#00123a] rounded-lg bg-[#f3f3f4] text-[#1a1c1c] py-2.5 px-4 outline-none">
                  <option>All Categories</option>
                  <option>Education</option>
                  <option>Health</option>
                  <option>Spirituality</option>
                  <option>Environment</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#45464e]">expand_more</span>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <label className="block text-sm font-bold text-[#1a1c1c] mb-2">Status</label>
              <div className="relative">
                <select className="w-full appearance-none border border-[#c5c6cf] focus:border-[#00123a] focus:ring-[#00123a] rounded-lg bg-[#f3f3f4] text-[#1a1c1c] py-2.5 px-4 outline-none">
                  <option>All Statuses</option>
                  <option>Upcoming</option>
                  <option>Completed</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#45464e]">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00123a] py-12 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
        <div className="container-main text-center flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-[32px] font-bold text-white mb-4 md:mb-0">Ready to make a difference?</h2>
          <Link to="/contact" className="bg-[#ed8901] text-[#00123a] px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            <span className="material-symbols-outlined">mail</span> Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;

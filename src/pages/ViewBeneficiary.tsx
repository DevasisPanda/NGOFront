import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewBeneficiary: React.FC = () => {
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
    <div className="page-section fade-in-section" id="beneficiaries">
      <section className="bg-[#00123a] text-white py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="text-[#ed8901] mb-4 text-6xl font-bold">Active Beneficiary</h1>
          <p className="opacity-90 max-w-2xl mx-auto text-xl">Glimpses of our mission in action, showcasing our impact and the communities we serve.</p>
        </div>
      </section>

      <div className="container-main">
        <div className="flex flex-col items-center w-full mb-12 bg-white rounded-xl shadow-sm border border-[#e2e2e2] p-8">
          <h2 className="text-[#061941] text-3xl font-bold mb-8">Beneficiary List</h2>
          <div className="w-full flex flex-wrap gap-4 items-center justify-center mb-6">
            <div className="flex-1 min-w-[280px] max-w-sm">
              <input type="text" placeholder="Search by Name or Email" className="w-full px-4 py-3 border border-[#c5c6cf] rounded-lg focus:ring-2 focus:ring-[#061941] outline-none transition-all" />
            </div>
            <div className="w-full sm:w-auto relative">
              <select className="w-full px-4 py-3 border border-[#c5c6cf] rounded-lg focus:ring-2 focus:ring-[#061941] outline-none transition-all bg-white appearance-none pr-10">
                <option value="">Filter by Category</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#75777f]">expand_more</span>
            </div>
            <div className="w-full sm:w-auto relative">
              <select className="w-full px-4 py-3 border border-[#c5c6cf] rounded-lg focus:ring-2 focus:ring-[#061941] outline-none transition-all bg-white appearance-none pr-10">
                <option value="">Filter by Status</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#75777f]">expand_more</span>
            </div>
            <button className="px-8 py-3 bg-[#64748B] text-white font-bold rounded-lg hover:bg-[#475569] transition-colors shrink-0">
              Clear
            </button>
          </div>
          <div className="text-[#64748B] py-12 text-lg text-center border-t border-[#e2e2e2] w-full">
            No beneficiaries found.
          </div>
        </div>
        
        <div className="flex justify-center mb-8">
          <Link to="/contact" className="bg-[#061941] text-white px-10 py-4 rounded-full font-bold text-xl flex items-center gap-3 hover:bg-[#00123a] transition-all shadow-lg">
            Contact Us Now <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewBeneficiary;

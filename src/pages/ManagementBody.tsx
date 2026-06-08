import React, { useEffect } from 'react';

const ManagementBody: React.FC = () => {
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
    <div className="page-section fade-in-section">
      {/* Header Section */}
      <section className="bg-[#00123a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-main text-center relative z-10">
          <h1 className="text-[#ed8901] mb-6 text-5xl md:text-6xl font-extrabold tracking-tight">
            Management Body
          </h1>
          <p className="opacity-90 max-w-2xl mx-auto text-xl md:text-2xl font-medium">
            Meet the dedicated individuals guiding Valmiki Samaj Charitable Trust towards a better future.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="text-center mb-16 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <span className="text-[#ed8901] font-bold tracking-widest uppercase text-sm mb-2 block">Our Leadership</span>
            <h2 className="text-[36px] font-bold text-[#00123a]">Trustees & Management</h2>
            <div className="w-24 h-1.5 bg-[#ed8901] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Founder Profile - Detailed Context for Credibility */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-gray-100 mb-16 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <div className="flex flex-col lg:flex-row">
              {/* Image Side */}
              <div className="lg:w-2/5 relative h-[400px] lg:h-auto bg-[#00123a]">
                <img src="/founder.jpg" alt="Shri Narayanbhai M. Rathod" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00123a] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center justify-center bg-[#ed8901] p-2 rounded-full mb-3 shadow-lg">
                    <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
                  </div>
                  <h3 className="text-[28px] font-bold leading-tight mb-1">Shri Narayanbhai<br/>M. Rathod</h3>
                  <p className="text-[#ed8901] font-bold text-[14px] uppercase tracking-wide">Founder, Coordinator & President</p>
                </div>
              </div>

              {/* Details Side */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                <div className="relative">
                  <span className="material-symbols-outlined absolute -top-4 -left-4 text-6xl text-gray-100 -z-10 rotate-180">format_quote</span>
                  <p className="text-[#00123a] text-[18px] leading-relaxed font-medium italic mb-6">
                    "Every human life deserves dignity, hope, opportunity, and a future."
                  </p>
                </div>
                
                <p className="text-[#64748B] text-[15px] leading-relaxed mb-6">
                  Driven by deep compassion and a profound understanding of the struggles faced by the underprivileged, Shri Narayanbhai M. Rathod established the Valmiki Samaj Charitable Trust on January 24, 2020. 
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#f8f9fa] p-2 rounded-lg text-[#ed8901] shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </div>
                    <div>
                      <h4 className="text-[#00123a] font-bold text-[15px] mb-1">Visionary Leadership</h4>
                      <p className="text-[#64748B] text-[14px] leading-relaxed">Dedicated to building a society free from poverty and discrimination, focusing on long-term transformation rather than temporary relief.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#f8f9fa] p-2 rounded-lg text-[#ed8901] shrink-0 mt-1">
                      <span className="material-symbols-outlined text-[20px]">handshake</span>
                    </div>
                    <div>
                      <h4 className="text-[#00123a] font-bold text-[15px] mb-1">Commitment to the Vulnerable</h4>
                      <p className="text-[#64748B] text-[14px] leading-relaxed">Working tirelessly for orphaned children, widows, sanitation workers, and marginalized families to restore their confidence and dignity.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#ed8901]">verified</span>
                    <span className="text-[#00123a] font-bold text-[14px]">Registered Trust: F/1968/Aravalli</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Members Grid (We will inject more cards here later) */}
          <div className="text-center mb-10 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <h3 className="text-[24px] font-bold text-[#00123a]">Executive Committee</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0" id="management-cards">
            
            {/* Placeholder for future members */}
            <div className="bg-[#f8f9fa] rounded-3xl overflow-hidden hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 border-dashed flex flex-col items-center justify-center h-[350px] text-gray-400 hover:bg-white hover:border-[#ed8901] hover:text-[#ed8901] cursor-pointer group">
               <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-[#fff3e0] transition-colors">
                 <span className="material-symbols-outlined text-4xl">person_add</span>
               </div>
               <p className="font-bold text-[15px]">More Members Coming Soon</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementBody;

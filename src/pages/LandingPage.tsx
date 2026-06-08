import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center fade-in-section bg-[#00123a] text-white overflow-hidden" id="home">
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop")' }}></div>
        <div className="relative z-10 container-main text-center py-20">
          <h1 className="text-[48px] md:text-[64px] font-extrabold mb-6 leading-tight tracking-tight text-white">
            Serving Humanity <br />
            <span className="text-[#ffe16a]">with Compassion</span>
          </h1>
          <p className="text-[18px] max-w-2xl mx-auto mb-10 text-white/90">
            Dedicated to uplifting marginalized communities through education, empowerment, and sustainable rural development. Join us in making a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a className="bg-[#fed813] text-[#705e00] px-8 py-4 rounded-full font-bold text-[14px] hover:bg-[#ffe16a] transition-transform hover:-translate-y-1 active:scale-95 duration-200 w-full sm:w-auto text-center shadow-md" href="#campaigns">
              Support Our Cause
            </a>
            <a className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-[14px] hover:bg-white/10 transition-colors w-full sm:w-auto text-center" href="#about">
              Learn More
            </a>
          </div>
        </div>
        {/* Curve bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg className="relative block w-full h-[50px] md:h-[100px]" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path className="text-[#f9f9f9]" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,120.22,192.35,107.56,236.74,98.39,279.88,77.78,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 container-main fade-in-section" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-[#e8c400] font-bold text-[14px] tracking-wider uppercase mb-2 block">Our Purpose</span>
              <h2 className="text-[32px] font-bold text-[#00123a] mb-4">Mission & Vision</h2>
              <div className="w-16 h-1 bg-[#ffe16a] mb-6"></div>
            </div>
            <p className="text-[18px] text-[#45464e]">
              The Valmiki Samaj Charitable Trust is driven by a profound commitment to social equity. We believe that every individual, regardless of their background, deserves access to quality education, healthcare, and economic opportunities.
            </p>
            <div className="space-y-6">
              <div className="bg-white card-content rounded-xl shadow-sm border border-[#e2e2e2] flex gap-4">
                <div className="w-12 h-12 bg-[#061941] text-[#7383b0] rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">visibility</span>
                </div>
                <div>
                  <h3 className="card-title-bold">Our Vision</h3>
                  <p className="text-[#45464e] text-[16px]">To create a society where rural communities and marginalized groups are self-reliant, empowered, and integrated into the mainstream development narrative.</p>
                </div>
              </div>
              <div className="bg-white card-content rounded-xl shadow-sm border border-[#e2e2e2] flex gap-4">
                <div className="w-12 h-12 bg-[#fed813] text-[#705e00] rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">flag</span>
                </div>
                <div>
                  <h3 className="card-title-bold">Our Mission</h3>
                  <p className="text-[#45464e] text-[16px]">To implement sustainable grassroots programs focusing on youth skill development, women's financial independence, and rural infrastructure enhancement.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[#b6c5f6]/20 rounded-2xl transform rotate-3"></div>
            <img alt="Meeting of NGO community leaders" className="relative rounded-2xl shadow-lg w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
            <div className="absolute -bottom-8 -left-8 bg-white card-content rounded-xl shadow-xl border border-[#e2e2e2] flex gap-6 items-center">
              <div className="text-center">
                <span className="block text-[32px] font-bold text-[#00123a]">15+</span>
                <span className="text-[12px] text-[#64748B]">Years Active</span>
              </div>
              <div className="w-px h-12 bg-[#c5c6cf]"></div>
              <div className="text-center">
                <span className="block text-[32px] font-bold text-[#e8c400]">10k</span>
                <span className="text-[12px] text-[#64748B]">Lives Impacted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="py-20 bg-[#F8F9FA] fade-in-section" id="projects">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#e8c400] font-bold text-[14px] tracking-wider uppercase mb-2 block">Initiatives</span>
            <h2 className="text-[32px] font-bold text-[#00123a] mb-4">Our Key Projects</h2>
            <p className="text-[16px] text-[#64748B]">Focusing our resources where they create the most sustainable and transformative impact for communities in need.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
            {/* Large Feature Card */}
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#00123a]/40 group-hover:bg-[#00123a]/20 transition-colors z-10"></div>
              <img alt="Youth Empowerment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-[#00123a]/90 via-[#00123a]/50 to-transparent">
                <span className="bg-[#fed813] text-[#705e00] px-3 py-1 rounded-full font-bold text-[12px] inline-block mb-3">Flagship</span>
                <h3 className="text-[32px] font-bold text-white mb-2">Youth Empowerment</h3>
                <p className="text-[16px] text-white/80 max-w-md">Providing vocational training, digital literacy, and career counseling to bridge the gap between rural youth and modern industry requirements.</p>
              </div>
            </div>
            {/* Secondary Card 1 */}
            <div className="rounded-2xl overflow-hidden relative group bg-white border border-[#e2e2e2] card-content flex flex-col justify-end">
              <div className="absolute tocard-content right-6 w-10 h-10 bg-[#061941] text-[#7383b0] rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">female</span>
              </div>
              <div>
                <h3 className="card-title-bold">Women Empowerment</h3>
                <p className="text-[14px] text-[#64748B]">Facilitating micro-finance groups, skill workshops, and leadership seminars to foster financial independence among rural women.</p>
              </div>
              <div className="mt-4 h-1 w-full bg-[#e2e2e2] rounded-full overflow-hidden">
                <div className="h-full bg-[#ffe16a] w-3/4"></div>
              </div>
            </div>
            {/* Secondary Card 2 */}
            <div className="rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#00123a]/50 z-10"></div>
              <img alt="Rural Development" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="absolute inset-0 z-20 card-content flex flex-col justify-between">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined">agriculture</span>
                </div>
                <div>
                  <h3 className="text-[24px] font-bold text-white mb-1">Rural Development</h3>
                  <p className="text-[14px] text-white/80">Enhancing infrastructure and clean water access.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Gallery */}
      <section className="py-20 container-main fade-in-section" id="gallery">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[32px] font-bold text-[#00123a] mb-2">Activity Gallery</h2>
            <p className="text-[16px] text-[#64748B]">On-the-ground moments from our recent initiatives.</p>
          </div>
          <Link to="/gallery" className="hidden sm:flex items-center gap-2 text-[#00123a] font-bold text-[14px] hover:text-[#e8c400] transition-colors">
            View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
            <img alt="Community Outreach" className="w-full h-full object-cover aspect-[1.47] group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-[#00123a]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-[24px] font-bold">Community Outreach</span>
            </div>
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative group">
            <img alt="Education Drive" className="w-full h-full object-cover aspect-[1.79] group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-[#00123a]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-[24px] font-bold">Education Drive</span>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img alt="Volunteer" className="w-full h-full object-cover aspect-square" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img alt="Community Planning" className="w-full h-full object-cover aspect-square" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
          </div>
        </div>
      </section>
      
      {/* Active Campaigns */}
      <section className="py-20 bg-[#dae2ff]/30 fade-in-section" id="campaigns">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#00123a] mb-2">Active Campaigns</h2>
            <p className="text-[16px] text-[#64748B] max-w-2xl mx-auto">Urgent initiatives requiring immediate support. Your contribution makes a direct impact.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e2e2] flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto">
                <img alt="Winter Relief Fund" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              </div>
              <div className="card-content md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="card-title-bold">Winter Relief Fund</h3>
                  <p className="text-[14px] text-[#64748B] mb-4">Provide warm clothing and blankets to those in need during the harsh winter months.</p>
                </div>
                <Link to="/donate" className="text-[#ed8901] font-bold text-[14px] flex items-center gap-1 hover:underline">
                  Donate Now <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#e2e2e2] flex flex-col md:flex-row">
              <div className="md:w-2/5 h-48 md:h-auto bg-gray-200 flex items-center justify-center">
                 <span className="material-symbols-outlined text-gray-400 text-4xl">school</span>
              </div>
              <div className="card-content md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="card-title-bold">Education for All</h3>
                  <p className="text-[14px] text-[#64748B] mb-4">Support the education of underprivileged children by donating school supplies and funding scholarships.</p>
                </div>
                <Link to="/donate" className="text-[#ed8901] font-bold text-[14px] flex items-center gap-1 hover:underline">
                  Donate Now <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;

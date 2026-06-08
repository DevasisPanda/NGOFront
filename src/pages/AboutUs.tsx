import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
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
    <div className="page-section fade-in-section" id="about-us">
      {/* About Header */}
      <section className="bg-[#00123a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-main text-center relative z-10">
          <h1 className="text-[#ed8901] mb-6 text-5xl md:text-6xl font-extrabold tracking-tight flex items-center justify-center gap-4">
            About Us
          </h1>
          <p className="opacity-90 max-w-3xl mx-auto text-xl md:text-2xl font-medium italic">
            "Every human life deserves dignity, hope, opportunity, and a future."
          </p>
          <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 shadow-lg">
             <span className="text-[#ed8901] font-bold">Our Motto:</span> "Service to Humanity is Service to God."
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container-main">
          
          {/* Trust Identity & Origin */}
          <div className="mb-24 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="flex-1 order-2 lg:order-1">
                <h2 className="text-[36px] font-bold text-[#00123a] mb-8 border-l-4 border-[#ed8901] pl-4 leading-tight">Valmiki Samaj Charitable Trust</h2>
                
                <div className="bg-[#f8f9fa] card-content md:p-8 rounded-2xl border border-gray-100 mb-10 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#ed8901]/10 p-3 rounded-xl text-[#ed8901]"><span className="material-symbols-outlined text-[24px]">receipt_long</span></div>
                      <div>
                        <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wider mb-1">Registration No.</p>
                        <p className="text-[#00123a] font-bold text-[15px]">F/1968/Aravalli</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="bg-[#ed8901]/10 p-3 rounded-xl text-[#ed8901]"><span className="material-symbols-outlined text-[24px]">event</span></div>
                      <div>
                        <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wider mb-1">Established</p>
                        <p className="text-[#00123a] font-bold text-[15px]">24 January 2020</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 sm:col-span-2 mt-2 pt-6 border-t border-gray-200">
                      <div className="bg-[#ed8901]/10 p-3 rounded-xl text-[#ed8901]"><span className="material-symbols-outlined text-[24px]">person_check</span></div>
                      <div>
                        <p className="text-[12px] text-gray-500 font-bold uppercase tracking-wider mb-1">Founder, Coordinator & President</p>
                        <p className="text-[#00123a] font-bold text-xl">Shri Narayanbhai M. Rathod</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 text-[#45464e] text-[17px] leading-relaxed">
                  <p>
                    <strong className="text-[#00123a]">Valmiki Samaj Charitable Trust</strong> is more than just a charitable organization—it is a mission born from compassion, humanity, and the deep pain of witnessing the struggles faced by countless poor, orphaned, widowed, and underprivileged families.
                  </p>
                  <p>
                    Founded on 24 January 2020, the Trust was established with a simple yet powerful belief: <em className="text-[#00123a] font-medium">no person should be denied a life of dignity because of poverty, social discrimination, lack of education, or helpless circumstances.</em>
                  </p>
                  <p>
                    For generations, many families have lived in conditions where poverty has stolen opportunities, where children have been forced to abandon their dreams, where widows have struggled alone for survival, and where countless individuals have endured hardship without support. Behind every statistic is a human story—a hungry child, a grieving mother, an unemployed youth, an elderly person without care, or a family fighting daily battles against poverty and social exclusion.
                  </p>
                  <p className="text-[#ed8901] font-bold text-lg">
                    Valmiki Samaj Charitable Trust was created to stand beside such people—not as spectators to their suffering, but as partners in their journey toward hope, dignity, and self-reliance.
                  </p>
                </div>
              </div>
              
              <div className="lg:w-[450px] shrink-0 order-1 lg:order-2 lg:sticky lg:top-8 w-full">
                <div className="relative group mx-auto max-w-[350px] lg:max-w-none">
                  <div className="absolute inset-0 bg-[#ed8901] rounded-[2rem] transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                  <img alt="Valmiki Samaj Trust Logo" className="w-full h-auto rounded-[2rem] shadow-2xl border-8 border-white relative z-10 bg-white p-8 md:p-12 object-contain aspect-square" src="/logo.jpg" />
                  
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -left-6 bg-[#00123a] text-white card-content rounded-2xl shadow-xl z-20 w-56 hidden md:block border-2 border-white/10 backdrop-blur-md">
                    <p className="font-bold text-4xl text-[#ed8901] mb-1">100%</p>
                    <p className="text-[13px] text-gray-300 font-medium leading-tight">Committed to lasting transformation and empowerment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Commitments */}
          <div className="mb-24 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <div className="text-center mb-16">
              <span className="text-[#ed8901] font-bold tracking-widest uppercase text-sm mb-2 block">Areas of Focus</span>
              <h2 className="text-[36px] font-bold text-[#00123a]">Our Deepest Commitments</h2>
              <div className="w-24 h-1.5 bg-[#ed8901] mx-auto mt-6 rounded-full"></div>
              <p className="max-w-3xl mx-auto text-[#64748B] mt-6 text-[17px] leading-relaxed">
                We believe that charity should not merely provide temporary relief; it should create lasting transformation. Our efforts focus on empowering individuals through targeted humanitarian support and skill development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Card 1 */}
              <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-3xl hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-[#ed8901] group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 text-[#ed8901] group-hover:bg-[#ed8901] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">child_care</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#00123a] mb-4">Nurturing Children</h3>
                <p className="text-[#45464e] leading-relaxed text-[16px]">
                  No child should suffer because of circumstances beyond their control. We work to ensure orphaned, destitute, and disadvantaged children receive education, healthcare, nutrition, and guidance. Our long-term goal includes establishing an orphanage, residential school, sports facilities, and development centers.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-3xl hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-[#ed8901] group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 text-[#ed8901] group-hover:bg-[#ed8901] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">family_restroom</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#00123a] mb-4">Supporting Vulnerable Families</h3>
                <p className="text-[#45464e] leading-relaxed text-[16px]">
                  We are equally committed to supporting widows, elderly individuals, sanitation workers, and laborers. Through food assistance, healthcare, emergency relief, and livelihood opportunities, we strive to restore confidence and hope in the lives of those who need it most.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-3xl hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-[#ed8901] group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 text-[#ed8901] group-hover:bg-[#ed8901] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#00123a] mb-4">Health & Human Dignity</h3>
                <p className="text-[#45464e] leading-relaxed text-[16px]">
                  Health remains at the heart of our mission. No individual should lose their life due to unsafe working conditions, poor sanitation, preventable diseases, or lack of medical care. Through health camps, safety initiatives, and welfare support, we protect community well-being.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#f8f9fa] p-8 md:p-10 rounded-3xl hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 border-t-4 border-transparent hover:border-[#ed8901] group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-8 text-[#ed8901] group-hover:bg-[#ed8901] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">school</span>
                </div>
                <h3 className="text-[24px] font-bold text-[#00123a] mb-4">Empowerment & Growth</h3>
                <p className="text-[#45464e] leading-relaxed text-[16px]">
                  True social change requires empowerment. We promote skill development, vocational training, women's empowerment, self-employment opportunities, and leadership development. Our goal is not simply to help people survive but to help them thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-24 bg-[#00123a] rounded-[2.5rem] p-8 md:p-14 lg:p-16 text-white relative overflow-hidden fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ed8901] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ed8901] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3">
                <h2 className="text-[36px] md:text-[46px] font-bold text-white mb-6 leading-tight">Our Vision for the Future</h2>
                <div className="w-20 h-1.5 bg-[#ed8901] mb-8 rounded-full"></div>
                <p className="text-gray-300 text-[18px] leading-relaxed">
                  Our vision extends beyond addressing immediate needs. We dream of building a society free from fear, discrimination, and deprivation. We envision a future where:
                </p>
              </div>
              
              <div className="lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                  {[
                    "No poor person goes to bed hungry.",
                    "No child is deprived of education because of poverty.",
                    "No widow is left without support and dignity.",
                    "No family is trapped in the cycle of helplessness.",
                    "No young person loses hope due to unemployment.",
                    "No life is endangered by unsafe and degrading working conditions.",
                    "Every individual receives equal opportunities for growth and success."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-[#ed8901]/20 rounded-full p-2 mt-0.5 shrink-0">
                        <span className="material-symbols-outlined text-[#ed8901] text-[18px] font-bold">check</span>
                      </div>
                      <p className="text-gray-100 font-medium text-[16px] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-24 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
            <div className="text-center mb-16">
              <h2 className="text-[36px] font-bold text-[#00123a]">The Foundation of Our Projects</h2>
              <div className="w-24 h-1.5 bg-[#ed8901] mx-auto mt-6 rounded-full mb-6"></div>
              <p className="text-[#64748B] text-[17px] max-w-2xl mx-auto">
                These principles form the foundation of every project we undertake. We ensure every contribution is utilized responsibly and effectively to create meaningful impact.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="bg-[#f8f9fa] p-8 rounded-2xl text-center border-b-4 border-[#ed8901] hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-[#00123a]">visibility</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#00123a]">Transparency</h3>
              </div>
              <div className="bg-[#f8f9fa] p-8 rounded-2xl text-center border-b-4 border-[#ed8901] hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-[#00123a]">fact_check</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#00123a]">Accountability</h3>
              </div>
              <div className="bg-[#f8f9fa] p-8 rounded-2xl text-center border-b-4 border-[#ed8901] hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-[#00123a]">gavel</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#00123a]">Integrity</h3>
              </div>
              <div className="bg-[#f8f9fa] p-8 rounded-2xl text-center border-b-4 border-[#ed8901] hover:-translate-y-2 transition-all duration-300 hover:shadow-xl group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl text-[#00123a]">volunteer_activism</span>
                </div>
                <h3 className="text-[20px] font-bold text-[#00123a]">Compassion</h3>
              </div>
            </div>
          </div>

          {/* Our Promise & Join Us CTA */}
          <div className="bg-[#f8f9fa] rounded-[2.5rem] p-8 md:p-16 border border-gray-100 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 shadow-sm relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ed8901]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00123a]/5 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md mb-8">
                <span className="material-symbols-outlined text-4xl text-[#ed8901]">workspace_premium</span>
              </div>
              <h2 className="text-[36px] font-bold text-[#00123a] mb-8">Our Promise</h2>
              <p className="text-[22px] md:text-[26px] text-[#00123a] leading-relaxed mb-12 italic font-medium px-4">
                "We will continue working until every child can dream without fear, every widow can live with dignity, every family can stand on its own feet, and every human being can experience the respect, opportunity, and hope they deserve."
              </p>
              
              <div className="h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-12"></div>
              
              <h3 className="text-[30px] font-bold text-[#00123a] mb-6">Join Our Journey</h3>
              <p className="text-[#64748B] text-[18px] mb-12 leading-relaxed px-4 md:px-12">
                As we continue our journey, we invite compassionate individuals, volunteers, donors, institutions, and partners to join hands with us. At <strong className="text-[#00123a]">Valmiki Samaj Charitable Trust</strong>, we do not simply serve people—we stand with them, believe in them, and walk beside them until they can confidently build a brighter future for themselves and generations to come.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Link to="/donate" className="bg-[#ed8901] text-white font-bold py-4 px-10 rounded-full hover:bg-[#d67b00] transition-all duration-300 shadow-[0_8px_20px_rgba(237,137,1,0.3)] hover:shadow-[0_12px_25px_rgba(237,137,1,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 text-[16px]">
                  <span className="material-symbols-outlined">volunteer_activism</span> Support Our Cause
                </Link>
                <Link to="/contact" className="bg-white text-[#00123a] font-bold py-4 px-10 rounded-full hover:bg-gray-50 border-2 border-[#00123a]/10 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2 text-[16px]">
                  <span className="material-symbols-outlined">handshake</span> Partner With Us
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutUs;


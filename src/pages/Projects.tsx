import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
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
            Our Projects
          </h1>
          <p className="opacity-90 max-w-3xl mx-auto text-xl md:text-2xl font-medium italic">
            "Every contribution makes a significant impact. Find a cause that resonates with you and help us drive positive change."
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#f8f9fa] fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0" id="goals">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#00123a] mb-4 border-b-2 border-[#ed8901] pb-2 inline-block">Projects Of Valmiki Samaj Charitable Trust</h2>
            <p className="text-[16px] text-[#64748b] max-w-3xl mx-auto mt-4">Our goals are aligned with our vision of creating an equitable, just, and sustainable society. We focus on areas where we can make the most significant impact, ensuring that our efforts bring about real and lasting change.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-basic">
              <img alt="Youth Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Youth Empowerment</h3>
                <p className="text-muted-sm">Equip young people with vocational skills and technical training that enhance their employability and entrepreneurial potential. Foster leadership qualities through workshops.</p>
              </div>
            </div>
            <div className="card-basic">
              <img alt="Women Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Women Empowerment</h3>
                <p className="text-muted-sm">Promote financial independence for women through microfinance initiatives, self-help groups, and entrepreneurship training. Ensure access to education and vocational training.</p>
              </div>
            </div>
            <div className="card-basic">
              <img alt="Rural Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Rural Empowerment</h3>
                <p className="text-muted-sm">Improve agricultural productivity by promoting sustainable farming practices. Enhance rural infrastructure, including access to clean water, sanitation, and reliable electricity.</p>
              </div>
            </div>
            <div className="card-basic">
              <img alt="Environmental Help" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Environmental Help</h3>
                <p className="text-muted-sm">Implement projects that conserve natural resources, protect biodiversity. Promote eco-friendly and sustainable agricultural, industrial, and everyday practices.</p>
              </div>
            </div>
            <div className="card-basic">
              <img alt="Education Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Education Empowerment</h3>
                <p className="text-muted-sm">Ensure that every child has access to quality education by building schools, offering scholarships. Enhance the quality of education through teacher training programs.</p>
              </div>
            </div>
            <div className="card-basic">
              <img alt="Health Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Health Empowerment</h3>
                <p className="text-muted-sm">Provide access to essential healthcare services through health camps and mobile clinics. Conduct health education campaigns focused on preventive healthcare.</p>
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

export default Projects;

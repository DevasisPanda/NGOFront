import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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
    <div className="flex-grow bg-[#f8f9fa] pb-20">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 bg-[#00123a] text-white overflow-hidden" id="home">
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center transition-all duration-1000 ease-in-out" 
          style={{ backgroundImage: `url("${heroImages[currentImageIndex]}")` }}
        />
        <div className="relative z-10 container-main text-center py-20">
          <h1 className="text-[48px] md:text-[64px] font-extrabold mb-6 leading-tight tracking-tight text-white">
            Serving Humanity <br />
            <span className="text-[#ed8901]">with Compassion</span>
          </h1>
          <p className="text-[18px] max-w-2xl mx-auto mb-10 text-white/90">
            From food distribution to health support — we extend care to those in need, ensuring every individual lives with dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/donate" className="bg-[#ed8901] text-[#00123a] px-8 py-4 rounded-full font-bold text-[14px] hover:opacity-90 transition-transform hover:-translate-y-1 active:scale-95 duration-200 w-full sm:w-auto text-center shadow-md">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links & About Section */}
      <section className="py-20 container-main fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quick Links Grid */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-[24px] font-bold text-[#ed8901] mb-6 border-b-2 border-[#00123a] pb-2 inline-block">Quick Links</h2>
            <Link to="#" className="flex items-center justify-between bg-white p-4 rounded hover:bg-[#e2e2e2] transition-colors border-l-4 border-[#ed8901] shadow-sm">
              <span className="font-bold text-[14px] text-[#00123a]">Generate ID Card</span>
              <span className="material-symbols-outlined text-[#ed8901]">arrow_forward</span>
            </Link>
            <Link to="#" className="flex items-center justify-between bg-white p-4 rounded hover:bg-[#e2e2e2] transition-colors border-l-4 border-[#ed8901] shadow-sm">
              <span className="font-bold text-[14px] text-[#00123a]">Appointment Letter</span>
              <span className="material-symbols-outlined text-[#ed8901]">arrow_forward</span>
            </Link>
            <Link to="#" className="flex items-center justify-between bg-white p-4 rounded hover:bg-[#e2e2e2] transition-colors border-l-4 border-[#ed8901] shadow-sm">
              <span className="font-bold text-[14px] text-[#00123a]">Generate Certificate</span>
              <span className="material-symbols-outlined text-[#ed8901]">arrow_forward</span>
            </Link>
            <Link to="/donate" className="flex items-center justify-between bg-white p-4 rounded hover:bg-[#e2e2e2] transition-colors border-l-4 border-[#ed8901] shadow-sm">
              <span className="font-bold text-[14px] text-[#00123a]">Donate Us</span>
              <span className="material-symbols-outlined text-[#ed8901]">arrow_forward</span>
            </Link>
          </div>
          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-[32px] font-bold text-[#ed8901] mb-4 border-b-2 border-[#00123a] pb-2 inline-block">About Valmiki Samaj Charitable Trust</h2>
            <p className="text-body">
              Valmiki Samaj Charitable Trust is a beacon of hope and transformation, inspired by the divine teachings of Lord ShriRam. Our mission is to create a harmonious society where cultural values, spiritual growth, and community service thrive hand-in-hand. With unwavering dedication, we strive to preserve our rich heritage, uplift the underprivileged, and inspire individuals to lead lives filled with compassion, purpose, and integrity. Through our collective efforts, we aim to bring a "Navyug" (a new era) where every individual contributes to a more vibrant, united, and prosperous society.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 bg-[#00123a] text-white px-6 py-3 rounded hover:opacity-90 transition-colors font-bold text-[14px]">
              <span className="material-symbols-outlined">info</span> Know More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-white fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0" id="goals">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#ed8901] mb-4 border-b-2 border-[#00123a] pb-2 inline-block">Goals Of Valmiki Samaj Charitable Trust</h2>
            <p className="text-[16px] text-[#64748b] max-w-3xl mx-auto mt-4">Our goals are aligned with our vision of creating an equitable, just, and sustainable society. We focus on areas where we can make the most significant impact, ensuring that our efforts bring about real and lasting change.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] rounded-xl shadow-sm border border-[#e2e2e2] hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <img alt="Youth Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Youth Empowerment</h3>
                <p className="text-muted-sm">Equip young people with vocational skills and technical training that enhance their employability and entrepreneurial potential. Foster leadership qualities through workshops.</p>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow-sm border border-[#e2e2e2] hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <img alt="Women Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Women Empowerment</h3>
                <p className="text-muted-sm">Promote financial independence for women through microfinance initiatives, self-help groups, and entrepreneurship training. Ensure access to education and vocational training.</p>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow-sm border border-[#e2e2e2] hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <img alt="Rural Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Rural Empowerment</h3>
                <p className="text-muted-sm">Improve agricultural productivity by promoting sustainable farming practices. Enhance rural infrastructure, including access to clean water, sanitation, and reliable electricity.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/programs" className="inline-block bg-white text-[#00123a] border border-[#00123a] px-8 py-3 rounded-full font-bold hover:bg-[#f3f3f4] transition-colors">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Organization Members Teaser */}
      <section className="py-20 container-main fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0" id="members">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-bold text-[#ed8901] mb-4 border-b-2 border-[#00123a] pb-2 inline-block">Organization Members</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#ed8901] text-center">
            <div className="w-16 h-16 bg-[#ed8901]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#ed8901]">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="text-[24px] font-bold text-[#00123a] mb-4">Management Body</h3>
            <p className="text-[16px] text-[#64748b] mb-6">Explore the members of our Management Committee who lead and support the mission of the organization.</p>
            <Link to="#" className="bg-[#00123a] text-white px-6 py-2 rounded-full font-bold text-[14px] hover:opacity-90 transition-colors inline-block">See Management Body</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#ed8901] text-center">
            <div className="w-16 h-16 bg-[#ed8901]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#ed8901]">
              <span className="material-symbols-outlined text-3xl">people</span>
            </div>
            <h3 className="text-[24px] font-bold text-[#00123a] mb-4">General Members</h3>
            <p className="text-[16px] text-[#64748b] mb-6">Discover the dedicated members who strengthen our initiatives &amp; contribute to the growth &amp; success of the organization.</p>
            <Link to="#" className="bg-[#00123a] text-white px-6 py-2 rounded-full font-bold text-[14px] hover:opacity-90 transition-colors inline-block">See General Members</Link>
          </div>
        </div>
      </section>

      {/* Donate For Smile / Campaigns */}
      <section className="py-20 bg-white fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0" id="donate">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#ed8901] mb-4 border-b-2 border-[#00123a] pb-2 inline-block">Donate For Smile</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f8f9fa] rounded-xl shadow-md border border-[#e2e2e2] overflow-hidden flex flex-col">
              <div className="h-40 bg-[#ed8901]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-[#ed8901]">volunteer_activism</span>
              </div>
              <div className="card-content flex-1 flex flex-col">
                <h3 className="card-title-bold">💖 Support a Woman’s Future</h3>
                <p className="text-muted-sm mb-6 flex-1">Your small contribution can help a woman gain independence and build a dignified life.</p>
                <Link to="/donate" className="bg-[#ed8901] text-[#00123a] text-center py-2 rounded font-bold text-[14px] hover:opacity-90 transition-colors">Donate Now</Link>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow-md border border-[#e2e2e2] overflow-hidden flex flex-col">
              <div className="h-40 bg-[#ed8901]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-[#ed8901]">nature_people</span>
              </div>
              <div className="card-content flex-1 flex flex-col">
                <h3 className="card-title-bold">🌱 Empower Rural Lives</h3>
                <p className="text-muted-sm mb-6 flex-1">Donate today to bring education, resources, and hope to underprivileged rural families.</p>
                <Link to="/donate" className="bg-[#ed8901] text-[#00123a] text-center py-2 rounded font-bold text-[14px] hover:opacity-90 transition-colors">Donate Now</Link>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow-md border border-[#e2e2e2] overflow-hidden flex flex-col">
              <div className="h-40 bg-[#ed8901]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-[#ed8901]">cast_for_education</span>
              </div>
              <div className="card-content flex-1 flex flex-col">
                <h3 className="card-title-bold">🎓 Educate a Child, Brighten a Nation</h3>
                <p className="text-muted-sm mb-6 flex-1">Your support can turn a child’s dream into reality through education and care.</p>
                <Link to="/donate" className="bg-[#ed8901] text-[#00123a] text-center py-2 rounded font-bold text-[14px] hover:opacity-90 transition-colors">Donate Now</Link>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow-md border border-[#e2e2e2] overflow-hidden flex flex-col">
              <div className="h-40 bg-[#ed8901]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-[#ed8901]">monitor_heart</span>
              </div>
              <div className="card-content flex-1 flex flex-col">
                <h3 className="card-title-bold">❤️ Give the Gift of Good Health</h3>
                <p className="text-muted-sm mb-6 flex-1">Your donation can ensure timely medical help and a healthy life for those in need.</p>
                <Link to="/donate" className="bg-[#ed8901] text-[#00123a] text-center py-2 rounded font-bold text-[14px] hover:opacity-90 transition-colors">Donate Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
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

export default Home;

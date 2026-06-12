import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomepageImg from '../assets/Homepage.jpeg';
import Dream_ProjectImg from '../assets/Dream_Project.jpeg';
import Wings_of_HopeImg from '../assets/Wings.jpeg';

const Home: React.FC = () => {

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
      <section className="relative w-full flex items-center justify-center fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 bg-white overflow-hidden" id="home">
        <img 
          src={HomepageImg} 
          alt="Valmiki Samaj Charitable Trust" 
          className="w-full h-auto object-cover max-h-[80vh]"
        />
        <div className="absolute bottom-1 left-0 w-full z-10 flex justify-center">
          <Link to="/donate" className="bg-[#ed8901] text-[#00123a] px-10 py-4 rounded-full font-bold text-[16px] hover:bg-[#d67b00] hover:scale-105 transition-all duration-200 shadow-xl border-2 border-white/20">
            Donate Now
          </Link>
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
              Valmiki Samaj Charitable Trust is dedicated to serving humanity through education, social welfare, and community development. Inspired by the teachings of His Holiness Pramukh Swami Maharaj, the Trust supports poor, orphaned, and underprivileged individuals with dignity and compassion. It promotes quality education, helps school dropouts return to learning, and encourages higher studies. The Trust also provides shelter, healthcare, and value-based upbringing for orphaned children. Through community marriage initiatives and self-employment support, it empowers economically disadvantaged women to become independent. With service, values, and dedication at its core, the Trust works for the welfare, unity, and progress of society.
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
              <img alt="Youth Empowerment" className="card-img" src={Dream_ProjectImg} />
              <div className="card-content">
                <h3 className="card-title">Dream Project</h3>
                <p className="text-muted-sm">Paradise Child Home, Modasa is the dream project of Valmiki Samaj Charitable Trust, dedicated to providing orphaned and vulnerable children with a safe home, quality education, healthcare, and holistic development in a world-class environment.
Its mission is to empower every child with protection, dignity, life skills, and equal opportunities to build a bright, independent, and successful future.</p>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow-sm border border-[#e2e2e2] hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <img alt="Women Empowerment" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content">
                <h3 className="card-title">Celebration</h3>
                <p className="text-muted-sm">Celebrate your special occasions by bringing joy to 500 orphaned and underprivileged children at Paradise Child Home, Modasa, through meaningful support and acts of kindness.
Turn your happiness into hope by sponsoring their meals, education, and care, creating lasting smiles and a brighter future for every child.</p>
              </div>
            </div>
            <div className="bg-[#f8f9fa] rounded-xl shadow-sm border border-[#e2e2e2] hover:shadow-md transition-shadow overflow-hidden flex flex-col">
              <img alt="Rural Empowerment" className="card-img" src={Wings_of_HopeImg} />
              <div className="card-content">
                <h3 className="card-title">Wings of Hope</h3>
                <p className="text-muted-sm">Wings of Hope empowers orphaned and underprivileged children through education, mentorship, healthcare, and emotional support, helping them achieve their dreams with confidence and dignity.
Every contribution gives a child the opportunity to learn, grow, and build a brighter, self-reliant future filled with hope and possibilities.</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/events" className="inline-block bg-white text-[#00123a] border border-[#00123a] px-8 py-3 rounded-full font-bold hover:bg-[#f3f3f4] transition-colors">
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
            <Link to="/management-body" className="bg-[#00123a] text-white px-6 py-2 rounded-full font-bold text-[14px] hover:opacity-90 transition-colors inline-block">See Management Body</Link>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#ed8901] text-center">
            <div className="w-16 h-16 bg-[#ed8901]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[#ed8901]">
              <span className="material-symbols-outlined text-3xl">people</span>
            </div>
            <h3 className="text-[24px] font-bold text-[#00123a] mb-4">General Members</h3>
            <p className="text-[16px] text-[#64748b] mb-6">Discover the dedicated members who strengthen our initiatives &amp; contribute to the growth &amp; success of the organization.</p>
            <Link to="/general-members" className="bg-[#00123a] text-white px-6 py-2 rounded-full font-bold text-[14px] hover:opacity-90 transition-colors inline-block">See General Members</Link>
          </div>
        </div>
      </section>

      {/* Donate For Smile / Campaigns */}
      <section className="py-20 bg-white fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0" id="donate">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-[32px] font-bold text-[#ed8901] mb-4 border-b-2 border-[#00123a] pb-2 inline-block">Donate For Smile</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f8f9fa] rounded-xl shadow-md border border-[#e2e2e2] overflow-hidden flex flex-col">
              <img alt="Dream Project" className="card-img" src={Dream_ProjectImg} />
              <div className="card-content flex-1 flex flex-col">
                <h3 className="card-title-bold text-[20px]">Dream Project</h3>
                <p className="text-muted-sm mb-6 flex-1">Empower orphaned and vulnerable children at Paradise Child Home with a safe home, quality education, and holistic development for a bright future.</p>
                <Link to="/donate" className="bg-[#ed8901] text-[#00123a] text-center py-3 rounded font-bold text-[14px] hover:bg-[#d67b00] transition-colors">Donate Now</Link>
              </div>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-xl shadow-md border border-[#e2e2e2] overflow-hidden flex flex-col">
              <img alt="Celebration" className="card-img" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
              <div className="card-content flex-1 flex flex-col">
                <h3 className="card-title-bold text-[20px]">Celebration</h3>
                <p className="text-muted-sm mb-6 flex-1">Bring joy to underprivileged children on your special occasions. Sponsor meals, education, and care to turn your happiness into hope and lasting smiles.</p>
                <Link to="/donate" className="bg-[#ed8901] text-[#00123a] text-center py-3 rounded font-bold text-[14px] hover:bg-[#d67b00] transition-colors">Donate Now</Link>
              </div>
            </div>
            
            <div className="bg-[#f8f9fa] rounded-xl shadow-md border border-[#e2e2e2] overflow-hidden flex flex-col">
              <img alt="Wings of Hope" className="card-img" src={Wings_of_HopeImg} />
              <div className="card-content flex-1 flex flex-col">
                <h3 className="card-title-bold text-[20px]">Wings of Hope</h3>
                <p className="text-muted-sm mb-6 flex-1">Give children the opportunity to learn and grow. Empower them through education, mentorship, and healthcare to achieve their dreams with dignity.</p>
                <Link to="/donate" className="bg-[#ed8901] text-[#00123a] text-center py-3 rounded font-bold text-[14px] hover:bg-[#d67b00] transition-colors">Donate Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-[#00123a] py-12 fade-in-section opacity-0 translate-y-5 transition-all duration-800 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
        <div className="container-main text-center flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-[32px] font-bold text-white mb-4 md:mb-0">Every child deserves a safe home !</h2>
          <Link to="/contact" className="bg-[#ed8901] text-[#00123a] px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            <span className="material-symbols-outlined">mail</span> Contact Us Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Mission: React.FC = () => {
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
    <div className="page-section fade-in-section" id="mission">
      <section className="bg-[#00123a] text-white py-16 mb-12">
        <div className="container-main text-center">
          <h1 className="text-[#ed8901] mb-4 text-4xl md:text-6xl font-bold">Mission/Vision</h1>
          <p className="opacity-90 max-w-2xl mx-auto text-xl">Glimpses of our mission in action, showcasing our impact and the communities we serve.</p>
        </div>
      </section>
      <div className="container-main">
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission Card */}
          <div className="border-2 border-[#061941] rounded-xl p-5 sm:p-8 flex flex-col items-center bg-white">
            <div className="bg-[#FF9933] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined icon-white-lg">send</span>
            </div>
            <h2 className="text-[#061941] text-3xl font-bold tracking-widest mb-8">MISSION</h2>
            <ul className="space-y-4 w-full text-lg text-[#1a1c1c]">
              <li className="flex gap-3"><span className="">🌍</span> To build a socially responsible and spiritually enriched society</li>
              <li className="flex gap-3"><span className="">✨</span> To inspire individuals through the teachings of Lord Shri Ram</li>
              <li className="flex gap-3"><span className="">📚</span> To promote education, awareness, and skill development for all</li>
              <li className="flex gap-3"><span className="">🤝</span> To support underprivileged communities with care and dignity</li>
              <li className="flex gap-3"><span className="">❤️</span> To spread compassion, humanity, and positive transformation</li>
              <li className="flex gap-3"><span className="">🛡️</span> To protect and promote India’s cultural and spiritual heritage</li>
            </ul>
          </div>
          
          {/* Vision Card */}
          <div className="border-2 border-[#061941] rounded-xl p-5 sm:p-8 flex flex-col items-center bg-white">
            <div className="bg-[#FF9933] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined icon-white-lg">visibility</span>
            </div>
            <h2 className="text-[#061941] text-3xl font-bold tracking-widest mb-8">VISION</h2>
            <ul className="space-y-4 w-full text-lg text-[#1a1c1c]">
              <li className="flex gap-3"><span className="">🌈</span> A world where every individual lives with purpose, respect, and values</li>
              <li className="flex gap-3"><span className="">🕊️</span> A compassionate society rooted in peace, harmony, and unity</li>
              <li className="flex gap-3"><span className="">🚀</span> Empowered youth taking the lead in nation-building</li>
              <li className="flex gap-3"><span className="">🏛️</span> Preservation of India’s timeless culture for future generations</li>
              <li className="flex gap-3"><span className="">🤗</span> Communities supporting each other with love and togetherness</li>
              <li className="flex gap-3"><span className="">💫</span> A better tomorrow — guided by devotion, ethics, and service</li>
            </ul>
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

export default Mission;

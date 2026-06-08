import React, { useEffect } from 'react';

const Gallery: React.FC = () => {
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
    <div className="page-section fade-in-section" id="gallery">
      <div className="container-main">
        <section className="bg-[#00123a] text-white py-16 mb-12">
          <div className="container-main text-center">
            <h1 className="text-[#ed8901] mb-4 text-6xl font-bold">Our Gallery</h1>
            <p className="opacity-90 max-w-2xl mx-auto text-xl">Glimpses of our mission in action, showcasing our impact and the communities we serve.</p>
          </div>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-sm relative group">
            <img alt="Gallery Activity" className="w-full h-full object-cover aspect-[1.47] group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
          </div>
          <div className="col-span-2 rounded-xl overflow-hidden shadow-sm relative group">
            <img alt="Gallery Activity" className="w-full h-full object-cover aspect-[1.79] group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm relative group">
            <img alt="Gallery Activity" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-sm relative group">
            <img alt="Gallery Activity" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" />
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <a className="flex items-center gap-2 bg-[#ed8901] text-[#00123a] px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity" href="#">
            <span className="material-symbols-outlined">collections</span> See More Images
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

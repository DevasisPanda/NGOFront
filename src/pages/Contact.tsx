import React, { useEffect } from 'react';

const Contact: React.FC = () => {
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
    <div className="page-section fade-in-section" id="contact">
      {/* Contact Info Cards */}
      <section className="bg-white pt-20">
        <div className="container-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border-2 border-[#00123a] rounded-xl p-8 flex flex-col items-center text-center group hover:bg-[#f3f3f4] transition-colors">
            <div className="bg-[#ed8901] w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined icon-white-lg">location_on</span>
            </div>
            <h3 className="text-[#00123a] text-2xl font-bold mb-2">Address</h3>
            <p className="text-[#45464e] font-medium text-base">Head Office :- President Narayan Rathod  Ramji mandir Road, Nr. Police Station At & Post Tintoi - 383250, Tal:- Modasa Dist. Aravalli North Gujrat</p>
          </div>
          <div className="border-2 border-[#00123a] rounded-xl p-8 flex flex-col items-center text-center group hover:bg-[#f3f3f4] transition-colors">
            <div className="bg-[#ed8901] w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined icon-white-lg">call</span>
            </div>
            <h3 className="text-[#00123a] text-2xl font-bold mb-2">Call Us</h3>
            <p className="text-[#45464e] font-medium text-base">+91 82003 15792</p>
          </div>
          <div className="border-2 border-[#00123a] rounded-xl p-8 flex flex-col items-center text-center group hover:bg-[#f3f3f4] transition-colors">
            <div className="bg-[#ed8901] w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined icon-white-lg">chat</span>
            </div>
            <h3 className="text-[#00123a] text-2xl font-bold mb-2">WhatsApp</h3>
            <p className="text-[#45464e] font-medium text-base">+91 82003 15792</p>
          </div>
          <div className="border-2 border-[#00123a] rounded-xl p-8 flex flex-col items-center text-center group hover:bg-[#f3f3f4] transition-colors">
            <div className="bg-[#ed8901] w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined icon-white-lg">mail</span>
            </div>
            <h3 className="text-[#00123a] text-2xl font-bold mb-2">Email Us</h3>
            <p className="text-[#45464e] font-medium text-base break-all">valmikisamajtrust@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Map and Enquiry Form Section */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Map */}
            <div className="flex flex-col">
              <div className="bg-[#ed8901] px-6 py-4 rounded-t-xl">
                <h2 className="text-[#00123a] text-2xl font-extrabold tracking-wide text-center">Contact Us</h2>
              </div>
              <div className="border-2 border-t-0 border-[#e2e2e2] rounded-b-xl overflow-hidden shadow-sm h-[600px]">
                <iframe allowFullScreen className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.33230626354!2d80.87114175317663!3d26.848596482161676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"></iframe>
              </div>
            </div>
            {/* Right Column: Enquiry Form */}
            <div className="bg-white border-2 border-[#e2e2e2] rounded-xl p-8 shadow-sm">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#00123a] text-3xl">contact_support</span>
                <h2 className="text-[#00123a] text-3xl font-bold">Contact Us</h2>
              </div>
              <div className="text-center mb-8">
                <p className="text-[#45464e] font-bold text-lg mb-1">संस्था में पूछताछ करने के लिए नीचे दिया गया Enquiry Form भरें।</p>
                <p className="text-[#64748B] font-medium">For enquiries, please fill out the form below.</p>
              </div>
              <form action="#" className="space-y-6">
                <div className="space-y-1">
                  <label className="form-label" htmlFor="fullname">Full Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]">person</span>
                    <input className="w-full pl-10 pr-4 py-3 border-2 border-[#e2e2e2] rounded-lg focus:border-[#ed8901] focus:ring-0 outline-none transition-colors" id="fullname" placeholder="Enter your full name" type="text" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]">mail</span>
                    <input className="w-full pl-10 pr-4 py-3 border-2 border-[#e2e2e2] rounded-lg focus:border-[#ed8901] focus:ring-0 outline-none transition-colors" id="email" placeholder="Enter your email address" type="email" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]">call</span>
                    <input className="w-full pl-10 pr-4 py-3 border-2 border-[#e2e2e2] rounded-lg focus:border-[#ed8901] focus:ring-0 outline-none transition-colors" id="phone" placeholder="Enter your phone number" type="tel" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]">label</span>
                    <input className="w-full pl-10 pr-4 py-3 border-2 border-[#e2e2e2] rounded-lg focus:border-[#ed8901] focus:ring-0 outline-none transition-colors" id="subject" placeholder="Enter subject" type="text" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="form-label" htmlFor="message">Your Message</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-4 text-[#64748B]">chat_bubble</span>
                    <textarea className="w-full pl-10 pr-4 py-3 border-2 border-[#e2e2e2] rounded-lg focus:border-[#ed8901] focus:ring-0 outline-none transition-colors h-32" id="message" placeholder="Type your message here..."></textarea>
                  </div>
                </div>
                <button className="w-full bg-[#00123a] text-white py-4 rounded-lg font-bold text-lg hover:bg-black transition-all shadow-md flex items-center justify-center gap-2 group" type="submit">
                  Send Message <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

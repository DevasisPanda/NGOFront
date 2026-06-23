import React from 'react';
import { trpc } from '../lib/trpc';
const staticCertificates = [
  { name: "Registration Certificate", imageUrl: "https://res.cloudinary.com/dxmovdiru/image/upload/v1781614777/ngo-management/certifications/nmiy3jwfewhywgydk7yg.jpg", description: "" },
  { name: "80G", imageUrl: "https://res.cloudinary.com/dxmovdiru/image/upload/v1781614779/ngo-management/certifications/lmwl1sitjjgyzjfxvytb.jpg", description: "" },
  { name: "12A", imageUrl: "https://res.cloudinary.com/dxmovdiru/image/upload/v1781621765/ngo-management/Cer1_34d3ab3e.jpg", description: "" },
  { name: "CSR Registration", imageUrl: "https://res.cloudinary.com/dxmovdiru/image/upload/v1781614783/ngo-management/certifications/bti7eoijve9otpfjn7zz.jpg", description: "" },
  { name: "NGO Drapan", imageUrl: "https://res.cloudinary.com/dxmovdiru/image/upload/v1781614784/ngo-management/certifications/mlfgupo83nc37ojjavjc.jpg", description: "" },
  { name: "TAN Number", imageUrl: "https://res.cloudinary.com/dxmovdiru/image/upload/v1781614785/ngo-management/certifications/w2uyxs9vc9hicbqu5csy.jpg", description: "" }
];

const Certifications: React.FC = () => {
  const { data: dynamicCertificates, isLoading } = trpc.document.getOrgCertificates.useQuery(undefined, {
    staleTime: 5 * 60 * 1000, // 5 minutes cache
    refetchOnWindowFocus: false,
  });

  const displayCertificates = dynamicCertificates && dynamicCertificates.length > 0 
    ? dynamicCertificates 
    : staticCertificates;

  return (
    <div className="flex-grow bg-[#f8f9fa] pb-20">
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-main text-center relative z-10">
          <h1 className="text-secondary text-5xl md:text-6xl font-extrabold tracking-tight">Certifications</h1>
        </div>
      </section>
      
      <section className="py-16 container-main max-w-6xl mx-auto px-4">
        {isLoading ? (
          <div className="text-center py-20 text-gray-500 font-semibold">Loading certificates...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayCertificates.map((cert: any) => (
              <div 
                key={cert.id || cert.name} 
                className="rounded-xl border border-gray-300 overflow-hidden flex flex-col bg-white shadow-lg transition-transform hover:scale-[1.02] relative group"
                style={{ minHeight: '350px' }}
              >
                {/* Gradient Header - Similar to the user's reference mockup */}
                <div className="bg-gradient-to-r from-[#e67e22] to-[#1e293b] p-4 text-center text-white font-bold text-lg md:text-xl shadow-sm">
                  {cert.name}
                </div>
                
                {/* Box Body containing the image */}
                <div className="flex-1 p-4 flex flex-col items-center justify-center bg-gray-50 relative">
                  {cert.imageUrl ? (
                    <img 
                      src={cert.imageUrl} 
                      alt={`${cert.name} Image`} 
                      className="w-full h-full object-contain max-h-[280px]"
                    />
                  ) : (
                    <div className="text-gray-400 italic">Image not available</div>
                  )}

                  {cert.description && (
                    <div className="absolute inset-0 bg-[#1e293b]/95 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center text-sm leading-relaxed overflow-y-auto">
                      {cert.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Certifications;

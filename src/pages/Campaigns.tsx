import React from 'react';
import { trpc } from '../lib/trpc';
import { useNavigate } from 'react-router-dom';

const Campaigns: React.FC = () => {
  const { data: campaigns, isLoading } = trpc.campaign.getActive.useQuery();
  const navigate = useNavigate();

  return (
    <div className="flex-grow bg-[#f8f9fa] pb-20">
<<<<<<< HEAD
      <section className="bg-[#00123a] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-main text-center relative z-10 px-4">
          <h1 className="text-[#ed8901] mb-6 text-5xl md:text-6xl font-extrabold tracking-tight">Active Campaigns</h1>
          <p className="opacity-90 max-w-2xl mx-auto text-xl font-medium">
=======
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-main text-center relative z-10 px-4">
          <h1 className="text-secondary mb-6 text-5xl md:text-6xl font-extrabold tracking-tight">Active Campaigns</h1>
          <p className="text-white opacity-90 max-w-2xl mx-auto text-xl font-medium">
>>>>>>> e8b91e6 (first commit)
            Your contributions help us change lives. Explore our active funding campaigns below.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto min-h-[40vh]">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
<<<<<<< HEAD
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00123a]"></div>
=======
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
>>>>>>> e8b91e6 (first commit)
          </div>
        ) : campaigns && campaigns.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((campaign) => {
              const goalAmount = parseFloat(campaign.goalAmount as string) || 0;
              const raisedAmount = parseFloat(campaign.raisedAmount as string) || 0;
              const percentage = goalAmount > 0 ? Math.min((raisedAmount / goalAmount) * 100, 100) : 0;

              return (
                <div key={campaign.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col">
                  <div className="bg-gray-100 h-48 w-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-gray-300">volunteer_activism</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
<<<<<<< HEAD
                    <h3 className="text-xl font-bold text-[#00123a] mb-2">{campaign.title}</h3>
=======
                    <h3 className="text-xl font-bold text-primary mb-2">{campaign.title}</h3>
>>>>>>> e8b91e6 (first commit)
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{campaign.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm font-medium">
<<<<<<< HEAD
                        <span className="text-[#ed8901]">₹{raisedAmount.toLocaleString()} raised</span>
                        <span className="text-gray-500">Goal: ₹{goalAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-[#ed8901] h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
=======
                        <span className="text-secondary">₹{raisedAmount.toLocaleString()} raised</span>
                        <span className="text-gray-500">Goal: ₹{goalAmount.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-secondary h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
>>>>>>> e8b91e6 (first commit)
                      </div>
                      <p className="text-xs text-gray-500 text-right">{percentage.toFixed(0)}% Funded</p>
                    </div>

                    <button 
<<<<<<< HEAD
                      onClick={() => navigate('/donation')}
                      className="w-full bg-[#00123a] text-white font-bold py-3 rounded-lg hover:bg-[#001b54] transition-colors mt-auto"
=======
                      onClick={() => navigate('/donate', { state: { campaignId: campaign.id } })}
                      className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-[#001b54] transition-colors mt-auto"
>>>>>>> e8b91e6 (first commit)
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
            <span className="material-symbols-outlined text-5xl text-gray-400 mb-4">healing</span>
            <h3 className="text-xl font-bold text-gray-800">No Active Campaigns</h3>
            <p className="text-gray-500 mt-2">All our goals have been met! Please check back later.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Campaigns;

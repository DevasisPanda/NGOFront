import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { trpc } from '../lib/trpc';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data: project, isLoading, error } = trpc.project.getById.useQuery(
    { id: projectId || 0 },
    { enabled: !!projectId }
  );

  if (!projectId) {
    return <Navigate to="/projects" replace />;
  }

  if (isLoading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="w-12 h-12 border-4 border-t-secondary border-r-slate-200 border-b-slate-200 border-l-slate-200 rounded-full animate-spin mb-4"></div>
        <p className="text-slate-500 font-semibold text-sm">Loading project details...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-gray-50 text-center">
        <span className="material-symbols-outlined text-red-500 text-6xl mb-4">error</span>
        <h2 className="text-2xl font-bold text-primary mb-2">Project Not Found</h2>
        <p className="text-gray-500 mb-6 max-w-md">
          The project you are looking for might have been deleted, draft-restricted, or doesn't exist.
        </p>
        <Link to="/projects" className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header with Background */}
      <section className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-main relative z-10 flex items-center px-4">
          <Link to="/projects" className="flex items-center text-secondary hover:text-white transition-colors font-bold">
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Main Content Area: 65% / 35% Split Layout */}
      <div className="container-main py-12 px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image & Content (65%) */}
          <div className="w-full lg:w-[65%] space-y-6">
            <div className="border-b border-gray-100 pb-6">
              <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                project.status === 'active' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : project.status === 'completed' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                <span className="w-2 h-2 rounded-full mr-2 bg-current animate-pulse"></span>
                {project.status} Project
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight mt-4 mb-3">
                {project.title}
              </h1>
              <p className="text-sm text-gray-400 font-mono flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Published: {new Date(project.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Proportional Project Image container */}
            <div className="w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-white relative group">
              <img 
                src={project.image || 'https://via.placeholder.com/800x600?text=No+Image'} 
                alt={project.title} 
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Project description rendered fully inline (no scrollable modal required) */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2 pb-3 border-b border-gray-100">
                <span className="material-symbols-outlined text-secondary">description</span>
                Project Description & Vision
              </h3>
              <div className="text-gray-700 text-[16px] md:text-[17px] leading-relaxed whitespace-pre-wrap">
                {project.description}
              </div>
            </div>
          </div>

          {/* Right Column: Donation & Details Sidebar (35%) */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-8 self-start space-y-6">
            
            {/* Donation Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
              
              <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary fill-current">favorite</span>
                Support This Project
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                Your contributions bring immediate relief, education support, healthcare, and resources directly to this project's beneficiaries.
              </p>

              <div className="space-y-4">
                <Link 
                  to="/donate" 
                  className="w-full bg-secondary text-primary font-extrabold py-4 px-6 rounded-full shadow-sm hover:shadow-md hover:brightness-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center text-sm uppercase tracking-wider cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px] fill-current">volunteer_activism</span>
                  Donate Now
                </Link>
                
                <Link 
                  to="/contact" 
                  className="w-full bg-primary text-white font-extrabold py-4 px-6 rounded-full shadow-sm hover:bg-primary/95 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center text-sm uppercase tracking-wider cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  Contact / Join Campaign
                </Link>
              </div>
            </div>

            {/* Quick Details Box */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">info</span>
                Information
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-secondary bg-gray-50 p-2 rounded-xl text-[20px] shrink-0">
                    check_circle
                  </span>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Project Status</span>
                    <span className="text-[14px] text-primary font-semibold leading-tight capitalize">{project.status}</span>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-secondary bg-gray-50 p-2 rounded-xl text-[20px] shrink-0">
                    schedule
                  </span>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Date Published</span>
                    <span className="text-[14px] text-primary font-semibold leading-tight">
                      {new Date(project.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <span className="material-symbols-outlined text-secondary bg-gray-50 p-2 rounded-xl text-[20px] shrink-0">
                    corporate_fare
                  </span>
                  <div>
                    <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Organization</span>
                    <span className="text-[14px] text-primary font-semibold leading-tight">Valmiki Samaj Trust</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

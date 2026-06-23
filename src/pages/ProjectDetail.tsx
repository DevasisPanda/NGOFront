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
        <div className="w-12 h-12 border-4 border-t-orange-500 border-r-slate-200 border-b-slate-200 border-l-slate-200 rounded-full animate-spin mb-4"></div>
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
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        <div className="container-main relative z-10 flex items-center gap-4">
          <Link to="/projects" className="flex items-center text-secondary hover:text-white transition-colors font-semibold">
            <span className="material-symbols-outlined mr-2">arrow_back</span>
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Profile Content */}
      <div className="container-main -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Image */}
          <div className="lg:w-[40%] relative min-h-[350px] lg:min-h-[500px] bg-primary flex items-stretch">
            <img 
              src={project.image || 'https://via.placeholder.com/800x600?text=No+Image'} 
              alt={project.title} 
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent opacity-85 lg:opacity-75"></div>
          </div>

          {/* Right Column: Details */}
          <div className="lg:w-[60%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                project.status === 'active' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : project.status === 'completed' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}>
                <span className="w-2 h-2 rounded-full mr-2 bg-current"></span>
                {project.status} Project
              </span>
              <h1 className="text-[32px] md:text-[40px] font-bold text-primary leading-tight mt-4 mb-3">
                {project.title}
              </h1>
              <p className="text-[14px] text-gray-400 font-mono flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Published: {new Date(project.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-[20px] font-bold text-primary mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary font-semibold">info</span> Project Overview
              </h3>
              <p className="text-gray-700 text-[18px] leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              <Link to="/donate" className="bg-secondary text-primary font-extrabold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:brightness-105 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] fill-current">favorite</span> Support This Project
              </Link>
              <Link to="/contact" className="bg-primary text-white font-extrabold px-8 py-4 rounded-full shadow-md hover:bg-primary/95 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">mail</span> Contact Us / Join In
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

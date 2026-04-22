'use client';

import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Code, Calendar, User, ArrowRight } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { projects } from '../projects.data';

const ProjectDetail: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params as { id: string };
  const project = projects.find(p => p.id === id);

  if (!project) {
  return (
    <div className="py-20 text-center">
      <p>Project not found</p>
      <Link href="/projects" className="text-accent-500">Back to projects</Link>
    </div>
  );
}

  const nextProjectIndex = (projects.findIndex(p => p.id === id) + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12 pb-20">
      {/* Navigation Breadcrumb */}
      <Link 
        href="/projects" 
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-accent-500 transition-colors"
      >
        <ArrowLeft size={16} className="mr-2" /> Back to Projects
      </Link>

      {/* Header Info */}
      <header className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-500">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-neutral-700"></span>
            {/* <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
              {project.year}
            </span> */}
        </div>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-full hover:opacity-90 transition-opacity"
            >
              Visit Website <ArrowUpRight size={18} />
            </a>
          )}
          {project.links.code && (
            <a 
              href={project.links.code} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-200 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              View Code <Code size={18} />
            </a>
          )}
        </div>
      </header>

      {/* Main Image */}
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-neutral-800 border border-gray-100 dark:border-neutral-800 shadow-lg">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
        
        {/* Sidebar Metadata */}
        <div className="lg:col-span-4 space-y-8">
          
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
             <div>
               <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                 <User size={16} /> Role
               </h3>
               <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
             </div>
             
             {/* <div>
               <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                 <Calendar size={16} /> Year
               </h3>
               <p className="text-gray-600 dark:text-gray-400">{project.year}</p>
             </div> */}
          </div>

          <div>
             <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
             <div className="flex flex-wrap gap-2">
               {project.tags.map(tag => (
                 <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-md text-sm">
                   {tag}
                 </span>
               ))}
             </div>
          </div>
        </div>

        {/* Main Content */}
        {/* <div className="lg:col-span-8">
          <div 
            className="prose prose-lg dark:prose-invert prose-neutral max-w-none prose-a:text-accent-500 hover:prose-a:text-accent-600"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </div> */}
      </div>

      {/* Navigation Footer */}
      <div className="border-t border-gray-100 dark:border-neutral-800 pt-12 mt-12 flex justify-between items-center">
         <Link href="/projects" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 font-medium transition-colors">
            All Projects
         </Link>

         {nextProject && (
           <Link href={`/projects/${nextProject.id}`} className="group text-right">
              <span className="block text-xs text-gray-400 mb-1">Next Project</span>
              <span className="text-lg font-serif font-medium text-gray-900 dark:text-white group-hover:text-accent-500 transition-colors flex items-center gap-2">
                {nextProject.title} <ArrowRight size={18} />
              </span>
           </Link>
         )}
      </div>
    </div>
  );
};

export default ProjectDetail;
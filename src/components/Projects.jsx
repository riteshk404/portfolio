import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Eanchor from './eanchor.png';
import veronc from './veronc.png';

export default function Projects() {
  const projects = [
    {
      title: 'Vero - Netflix Clone',
      description: 'A flagship streaming platform clone featuring high-fidelity UI and real-time recommendation engines. Optimized for performance and seamless experience.',
      image: veronc,
      tags: ['Next.js', 'TMDB API', 'Tailwind CSS'],
      links: { github: 'https://github.com/riteshk404/vero', demo: 'https://veronc.vercel.app/' },
      id: 'vero',
    },
    {
      title: 'CV Maker',
      description: 'Professional CV customization platform.',
      image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React'],
      links: { github: '#', demo: '/CVMaker' },
    },
    {
      title: 'Football Analytics',
      description: 'Sports data analysis insights.',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Pandas'],
      links: { github: '#', demo: '#' },
    },
    {
      title: 'AI Vision App',
      description: 'Real-time object detection.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TensorFlow', 'React'],
      links: { github: '#', demo: '#' },
    },
    {
      title: 'E-Anchor',
      description: 'Unleashing your potential - A comprehensive personal development platform',
      image: Eanchor,
      tags: ['HTML', 'CSS', 'PHP', 'SQL', 'JavaScript'],
      links: { github: '#', demo: 'https://eanchor.scienceontheweb.net/' },
    },
    {
      title: 'Writicle',
      description: 'Your source of Great content - Modern blogging platform with rich editor',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PHP', 'HTML', 'JavaScript'],
      links: { github: '#', demo: '/CVMaker.jsx' },
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore some of my recent work showcasing my expertise in full-stack development, AI, and data science.
          </p>
        </div>

        {/* Feature Sidebar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => {
            const isMain = project.id === 'vero';
            
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`group flex flex-col bg-white dark:bg-slate-900 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800 ${
                  isMain ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
              >
                {/* Image Wrap */}
                <div className={`relative overflow-hidden bg-slate-50 dark:bg-slate-800 ${
                  isMain ? 'h-[250px] md:h-[400px] lg:h-[500px]' : 'h-40'
                }`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-0 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                </div>

                {/* Content Area */}
                <div className={`flex flex-col flex-1 ${isMain ? 'p-10' : 'p-5'}`}>
                  <h3 className={`font-bold text-slate-900 dark:text-white tracking-tight mb-2 ${
                    isMain ? 'text-3xl' : 'text-lg'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-slate-50 dark:bg-slate-800 text-slate-500 rounded border border-slate-100 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                    <a
                      href={project.links.github}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Code</span>
                    </a>
                    <a
                      href={project.links.demo}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

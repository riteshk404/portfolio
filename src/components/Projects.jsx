import { ExternalLink, Github } from 'lucide-react'
import Eanchor from './eanchor.png'
import veronc from './veronc.png'

export default function Projects() {
  const projects = [
    {
      title: 'Vero - Netflix Clone',
      description: 'A full-featured streaming platform clone with recommendation system and real-time updates',
      image: `${veronc}`,
      tags: ['Next.js', 'TMDB API', 'Tailwind CSS'],
      links: { github: 'https://github.com/riteshk404/vero', demo: 'https://veronc.vercel.app/' },
    },
      // <Link to="">CV</Link>
    {
      title: 'CV Maker',
      description: 'Create and customize professional CVs with ease using this intuitive web application',
      image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React'],
      links: { github: '#', demo: '/CVMaker' },
    },
    {
      title: 'Football Analytics',
      description: 'Sports data analysis and visualization platform with predictive modeling',
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Pandas', 'NumPy', 'ML'],
      links: { github: '#', demo: '#' },
    },
    {
      title: 'AI Vision App',
      description: 'Computer vision application with real-time object detection and tracking',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenCV', 'TensorFlow', 'React'],
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
    <section id="projects" className="py-16 sm:py-24  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore some of my recent work showcasing my expertise in full-stack development, AI, and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-46 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    target='_blank'
                    rel="noopener noreferrer" 
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">View Code</span>
                  </a>
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    target='_blank'
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

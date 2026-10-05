'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import hostelImage from '/public/images/hostelautoimg1.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Hostel Automation System',
      description: 'An advanced system to automate hostel management, including room allocation, attendance tracking, and billing.',
      image: './images/hostel1.jpg',  // ✅ Correct path
      category: 'fullstack',
      technologies: ['Html', 'CSS', 'Php', 'MySQL', 'Javascript'],
      githubLink: 'https://github.com',
      liveLink: 'http://gtmchostel1me.netlify.app/',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design.',
      image: '/images/project2.jpg',
      category: 'frontend',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks, projects, and deadlines with user authentication.',
      image: '/images/project3.jpg',
      category: 'fullstack',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data from an API.',
      image: '/images/project4.jpg',
      category: 'frontend',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      githubLink: 'https://github.com',
      liveLink: 'https://example.com',
    },
  ];

  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Fullstack', value: 'fullstack' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeFilter === filter.value
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                {/* Replace with actual project images */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Project Image
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
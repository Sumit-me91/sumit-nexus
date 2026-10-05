'use client';

import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCode, HiOutlineDesktopComputer, HiOutlineGlobe } from 'react-icons/hi';
import Image from 'next/image';

const About = () => {
  const timelineItems = [
    {
      year: '2023',
      title: 'Full Stack Developer',
      description: 'Working on modern web applications using React, Next.js, and Node.js',
      icon: <HiOutlineCode className="w-6 h-6" />
    },
    {
      year: '2023',
      title: 'Prompt Engineer',
      description: 'Specialized in creating effective prompts for AI systems and LLMs',
      icon: <HiOutlineGlobe className="w-6 h-6" />
    },
    {
      year: '2022',
      title: 'Frontend Specialist',
      description: 'Focused on creating responsive and accessible user interfaces',
      icon: <HiOutlineDesktopComputer className="w-6 h-6" />
    },
    {
      year: '2021',
      title: 'Web Development Certification',
      description: 'Completed advanced training in modern web technologies',
      icon: <HiOutlineAcademicCap className="w-6 h-6" />
    },
  ];

  const skills = [
    { name: 'Frontend Development', value: 90 },
    { name: 'Backend Development', value: 85 },
    { name: 'UI/UX Design', value: 75 },
    { name: 'Data Visualization', value: 80 },
    { name: 'Prompt Engineering', value: 85 },
    { name: 'DevOps', value: 65 },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            My Journey So Far
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto rounded"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Skills only, no image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Skills</h3>
              
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.value}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 * index }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right side - Bio and timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Who I Am</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  I'm a passionate <span className="text-primary font-medium">Full Stack Developer</span> with a strong foundation in both front-end and back-end technologies.
                  With over 5 years of experience in the field, I've had the opportunity to work on a variety of projects,
                  from small business websites to complex web applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  My approach to web development focuses on creating clean, efficient, and maintainable code
                  that delivers exceptional user experiences. I'm constantly learning and adapting to new technologies
                  to ensure I can provide the best solutions for my clients.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm skilled in <span className="text-primary font-medium">data visualization</span>, transforming complex data into intuitive, 
                  interactive charts and dashboards that help users make informed decisions. Additionally, I've developed expertise in 
                  <span className="text-primary font-medium"> prompt engineering</span>, crafting effective prompts for AI systems to generate high-quality outputs.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm proficient in Linux-based operating systems including Ubuntu and Debian.
                  This expertise allows me to develop and deploy applications in Linux environments,
                  ensuring compatibility and optimal performance across different distributions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-gray-700 dark:text-gray-300">10+ Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-gray-700 dark:text-gray-300">Frontend Expert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-gray-700 dark:text-gray-300">Backend Developer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-gray-700 dark:text-gray-300">Data Visualization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-gray-700 dark:text-gray-300">Prompt Engineer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="text-gray-700 dark:text-gray-300">Linux Handling</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">My Timeline</h3>
              
              <div className="relative border-l-2 border-primary/30 pl-8 space-y-8 ml-4">
                {timelineItems.map((item, index) => (
                  <motion.div 
                    key={item.year}
                    className="relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary border-2 border-primary">
                      {item.icon}
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">{item.title}</h4>
                        <span className="text-sm font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">{item.year}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
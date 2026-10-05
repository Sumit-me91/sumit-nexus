'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiUbuntu, SiDebian } from 'react-icons/si';

// Define skill categories and their respective skills
const skillsData = {
  frontend: [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 75 },
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'Tailwind CSS', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'SQL', level: 70 },
    { name: 'Python', level: 60 },
    { name: 'Java', level: 65 },
    { name: 'C#', level: 60 },
  ],
  tools: [
    { name: 'Git', level: 80 },
    { name: 'Docker', level: 65 },
    { name: 'VS Code', level: 85 },
    { name: 'Figma', level: 70 },
    { name: 'Webpack', level: 65 },
    { name: 'Jest', level: 60 },
    { name: 'CI/CD', level: 60 },
  ],
  os: [
    { name: 'Windows', level: 85 },
    { name: 'Linux', level: 70 },
    { name: 'macOS', level: 65 },
  ],
};

// Function to determine the gradient based on skill level
const getGradient = (level: number) => {
  if (level >= 90) {
    return 'from-purple-500 to-indigo-600';
  } else if (level >= 80) {
    return 'from-blue-500 to-blue-600';
  } else if (level >= 70) {
    return 'from-cyan-500 to-blue-500';
  } else {
    return 'from-teal-400 to-cyan-500';
  }
};

// Function to determine the skill level text
const getSkillLevelText = (level: number) => {
  if (level >= 90) return 'Expert';
  if (level >= 80) return 'Advanced';
  if (level >= 70) return 'Proficient';
  if (level >= 60) return 'Intermediate';
  return 'Beginner';
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isInView, setIsInView] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSkills, setFilteredSkills] = useState<any[]>([]);
  
  // Filter skills based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSkills(skillsData[activeCategory as keyof typeof skillsData]);
    } else {
      const allSkills = Object.values(skillsData).flat();
      const filtered = allSkills.filter(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSkills(filtered);
    }
  }, [searchTerm, activeCategory]);
  
  // Set initial filtered skills
  useEffect(() => {
    setFilteredSkills(skillsData[activeCategory as keyof typeof skillsData]);
  }, [activeCategory]);
  
  // Set isInView when component is in viewport
  useEffect(() => {
    setIsInView(true);
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchTerm('');
  };
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools throughout my career.
            Here's a showcase of my technical expertise and proficiency levels.
          </p>
          
          {/* Search and filter */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(skillsData).map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: activeCategory === category ? 1.05 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
          
          {/* Skills grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center"
                variants={skillVariants}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="relative mb-4">
                  {/* Hexagon shape */}
                  <div className={`hexagon bg-gradient-to-br ${getGradient(skill.level)}`}>
                    <div className="hexagon-content flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{skill.name}</span>
                    </div>
                    
                    {/* Skill level indicator */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium text-primary shadow-md">
                      {skill.level}%
                    </div>
                    
                    {/* Animated progress circle */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-300 dark:text-gray-700 stroke-current"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-primary stroke-current"
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                        style={{
                          strokeDasharray: "251.2",
                          strokeDashoffset: 251.2 - (251.2 * skill.level) / 100,
                          transition: `stroke-dashoffset ${1.5}s ease-in-out ${index * 0.1}s`
                        }}
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Skill level text */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {getSkillLevelText(skill.level)}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Legend */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Expert (90-100%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Advanced (80-89%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Proficient (70-79%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 mr-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Intermediate (60-69%)</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .hexagon {
          position: relative;
          width: 120px;
          height: 120px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .hexagon:hover {
          transform: rotate(30deg);
        }
        
        .hexagon-content {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: rotate(0deg);
          transition: all 0.3s ease;
        }
        
        .hexagon:hover .hexagon-content {
          transform: rotate(-30deg);
        }
        
        @media (max-width: 640px) {
          .hexagon {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills; 
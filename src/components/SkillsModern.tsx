'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiUbuntu, SiDebian } from 'react-icons/si';

const SkillsModern = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" size={40} />, level: 95 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" size={40} />, level: 90 },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" size={40} />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={40} />, level: 85 },
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={40} />, level: 90 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" size={40} />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={40} />, level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" size={40} />, level: 85 },
        { name: 'Express', icon: <SiExpress className="text-black dark:text-white" size={40} />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={40} />, level: 80 },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" size={40} />, level: 75 },
        { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" size={40} />, level: 75 },
      ],
    },
    {
      title: 'Operating Systems',
      skills: [
        { name: 'Linux', icon: <FaLinux className="text-[#FCC624]" size={40} />, level: 85 },
        { name: 'Ubuntu', icon: <SiUbuntu className="text-[#E95420]" size={40} />, level: 85 },
        { name: 'Debian', icon: <SiDebian className="text-[#A81D33]" size={40} />, level: 80 },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" size={40} />, level: 85 },
        { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" size={40} />, level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>
              
              <div className="flex flex-wrap justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: skillIndex * 0.1 + categoryIndex * 0.2 
                    }}
                  >
                    <div className="skill-icon-wrapper">
                      {skill.icon}
                      <div className="skill-level-indicator">
                        <span className="skill-level-text">{skill.level}%</span>
                      </div>
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for modern skill cards */}
      <style jsx>{`
        .skill-card {
          position: relative;
          width: 160px;
          margin: 15px;
          padding: 20px 15px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
        }

        .dark .skill-card {
          background: #2d3748;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .skill-icon-wrapper {
          position: relative;
          margin-bottom: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
        }

        .skill-level-indicator {
          position: absolute;
          bottom: -5px;
          right: -5px;
          width: 36px;
          height: 36px;
          background: #3b82f6;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: bold;
          font-size: 0.7rem;
          border: 3px solid white;
        }

        .dark .skill-level-indicator {
          border-color: #2d3748;
        }

        .skill-name {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 10px;
          text-align: center;
        }

        .skill-bar-container {
          width: 100%;
          height: 6px;
          background-color: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
        }

        .dark .skill-bar-container {
          background-color: #4a5568;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 3px;
          transition: width 1s ease-in-out;
        }

        @media (max-width: 640px) {
          .skill-card {
            width: 140px;
            padding: 15px 10px;
          }

          .skill-icon-wrapper {
            width: 70px;
            height: 70px;
          }

          .skill-name {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsModern; 
'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaFigma, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiUbuntu, SiDebian } from 'react-icons/si';

const SkillsCircular = () => {
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

  // Function to calculate the stroke dash offset based on skill level
  const calculateStrokeDashOffset = (level: number) => {
    const circumference = 2 * Math.PI * 58; // 2πr where r=58 (radius of the circle)
    return circumference - (level / 100) * circumference;
  };

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
              
              <div className="flex flex-wrap justify-center gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: skillIndex * 0.1 + categoryIndex * 0.2 
                    }}
                  >
                    <div className="skill-circle">
                      <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle 
                          className="skill-circle-bg" 
                          cx="60" 
                          cy="60" 
                          r="58" 
                          strokeWidth="4" 
                          fill="none" 
                        />
                        <circle 
                          className="skill-circle-progress" 
                          cx="60" 
                          cy="60" 
                          r="58" 
                          strokeWidth="4" 
                          fill="none" 
                          strokeDasharray={2 * Math.PI * 58}
                          strokeDashoffset={calculateStrokeDashOffset(skill.level)}
                          transform="rotate(-90 60 60)"
                        />
                      </svg>
                      <div className="skill-icon">{skill.icon}</div>
                    </div>
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-level">{skill.level}%</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for circular skill cards */}
      <style jsx>{`
        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 140px;
          padding: 15px;
          border-radius: 20px;
          background: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .dark .skill-card {
          background: #2d3748;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .skill-circle {
          position: relative;
          width: 120px;
          height: 120px;
          margin-bottom: 15px;
        }

        .skill-circle-bg {
          stroke: #e2e8f0;
        }

        .dark .skill-circle-bg {
          stroke: #4a5568;
        }

        .skill-circle-progress {
          stroke: #3b82f6;
          transition: stroke-dashoffset 1.5s ease-in-out;
        }

        .skill-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .skill-name {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 5px;
          text-align: center;
        }

        .skill-level {
          font-size: 0.875rem;
          color: #3b82f6;
          font-weight: 500;
        }

        .dark .skill-level {
          color: #60a5fa;
        }

        @media (max-width: 640px) {
          .skill-card {
            width: 120px;
            padding: 10px;
          }

          .skill-circle {
            width: 100px;
            height: 100px;
          }

          .skill-name {
            font-size: 0.875rem;
          }

          .skill-level {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsCircular; 
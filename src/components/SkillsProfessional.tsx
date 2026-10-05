'use client';

import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaDatabase, FaServer, FaLaptop, FaMemory, FaMicrochip, FaNetworkWired, FaLinux } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiMongodb, SiPhp, SiMysql, SiUbuntu, SiDebian, SiKalilinux } from 'react-icons/si';

const SkillsProfessional = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" size={36} />, level: 75 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" size={36} />, level: 72 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={36} />, level: 68 },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" size={36} />, level: 70 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" size={36} />, level: 65 },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" size={36} />, level: 68 },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={36} />, level: 62 },
        { name: 'SQL', icon: <FaDatabase className="text-[#4479A1]" size={36} />, level: 70 },
      ],
    },
    {
      title: 'Operating Systems',
      skills: [
        { name: 'Linux', icon: <FaLinux className="text-[#FCC624]" size={36} />, level: 72 },
        { name: 'Ubuntu', icon: <SiUbuntu className="text-[#E95420]" size={36} />, level: 70 },
        { name: 'Debian', icon: <SiDebian className="text-[#A81D33]" size={36} />, level: 65 },
        { name: 'Parrot OS', icon: <SiKalilinux className="text-[#4BBBCE]" size={36} />, level: 60 },
      ],
    },
    {
      title: 'Computer Hardware',
      skills: [
        { name: 'PC Assembly', icon: <FaLaptop className="text-[#FF6B6B]" size={36} />, level: 75 },
        { name: 'Hardware Troubleshooting', icon: <FaMicrochip className="text-[#4EA8DE]" size={36} />, level: 72 },
        { name: 'Memory Management', icon: <FaMemory className="text-[#38B000]" size={36} />, level: 68 },
        { name: 'Networking', icon: <FaNetworkWired className="text-[#FF9E00]" size={36} />, level: 65 },
        { name: 'Server Management', icon: <FaServer className="text-[#845EC2]" size={36} />, level: 60 },
      ],
    },
  ];

  // Function to determine the skill level text
  const getSkillLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate+';
    if (level >= 60) return 'Intermediate';
    if (level >= 50) return 'Basic';
    return 'Beginner';
  };

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2 
          className="section-title mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Skills
        </motion.h2>
        
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="category-header">
                <h3 className="text-2xl font-bold mb-8 text-center relative">
                  <span className="category-title">{category.title}</span>
                </h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-card"
                    whileHover={{ 
                      y: -8,
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: skillIndex * 0.05 + categoryIndex * 0.1 
                    }}
                  >
                    <div className="skill-icon">
                      {skill.icon}
                    </div>
                    <div className="skill-content">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-level">
                        <div className="skill-level-text">
                          {getSkillLevelText(skill.level)}
                        </div>
                        <div className="skill-level-bar-container">
                          <div 
                            className="skill-level-bar-fill" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for professional skill cards */}
      <style jsx>{`
        .category-title {
          position: relative;
          padding-bottom: 10px;
        }
        
        .category-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 3px;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .skill-card {
          display: flex;
          align-items: center;
          padding: 20px;
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border-left: 4px solid #3b82f6;
        }
        
        .dark .skill-card {
          background: #2d3748;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .skill-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          margin-right: 15px;
          border-radius: 8px;
          background: rgba(59, 130, 246, 0.1);
          padding: 10px;
        }
        
        .skill-content {
          flex: 1;
        }
        
        .skill-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 8px;
        }
        
        .skill-level {
          display: flex;
          flex-direction: column;
        }
        
        .skill-level-text {
          font-size: 0.85rem;
          color: #3b82f6;
          font-weight: 500;
          margin-bottom: 5px;
        }
        
        .dark .skill-level-text {
          color: #60a5fa;
        }
        
        .skill-level-bar-container {
          width: 100%;
          height: 6px;
          background-color: #e2e8f0;
          border-radius: 3px;
          overflow: hidden;
        }
        
        .dark .skill-level-bar-container {
          background-color: #4a5568;
        }
        
        .skill-level-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 3px;
          transition: width 1.5s ease-in-out;
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
        
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .skill-card {
            padding: 15px;
          }
          
          .skill-icon {
            width: 50px;
            height: 50px;
          }
          
          .skill-name {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsProfessional; 
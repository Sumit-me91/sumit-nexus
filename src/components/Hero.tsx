'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  const phrases = [
    'Full Stack Developer',
    'UI/UX Enthusiast',
    'Problem Solver',
    'Tech Explorer',
    'Prompt Engineer'
  ];
  
  // Typing effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        
        if (typedText.length === currentPhrase.length) {
          // Pause at the end of typing
          setTypingSpeed(1500);
          setIsDeleting(true);
        } else {
          // Normal typing speed
          setTypingSpeed(100);
        }
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        
        if (typedText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          // Pause before typing next phrase
          setTypingSpeed(500);
        } else {
          // Deleting speed
          setTypingSpeed(50);
        }
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentPhraseIndex, phrases, typingSpeed]);
  
  // Particle animation
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 2,
    duration: Math.random() * 10 + 10
  }));
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 rounded-full">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hi, I'm <span className="text-gradient">Sumit</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-200 h-[40px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="border-r-2 border-primary pr-1 animate-cursor">{typedText}</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I build responsive and user-friendly web applications with modern technologies.
              Passionate about creating clean, efficient, and scalable solutions to complex problems.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link href="#contact">
                <motion.div 
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </motion.div>
              </Link>
              
              <a 
                href="/resume.pdf" 
                download="Sumit_Resume.pdf"
                className="btn-outline inline-flex items-center gap-2"
              >
                <motion.div
                  className="inline-flex items-center gap-2 w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDownload className="text-lg" />
                  Download CV
                </motion.div>
              </a>
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <motion.div 
                  className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-md hover:text-primary dark:hover:text-primary hover:shadow-lg transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </motion.div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <motion.div 
                  className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-md hover:text-primary dark:hover:text-primary hover:shadow-lg transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={20} />
                </motion.div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <motion.div 
                  className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-md hover:text-primary dark:hover:text-primary hover:shadow-lg transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter size={20} />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right content - Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl transform scale-[0.8] animate-pulse-slow" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <div className="profile-image">
                  {/* Profile Image - Replace the URL below with your own image */}
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ 
                      backgroundImage: "url('/images/profile-photo.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  
                  {/* Overlay with subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 pointer-events-none"></div>
                  
                  {/* Tech tags that appear on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-medium text-primary shadow-md">React</div>
                    <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-medium text-primary shadow-md">Node.js</div>
                    <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-medium text-primary shadow-md">TypeScript</div>
                    <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-medium text-primary shadow-md">Next.js</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-primary"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg text-secondary"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary"
          >
            <HiArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50% { border-color: var(--color-primary); }
        }
        
        .animate-cursor {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero; 
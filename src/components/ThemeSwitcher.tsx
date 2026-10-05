'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, themeMode, setTheme, toggleThemeMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => setIsOpen(!isOpen);
  
  const themeOptions = [
    { name: 'Indigo', value: 'indigo', color: '#4f46e5' },
    { name: 'Purple', value: 'purple', color: '#8b5cf6' },
    { name: 'Blue', value: 'blue', color: '#3b82f6' },
    { name: 'Teal', value: 'teal', color: '#0d9488' },
    { name: 'Rose', value: 'rose', color: '#e11d48' },
  ];
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Theme Mode Toggle */}
      <motion.button
        className="absolute bottom-0 right-16 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleThemeMode}
        aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
      >
        {themeMode === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
      </motion.button>
      
      {/* Theme Color Toggle Button */}
      <motion.button
        className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-3 rounded-full shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleOpen}
        style={{ backgroundColor: isOpen ? themeOptions.find(t => t.value === theme)?.color : '' }}
        aria-label="Toggle theme options"
      >
        <FaPalette size={20} className={isOpen ? 'text-white' : ''} />
      </motion.button>
      
      {/* Theme Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 flex flex-col gap-3 items-center"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {themeOptions.map((option) => (
              <motion.button
                key={option.value}
                className={`w-10 h-10 rounded-full ${theme === option.value ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-600' : ''}`}
                style={{ backgroundColor: option.color }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setTheme(option.value as any);
                  setIsOpen(false);
                }}
                aria-label={`Set theme to ${option.name}`}
                title={option.name}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher; 
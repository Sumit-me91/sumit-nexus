'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeType = 'indigo' | 'purple' | 'blue' | 'teal' | 'rose';
type ThemeModeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  themeMode: ThemeModeType;
  setTheme: (theme: ThemeType) => void;
  toggleThemeMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('indigo');
  const [themeMode, setThemeMode] = useState<ThemeModeType>('light');
  
  // Initialize theme from localStorage on client side
  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme && ['indigo', 'purple', 'blue', 'teal', 'rose'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
    
    // Get saved theme mode from localStorage
    const savedThemeMode = localStorage.getItem('themeMode') as ThemeModeType;
    if (savedThemeMode && ['light', 'dark'].includes(savedThemeMode)) {
      setThemeMode(savedThemeMode);
    } else {
      // Check user's system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeMode(prefersDark ? 'dark' : 'light');
    }
  }, []);
  
  // Apply theme class to body
  useEffect(() => {
    // Remove all theme classes
    document.body.classList.remove('theme-indigo', 'theme-purple', 'theme-blue', 'theme-teal', 'theme-rose');
    // Add current theme class
    document.body.classList.add(`theme-${theme}`);
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Apply theme mode class to html
  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('themeMode', themeMode);
  }, [themeMode]);
  
  // Toggle between light and dark mode
  const toggleThemeMode = () => {
    setThemeMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, themeMode, setTheme, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 
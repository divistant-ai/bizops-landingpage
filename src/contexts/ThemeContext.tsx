'use client';

import React, { createContext, use, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const root = window.document.documentElement;

    // Get saved theme or system preference
    const saved = localStorage.getItem('theme');
    let initialTheme: Theme = 'light';

    if (saved === 'dark' || saved === 'light') {
      initialTheme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialTheme = 'dark';
    }

    setTheme(initialTheme);
    setMounted(true);

    // Apply theme immediately
    if (initialTheme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.setProperty('--background', '240 10% 3.9%');
      root.style.setProperty('--foreground', '0 0% 98%');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.setProperty('--background', '0 0% 100%');
      root.style.setProperty('--foreground', '240 10% 3.9%');
    }
  }, []);

  // Update theme when it changes (backup sync)
  useEffect(() => {
    if (!mounted) {
      return;
    }

    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.setProperty('--background', '240 10% 3.9%');
      root.style.setProperty('--foreground', '0 0% 98%');
    } else {
      // Force remove - try multiple methods
      root.classList.remove('dark');
      const classes = root.className.split(' ').filter(c => c !== 'dark').join(' ');
      root.className = classes;
      root.removeAttribute('data-theme');
      root.setAttribute('data-theme', 'light');
      root.style.setProperty('--background', '0 0% 100%');
      root.style.setProperty('--foreground', '240 10% 3.9%');
    }

    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const body = window.document.body;
    const currentTheme = theme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update state first
    setTheme(newTheme);

    // Immediately update DOM
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      // Force update CSS variables
      root.style.setProperty('--background', '240 10% 3.9%');
      root.style.setProperty('--foreground', '0 0% 98%');
    } else {
      // Force remove - try multiple methods to ensure it's removed
      root.classList.remove('dark');
      const classes = root.className.split(' ').filter(c => c !== 'dark' && c.trim() !== '').join(' ');
      root.className = classes;
      root.removeAttribute('data-theme');
      root.setAttribute('data-theme', 'light');
      // Force update CSS variables
      root.style.setProperty('--background', '0 0% 100%');
      root.style.setProperty('--foreground', '240 10% 3.9%');
    }

    // Force reflow to ensure CSS updates
    void root.offsetHeight;
    void body.offsetHeight;

    // Save to localStorage
    localStorage.setItem('theme', newTheme);

    // Debug log (can be removed later)
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        console.log('Theme toggled to:', newTheme);
        console.log('HTML classes:', root.className);
        console.log('Has dark class:', root.classList.contains('dark'));
        // Check computed styles after a delay
        const bgColor = window.getComputedStyle(body).backgroundColor;
        const computedBg = getComputedStyle(root).getPropertyValue('--background');
        console.log('Body background color:', bgColor);
        console.log('CSS variable --background:', computedBg);
      }, 10);
    }
  };

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  );
};

export const useTheme = () => {
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

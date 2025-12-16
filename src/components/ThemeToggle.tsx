'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-900"
        aria-label="Toggle theme"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light'
        ? (
            <Moon className="h-5 w-5 text-slate-600 transition-transform group-hover:scale-110 dark:text-slate-400" />
          )
        : (
            <Sun className="h-5 w-5 text-slate-400 transition-transform group-hover:scale-110 group-hover:text-yellow-400" />
          )}
    </button>
  );
}

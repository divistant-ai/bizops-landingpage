"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="flex h-11 w-11 items-center justify-center rounded-lg bg-white transition-colors dark:border-slate-800 dark:bg-slate-900"
        aria-label="Toggle theme"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group flex h-11 w-11 items-center justify-center rounded-lg bg-white transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark
        ? (
            <Sun className="h-5 w-5 text-slate-400 transition-transform group-hover:scale-110 group-hover:text-yellow-400" />
          )
        : (
            <Moon className="h-5 w-5 text-slate-600 transition-transform group-hover:scale-110 dark:text-slate-400" />
          )}
    </button>
  );
}

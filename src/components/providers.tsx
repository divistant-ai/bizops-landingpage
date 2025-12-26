"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

import { LanguageProvider } from "@/contexts/LanguageContext";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="theme"
      enableColorScheme
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

import { TailwindIndicator } from "../tailwind-indicator";
import { TooltipProvider } from "../ui/tooltip";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>
        <NextTopLoader color="hsl(262.1 83.3% 57.8%)" />
        {children}
        <TailwindIndicator />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default Provider;

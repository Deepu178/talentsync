"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Info } from "lucide-react";

import { cn } from "@/lib/utils";

interface FormErrorProps {
  message?: string;
  className?: string;
}

export const FormError = ({ message, className }: FormErrorProps) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 10,
        }}
        className={cn(
          "flex items-center gap-x-2 rounded-md bg-destructive/20 p-3 text-sm text-destructive dark:bg-destructive/70 dark:text-foreground/70",
          className,
        )}
      >
        <Info className="h-4 w-4" />
        <p>{message}</p>
      </motion.div>
    </AnimatePresence>
  );
};

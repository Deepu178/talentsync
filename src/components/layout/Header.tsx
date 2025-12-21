"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { links } from "@/lib/config";
import { cn } from "@/lib/utils";
import CalBtn from "../CalBtn";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-7xl rounded-full border border-transparent transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-border/40 shadow-lg shadow-black/5 py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="flex items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/core/talentsync-logo.png"
                alt="TalentSync Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight hidden sm:block bg-gradient-to-r from-blue-600 via-indigo-500 to-primary bg-clip-text text-transparent">
              TalentSync
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-2 py-1 bg-background/0 border border-transparent">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setActiveHover(link.name)}
                onMouseLeave={() => setActiveHover(null)}
                className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {activeHover === link.name && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-secondary/50 rounded-full -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <CalBtn
              variant="default"
              size="lg"
              className="hidden md:flex rounded-full px-6 font-medium group"
            >
              Start Hiring
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </CalBtn>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-foreground bg-secondary/50 rounded-full"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-20 z-40 rounded-3xl bg-background/95 backdrop-blur-3xl border border-border p-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 border-b border-border/10 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <CalBtn
                  variant="default"
                  className="w-full rounded-2xl py-6 font-medium"
                >
                  Start Hiring
                  <ArrowRight size={18} className="ml-2" />
                </CalBtn>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

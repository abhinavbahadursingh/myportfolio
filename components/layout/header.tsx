"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, icons, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "recharts";
import { Imprima } from "next/font/google";

const Header = () => {
  const [isMobileMenueOpen, setismobileMenueOpen] = useState(false);
  const [isScrolled, setisScrolled] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menueItems = [
    { Label: "About", href: "#about" },
    { Label: "Skills", href: "#skills" },
    { Label: "Projects", href: "projects" },
    { Label: "Testimonialss", href: "#testimonials" },
    { Label: "Contact", href: "#contact" },
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
      }`}
    > 
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"} className="text-xl font-bold text-primary">
            Abhinav Bahadur Singh
          </Link>
          {/* desktop menue */}
          <nav className="hidden md:flex items-center gap-8">
            {menueItems.map((item) => {
              return (
                <a
                  href={item.href}
                  key={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors
              "
                >
                  {item.Label}
                </a>
              );
            })}
            <Button variant={"default"}>
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </nav>

          {/* mobile menue */}

          <Button
            variant={"ghost"}
            size={"icon"}
            className="md:hidden"
            onClick={() => setismobileMenueOpen(!isMobileMenueOpen)}
          >
            {isMobileMenueOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* mobile menue*/}
      <AnimatePresence>
        {isMobileMenueOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {menueItems.map((item) => {
                return (
                  <a
                    href={item.href}
                    key={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setismobileMenueOpen(false)}
                  >
                    {item.Label}
                  </a>
                );
              })}
              <Button variant={"default"} size={"sm"} className="gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

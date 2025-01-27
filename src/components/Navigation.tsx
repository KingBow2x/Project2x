import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  links?: Array<{ label: string; href: string }>;
  logo?: string;
}

const Navigation = ({
  links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  logo = "https://api.dicebear.com/7.x/initials/svg?seed=Brand",
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 10);
    });
  }, [scrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-black/[0.96] ${isScrolled ? "shadow-md shadow-gray-800/50" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;

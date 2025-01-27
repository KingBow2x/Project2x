import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ButtonWithRipple as Button } from "./ui/button-with-ripple";
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

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    href: string,
  ) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    scrollToSection(href);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-black/[0.96] ${isScrolled ? "shadow-md shadow-gray-800/50" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  onClick={(e) => handleButtonClick(e, link.href)}
                  className="relative overflow-hidden text-white bg-black hover:bg-white hover:text-black border border-white/20 transition-all duration-300"
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
              className="text-white"
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
                  onClick={(e) => handleButtonClick(e, link.href)}
                  className="w-full text-left justify-start relative overflow-hidden text-white bg-black hover:bg-white hover:text-black border border-white/20 transition-all duration-300"
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

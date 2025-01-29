import React, { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Dock, DockIcon } from "./ui/dock";
import { Home, Briefcase, Mail, X } from "lucide-react";

interface NavigationProps {
  links?: Array<{ label: string; href: string; icon: React.ElementType }>;
}

const Navigation = ({
  links = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Services", href: "#services", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ],
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
      setIsExpanded(false);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 right-4 sm:right-8 lg:right-12 z-50 ${isScrolled ? "shadow-md shadow-gray-800/50" : ""}`}
    >
      {/* Desktop Navigation */}
      <div className="hidden sm:block">
        <Dock>
          {links.map((link) => (
            <DockIcon
              key={link.href}
              className="bg-white/10 hover:bg-white/20 p-4"
              onClick={() => scrollToSection(link.href)}
            >
              <link.icon className="h-6 w-6 text-white" />
            </DockIcon>
          ))}
        </Dock>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden">
        <AnimatePresence>
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <DockIcon
                className="bg-white/10 hover:bg-white/20 p-2"
                onClick={toggleExpand}
              >
                <Home className="h-4 w-4 text-white" />
              </DockIcon>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Dock className="scale-75 origin-right">
                {links.map((link) => (
                  <DockIcon
                    key={link.href}
                    className="bg-white/10 hover:bg-white/20 p-2"
                    onClick={() => scrollToSection(link.href)}
                  >
                    <link.icon className="h-4 w-4 text-white" />
                  </DockIcon>
                ))}
                <DockIcon
                  className="bg-white/10 hover:bg-white/20 p-2"
                  onClick={toggleExpand}
                >
                  <X className="h-4 w-4 text-white" />
                </DockIcon>
              </Dock>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;

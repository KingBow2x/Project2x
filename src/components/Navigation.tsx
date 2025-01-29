import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Dock, DockIcon } from "./ui/dock";
import { Home, Briefcase, Mail } from "lucide-react";

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
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 right-4 sm:right-8 lg:right-12 z-50 ${isScrolled ? "shadow-md shadow-gray-800/50" : ""}`}
    >
      <Dock>
        {links.map((link) => (
          <DockIcon
            key={link.href}
            className="bg-white/10 hover:bg-white/20"
            onClick={() => scrollToSection(link.href)}
          >
            <link.icon className="h-6 w-6 text-white" />
          </DockIcon>
        ))}
      </Dock>
    </motion.nav>
  );
};

export default Navigation;

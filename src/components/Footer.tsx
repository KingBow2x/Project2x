import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";

interface FooterProps {
  socialLinks?: {
    github?: string;
    linkedin?: string;
    youtube?: string;
  };
}

const Footer = ({
  socialLinks = {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/lewis-bowmaker",
    youtube: "https://youtube.com/@yourusername",
  },
}: FooterProps) => {
  return (
    <footer className="relative bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926')] opacity-[0.08] mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3
              className="text-3xl font-bold relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Lewis Bowmaker
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-20 blur-lg group-hover:opacity-30 animate-pulse transition duration-1000"></div>
            </motion.h3>
            <p className="text-zinc-300 text-lg">
              Graduate Chemical Engineer with expertise in data analytics | AI
              and crypto enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Connect With Me
            </h4>
            <div className="flex space-x-6">
              <motion.a
                href={socialLinks.github}
                className="text-zinc-400 hover:text-white transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                className="text-zinc-400 hover:text-white transition-all"
                whileHover={{ scale: 1.2, rotate: -5 }}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href={socialLinks.youtube}
                className="text-zinc-400 hover:text-white transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="text-zinc-400 hover:text-white transition-all"
                whileHover={{ scale: 1.2, rotate: -5 }}
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} Lewis Bowmaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

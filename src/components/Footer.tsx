import React from "react";
import { Input } from "./ui/input";
import { ButtonWithRipple as Button } from "./ui/button-with-ripple";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Lewis Bowmaker
            </h3>
            <p className="text-zinc-300">Data Analyst & Full Stack Developer</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.youtube}
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
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

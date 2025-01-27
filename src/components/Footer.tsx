import React from "react";
import { Input } from "./ui/input";
import { ButtonWithRipple as Button } from "./ui/button-with-ripple";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

interface FooterProps {
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  onNewsletterSubmit?: (email: string) => void;
}

const Footer = ({
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  onNewsletterSubmit = (email: string) =>
    console.log("Newsletter signup:", email),
}: FooterProps) => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNewsletterSubmit(email);
    setEmail("");
  };

  return (
    <footer className="bg-black/[0.96] border-t border-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Brand Name</h3>
            <p className="text-muted-foreground">
              Creating amazing experiences for modern brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                className="text-muted-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.twitter}
                className="text-muted-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.instagram}
                className="text-muted-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                className="text-muted-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="relative overflow-hidden text-white bg-black hover:bg-white hover:text-black border border-white/20 transition-all duration-300"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates and offers.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brand Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

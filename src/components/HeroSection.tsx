import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Dock } from "./ui/dock";
import { DockIcon } from "./ui/dock";
import { Home, User, Mail, Bell, Settings, ArrowDown } from "lucide-react";
import { Spotlight } from "./ui/spotlight";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  logoUrl?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Transform Your Digital Presence",
  subtitle = "We help businesses create impactful digital experiences that drive growth and engagement.",
  ctaText = "Get Started",
  logoUrl = "https://api.dicebear.com/7.x/shapes/svg?seed=brand",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section
      className="relative min-h-[650px] h-[85vh] max-h-[850px] w-full overflow-hidden"
      aria-labelledby="hero-title"
    >
      <Card className="w-full h-full bg-black/[0.96] overflow-hidden rounded-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex flex-col lg:flex-row h-full">
          {/* Left content */}
          <div className="flex-1 p-4 md:p-8 relative z-10 flex flex-col justify-start">
            <div className="pl-4 md:pl-16 pt-8 md:pt-16">
              <h1
                id="hero-title"
                className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.3] max-w-[800px] pb-4"
              >
                <span
                  className="block text-white animate-glow-pulse"
                  role="text"
                >
                  Start Optimising Your
                </span>
                <span
                  className="block text-gray-200 animate-glow-pulse [animation-delay:1s]"
                  role="text"
                >
                  Business With
                </span>
                <span
                  className="block text-gray-300 animate-glow-pulse [animation-delay:2s]"
                  role="text"
                >
                  AI Today
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-[600px] mt-6">
                {subtitle}
              </p>
              <Button
                onClick={onCtaClick}
                size="lg"
                className="mt-8 text-lg px-8 py-6"
                aria-label="Get started with our services"
              >
                {ctaText}
              </Button>
            </div>
            <div className="p-4 md:p-10 rounded-lg relative opacity-100 mt-auto">
              <Dock
                iconSize={40}
                iconMagnification={80}
                iconDistance={120}
                className="scale-75 md:scale-100"
              >
                {[
                  { icon: Home, label: "Home" },
                  { icon: User, label: "Profile" },
                  { icon: Mail, label: "Messages" },
                  { icon: Bell, label: "Notifications" },
                  { icon: Settings, label: "Settings" },
                ].map((item, index) => (
                  <DockIcon
                    key={item.label}
                    className="hover:bg-white/10 transition-colors"
                    aria-label={item.label}
                  >
                    <item.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </DockIcon>
                ))}
              </Dock>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative hidden lg:block">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          aria-label="Scroll down"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="absolute left-1/2 bottom-8 transform -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </Card>
    </section>
  );
};

export default HeroSection;

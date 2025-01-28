import React from "react";
import { ButtonWithRipple as Button } from "./ui/button-with-ripple";
import { motion } from "framer-motion";
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Typewriter } from "./ui/typewriter";
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
      className="relative min-h-[650px] h-[85vh] max-h-[850px] w-full overflow-hidden bg-black"
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
            <div className="md:pl-32 md:pt-16 pl-[104px] pt-[16]">
              <h1
                id="hero-title"
                className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.3] max-w-[800px] pb-4"
              >
                <Card className="bg-zinc-900/90 border border-white/10 backdrop-blur-sm p-6 max-w-[600px]">
                  <Typewriter
                    words={[
                      "echo 'Hello there! 👋'",
                      "cat lewis_cv.md",
                      "ls ./projects",
                      "echo 'Thanks for visiting! :)'",
                    ]}
                    speed={30}
                    delay={2000}
                  />
                </Card>
              </h1>
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

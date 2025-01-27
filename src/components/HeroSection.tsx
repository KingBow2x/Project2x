import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
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
    <section className="relative h-[850px] w-full overflow-hidden">
      <Card className="w-full h-full bg-black/[0.96] overflow-hidden rounded-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex h-full">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-start">
            <div className="pl-16 pt-32">
              <h1 className="text-[64px] font-bold leading-[1.2] max-w-[800px]">>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Start Optimising Your
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-400">
                  Business With
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-500">
                  AI Today
                </span>
              </h1>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-12 rounded-full border-2 border-muted flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1 rounded-full bg-muted"
            />
          </motion.div>
        </div>
      </Card>
    </section>
  );
};

export default HeroSection;

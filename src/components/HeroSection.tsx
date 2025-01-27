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
    <section className="relative h-[800px] w-full bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
        {/* 3D Scene Card */}
        <Card className="w-full max-w-5xl h-[500px] bg-black/[0.96] relative overflow-hidden mb-8">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                The future is HERE
              </h1>
              <p className="mt-4 text-neutral-300 max-w-lg">
                Learn how to optimise your business with AI
              </p>
            </div>

            {/* Right content */}
            <div className="flex-1 relative">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
        {/* Title */}
        {/* Subtitle */}

        {/* CTA Button */}
        {/* Decorative elements */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
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
      </div>
    </section>
  );
};

export default HeroSection;

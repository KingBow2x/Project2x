import React from "react";
import Particles from "./ui/particles";
import { ButtonWithRipple as Button } from "./ui/button-with-ripple";
import { motion } from "framer-motion";
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Typewriter } from "./ui/typewriter";
import { ArrowDown } from "lucide-react";
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
    <div className="relative">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-[650px] h-[85vh] max-h-[850px] w-full overflow-hidden bg-black"
        aria-labelledby="hero-title"
      >
        <Particles className="absolute inset-0 z-0" quantity={100} ease={20} />
        <Card className="w-full h-full bg-transparent overflow-hidden rounded-none border-0">
          <Spotlight
            className="hidden md:block -top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col lg:flex-row h-full px-4 lg:px-0">
            {/* Left content */}
            <div className="flex-1 p-4 md:p-8 relative z-20 flex justify-center lg:justify-start">
              <div className="md:pl-32 md:pt-48 lg:pl-[104px] pt-[160px] w-full max-w-[800px]">
                <h1
                  id="hero-title"
                  className="text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.3] max-w-[800px] pb-4"
                >
                  <Card className="bg-zinc-900/90 border border-white/10 backdrop-blur-sm p-0 lg:p-0 h-[200px] lg:h-auto max-w-[800px] shadow-[0_0_50px_rgba(255,255,255,0.2)] overflow-hidden">
                    <div className="w-full bg-[#2D2D2D] px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF605C]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#FFBD44]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#00CA4E]"></div>
                      </div>
                      <span className="text-white/50 text-sm">terminal</span>
                    </div>
                    <div className="w-full h-full flex items-start overflow-hidden p-4 lg:p-8">
                      <div className="w-full">
                        <Typewriter
                          words={[
                            "echo 'Hello there! 👋'",
                            "cd ./projects && git config user.name",
                            "@LewisBowmaker",
                            "echo 'See my work below ⬇️'",
                            "echo 'Thanks for visiting! :)'",
                          ]}
                          speed={20}
                          delay={500}
                          loop={false}
                          repeat={1}
                          className="text-sm lg:text-xl flex flex-col space-y-2 font-mono"
                          cursor={true}
                          cursorStyle="▋"
                          keepText={true}
                        />
                      </div>
                    </div>
                  </Card>
                </h1>
              </div>
            </div>

            {/* Right content */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-0 flex items-center justify-center lg:block">
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
            className="absolute left-1/2 bottom-8 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground hover:text-white transition-colors"
          >
            <span className="text-sm">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </Card>
      </motion.section>
    </div>
  );
};

export default HeroSection;

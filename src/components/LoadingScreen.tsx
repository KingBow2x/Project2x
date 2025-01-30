import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextScramble } from "./ui/text-scramble";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [showEnter, setShowEnter] = useState(false);
  const [loadingText, setLoadingText] = useState("Initialising systems...");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const texts = [
      "Initialising systems...",
      "Establishing secure connection...",
      "Decrypting protocols...",
      "Access granted.",
    ];
    let currentIndex = 0;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const target = ((currentIndex + 1) / texts.length) * 100;
        const increment = Math.min(target - prev, 2);
        const newProgress = prev + increment;

        if (newProgress >= target && currentIndex < texts.length - 1) {
          currentIndex++;
          setLoadingText(texts[currentIndex]);
        } else if (newProgress >= 100) {
          clearInterval(progressInterval);
          setShowEnter(true);
        }

        return newProgress;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4"
    >
      <div className="w-full max-w-3xl space-y-8">
        <TextScramble
          className="text-[rgb(0,255,0)] font-mono text-xl md:text-2xl text-center"
          speed={0.02}
          characterSet="01"
        >
          {loadingText}
        </TextScramble>

        <AnimatePresence mode="wait">
          {!showEnter ? (
            <motion.div
              key="progress"
              className="w-full px-4"
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="w-full h-1.5 bg-black relative overflow-hidden rounded-sm border border-[#00ff00]/20">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-[#00ff00] rounded-sm"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="mt-2 text-right text-[#00ff00] font-mono text-sm">
                {Math.round(progress)}%
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <Button
                onClick={() => {
                  const button = document.querySelector("button");
                  if (button) button.disabled = true;

                  // Add a slight delay before completing
                  setTimeout(() => {
                    onComplete();
                  }, 300);
                }}
                className="bg-[rgb(0,255,0)] text-black hover:bg-[rgb(0,230,0)] font-mono text-lg px-8 py-6 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="font-bold relative z-10">ENTER NOW</span>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 48 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: Math.random() }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="h-1 bg-[#00ff00] opacity-20"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

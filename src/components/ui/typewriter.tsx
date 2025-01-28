import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  words?: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export function Typewriter({
  words = ["Hello World"],
  speed = 50,
  delay = 2000,
  className,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, delay, isDeleting, speed, words]);

  return (
    <div
      className={cn(
        "font-mono text-sm bg-black/80 p-4 rounded-lg border border-white/10",
        "min-h-[200px] w-full",
        className,
      )}
    >
      <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-white/50">terminal</div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-green-400">$</span>
        <span className="text-white">{currentText}</span>
        <span className="w-2 h-4 bg-white/70 animate-cursor-blink" />
      </div>
    </div>
  );
}

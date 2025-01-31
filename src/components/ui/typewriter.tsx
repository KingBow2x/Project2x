import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  cursorStyle?: string;
  keepText?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 50,
  delay = 1000,
  className = "",
  cursor = true,
  cursorStyle = "|",
  keepText = false,
}) => {
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (currentWordIndex >= words.length) {
          // Reset for loop
          setCompletedLines([]);
          setCurrentLine("");
          setCurrentWordIndex(0);
          setCurrentCharIndex(0);
          return;
        }

        if (currentCharIndex < words[currentWordIndex].length) {
          setCurrentLine(
            (prev) => prev + words[currentWordIndex][currentCharIndex],
          );
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setCompletedLines((prev) => [...prev, currentLine]);
          setCurrentLine("");
          setCurrentCharIndex(0);
          setCurrentWordIndex((prev) => prev + 1);
        }
      },
      currentCharIndex === 0 ? delay : speed,
    );

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, words, speed, delay]);

  return (
    <div className={className}>
      {completedLines.map((line, index) => (
        <div key={index} className="flex">
          <span className="text-green-400">$</span>
          <span className="text-white ml-2">{line}</span>
        </div>
      ))}
      {currentWordIndex < words.length && (
        <div className="flex">
          <span className="text-green-400">$</span>
          <span className="text-white ml-2">{currentLine}</span>
          {cursor && (
            <span className="animate-cursor-blink text-white">
              {cursorStyle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

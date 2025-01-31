import React, { useState, useEffect } from "react";

interface TerminalTextProps {
  commands: string[];
  speed?: number;
  initialDelay?: number;
  className?: string;
}

export const TerminalText: React.FC<TerminalTextProps> = ({
  commands,
  speed = 30,
  initialDelay = 1000,
  className = "",
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= commands.length) return;

    const timer = setTimeout(() => {
      if (charIndex === 0 && lineIndex === 0) {
        // Initial delay for the first character of the first line
        startTyping();
      }
    }, initialDelay);

    return () => clearTimeout(timer);
  }, []);

  const startTyping = () => {
    const intervalId = setInterval(() => {
      const currentCommand = commands[lineIndex];

      if (charIndex < currentCommand.length) {
        setCurrentLine((prev) => prev + currentCommand[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(intervalId);
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLine("");
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);

        if (lineIndex < commands.length - 1) {
          setTimeout(startTyping, 500); // Delay before starting next line
        }
      }
    }, speed);

    return () => clearInterval(intervalId);
  };

  return (
    <div className={`font-mono ${className}`}>
      {displayedLines.map((line, index) => (
        <div key={index} className="text-green-400">
          $ {line}
        </div>
      ))}
      {currentLine && (
        <div className="text-green-400">
          $ {currentLine}
          <span className="animate-cursor-blink">▋</span>
        </div>
      )}
    </div>
  );
};

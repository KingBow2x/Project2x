import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter = ({
  words,
  speed = 50,
  delay = 1500,
  className = "",
}: TypewriterProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= words.length) return;

    const currentLine = words[currentLineIndex];
    let timeout;

    if (currentText.length < currentLine.length) {
      timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentText("");
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentLineIndex, currentText, words, speed, delay]);

  return (
    <div className={className}>
      {words.slice(0, currentLineIndex).map((line, index) => (
        <div key={index} className="text-white/90">
          {line}
        </div>
      ))}
      <div className="text-white/90">
        {currentText}
        <span
          className={`opacity-70 ${isCursorVisible ? "animate-cursor-blink" : "opacity-0"}`}
          aria-hidden="true"
        >
          |
        </span>
      </div>
    </div>
  );
};

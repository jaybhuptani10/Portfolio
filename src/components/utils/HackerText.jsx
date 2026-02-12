import { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const HackerText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const startScramble = useCallback(() => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  }, [text]);

  useEffect(() => {
    startScramble();
    return () => clearInterval(intervalRef.current);
  }, [startScramble]);

  return (
    <span
      onMouseEnter={startScramble}
      className={`cursor-default font-mono ${className}`} // font-mono helps the effect look techy
    >
      {displayText}
    </span>
  );
};

HackerText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

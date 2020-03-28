import React, { useState, useEffect } from "react";
import "./Help.scss";

export const Help = () => {
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHovering(false);
    }, 3000);
  }, []);

  const handleHover = () => {
    setHovering(!hovering);
  };
  return (
    <div className="help">
      <div
        className="mouseOver"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <span>?</span>
      </div>
      <div className={`instructionContainer${hovering ? " show" : ""}`}>
        <span>
          Click and drag to move. Scroll to zoom. Click a country to view stats.
        </span>
      </div>
    </div>
  );
};

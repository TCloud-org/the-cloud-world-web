import React, { useEffect, useState } from "react";

const ParallaxScroll: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div
        className="parallax-item"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        {/* Content for parallax item */}
      </div>
      <div
        className="parallax-content"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        {/* Content for parallax content */}
      </div>
    </div>
  );
};

export default ParallaxScroll;

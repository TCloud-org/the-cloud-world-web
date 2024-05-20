import React, { useEffect } from "react";

export const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      data-url="https://calendly.com/tungxd301/intro"
      className="h-[700px] min-w-80 calendly-inline-widget"
    ></div>
  );
};

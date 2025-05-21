import React, { useState, useEffect } from "react";

export default function FadeIn({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-700 ease-out transform ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}>
      {children}
    </div>
  );
}

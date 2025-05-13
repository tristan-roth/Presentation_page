import React, { useEffect, useState } from "react";

export default function HyperspaceIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 4000); // durée ≈ vidéo
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-50">
      <video
        src="/hyperspace.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

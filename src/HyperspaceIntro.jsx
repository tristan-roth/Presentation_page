import React, { useEffect, useState } from "react";

export default function HyperspaceIntro({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-50">
      <video
        src="/output.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

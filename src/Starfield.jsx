import React, { useEffect, useRef } from "react";

const Starfield = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;

    //const ctx = canvas.getContext("2d");
    // let width = (canvas.width = window.innerWidth);
    // let height = (canvas.height = window.innerHeight);

    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);


    const numStars = 150;
    const isMobile = window.innerWidth < 768;

    const mouse = { x: width / 2, y: height / 2, vx: 0, vy: 0 };

    // Init stars
    stars.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: isMobile ? Math.random() * 0.6 + 0.4 : Math.random() * 0.7 + 0.3,
      dx: Math.random() * 0.2 - 0.1,
      dy: Math.random() * 0.2 - 0.1,
    }));

    const animate = () => {
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      stars.current.forEach((star) => {
        // Apply mouse speed
        star.x += star.dx + mouse.vx * 0.010;
        star.y += star.dy + mouse.vy * 0.010;

        // Wrap
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Draw
        // ctx.beginPath();
        const drawX = Math.round(star.x * 10) / 10;
        const drawY = Math.round(star.y * 10) / 10;
        ctx.beginPath();
        ctx.arc(drawX, drawY, star.r, 0, Math.PI * 2);

        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      });

      // slow down velocity gradually
      mouse.vx *= 0.92;
      mouse.vy *= 0.92;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      mouse.vx = dx;
      mouse.vy = dy;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    ></canvas>
  );
};

export default Starfield;

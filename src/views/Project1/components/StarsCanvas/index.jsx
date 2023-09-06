import { useRef, useEffect } from "react";
import "./styles.css";

class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
    ctx.fillStyle = "white";
    ctx.fill();
  }
}

const StarsCanvas = () => {
  const starsCanvasRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = starsCanvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 1.5 + 0.5;
      starsRef.current.push(new Star(x, y, size));
    }

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        star.draw(ctx);
      });

      requestAnimationFrame(animateStars);
    };
    animateStars();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="starsCanvas" ref={starsCanvasRef}></canvas>;
};

export default StarsCanvas;

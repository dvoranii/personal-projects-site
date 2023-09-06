import { useRef, useEffect } from "react";
import cloudImageSrc from "../../assets/images/cloud-realistic.png";
import "./styles.css";

class Cloud {
  constructor(img, x, y, size) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = Math.random() * 0.2 + 0.1;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  update(canvasWidth) {
    this.x += this.speed;
    if (this.x > canvasWidth) {
      this.x = -this.size;
    }
  }
}

const CloudCanvas = () => {
  const cloudCanvasRef = useRef(null);
  const cloudsRef = useRef([]);

  useEffect(() => {
    const canvas = cloudCanvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cloudImage = new Image();
    cloudImage.src = cloudImageSrc;

    cloudImage.onload = () => {
      for (let i = 0; i < 5; i++) {
        cloudsRef.current.push(
          new Cloud(
            cloudImage,
            Math.random() * (canvas.width * 1.5),
            Math.random() * (canvas.height / 12),
            600
          )
        );
      }

      const animateClouds = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#87CEEB");
        gradient.addColorStop(1, "#fff");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        cloudsRef.current.forEach((cloud) => {
          cloud.update(canvas.width);
          cloud.draw(ctx);
        });

        requestAnimationFrame(animateClouds);
      };
      animateClouds();
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <canvas id="cloudCanvas" ref={cloudCanvasRef}></canvas>;
};

export default CloudCanvas;

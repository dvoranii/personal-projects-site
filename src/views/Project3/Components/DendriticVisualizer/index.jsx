import "./styles.css";

import { useRef, useState, useEffect } from "react";

function DendriticVisualizer() {
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }, []);

  const canvasRef = useRef(null);

  const [minBranches, setMinBranches] = useState("");
  const [maxBranches, setMaxBranches] = useState("");

  const [minBranchesValid, setMinBranchesValid] = useState(true);
  const [maxBranchesValid, setMaxBranchesValid] = useState(true);

  const getRandom = (min, max) => Math.random() * (max - min) + min;

  const drawLine = (ctx, x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  const validateInput = () => {
    let minValid = true;
    let maxValid = true;

    const min = parseInt(minBranches, 10);
    const max = parseInt(maxBranches, 10);

    if (isNaN(min) || min < 0 || min > 2 || min > max) {
      minValid = false;
    }
    if (isNaN(max) || max < 3 || max > 10) {
      maxValid = false;
    }

    setMinBranchesValid(minValid);
    setMaxBranchesValid(maxValid);

    return minValid && maxValid;
  };

  const handleGrowDendriteClick = () => {
    if (!validateInput()) return;

    const ctx = canvasRef.current.getContext("2d");
    console.log(ctx);
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const min = parseInt(minBranches, 10);
    const max = parseInt(maxBranches, 10);
    growDendrite(
      ctx,
      canvasRef.current.width / 2,
      canvasRef.current.height / 1.7,
      -Math.PI / 2,
      10,
      min,
      max
    );
  };

  const growDendrite = (ctx, x, y, angle, n, minBranches, maxBranches) => {
    if (n <= 0) return;

    const branchLength = 40;
    const newX = x + branchLength * Math.cos(angle);
    const newY = y + branchLength * Math.sin(angle);
    drawLine(ctx, x, y, newX, newY);

    const branchingProbability = 0.8;
    if (Math.random() < branchingProbability) {
      const numBranches = Math.floor(getRandom(minBranches, maxBranches + 1));

      for (let i = 0; i < numBranches; i++) {
        const newAngle = angle + getRandom(-Math.PI / 4, Math.PI / 4);
        growDendrite(
          ctx,
          newX,
          newY,
          newAngle,
          n - 1,
          minBranches,
          maxBranches
        );
      }
    }
  };

  return (
    <div className="container">
      <div className="canvas-wrapper">
        <canvas
          ref={canvasRef}
          width="800"
          height="700"
          style={{ border: "1px solid black" }}
        ></canvas>
      </div>
      <div className="form-wrapper">
        <div className="input-wrapper-outer">
          <div className="input-wrapper-1">
            <input
              placeholder="Minimum branches"
              value={minBranches}
              onChange={(e) => setMinBranches(e.target.value)}
              className={`min-branches ${!minBranchesValid ? "error" : ""}`}
            />
            <label
              className={`minBranch-label ${!minBranchesValid ? "active" : ""}`}
            >
              Only values 0, 1, and 2 are valid here
            </label>
          </div>
          <div className="input-wrapper-2">
            <input
              value={maxBranches}
              onChange={(e) => setMaxBranches(e.target.value)}
              placeholder="Maximum branches"
              className={`max-branches ${!maxBranchesValid ? "error" : ""}`}
            />
            <label
              className={`maxBranch-label ${!maxBranchesValid ? "active" : ""}`}
            >
              Please use a number between 3 and 10 (max)
            </label>
          </div>
        </div>
        <button className="new-branch__btn" onClick={handleGrowDendriteClick}>
          New Branch
        </button>
      </div>
    </div>
  );
}

export default DendriticVisualizer;

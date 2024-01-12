import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        const randomPercentage = Math.floor(Math.random() * 21); // Adjust the range of percentages as needed
        setResult(randomPercentage);
        setIsSpinning(false);
      }, 2000);
    }
  }, [isSpinning]);

  const startSpinner = () => {
    setResult(null); // Reset result when starting spinner
    setIsSpinning(true);
  };

  const renderSlices = () => {
    const slices = [];
    for (let i = 0; i < 8; i++) {
      slices.push(
        <div
          key={i}
          className="slice"
          style={{
            transform: `rotate(${i * (360 / 8)}deg)`,
          }}
        >
          {isSpinning && <span className="percentage">{result}%</span>}
        </div>
      );
    }
    return slices;
  };

  return (
    <div className="App">
      <h1>Discount Spinner</h1>
      <div className="spinner-container">
        <div className={`spinner ${isSpinning ? "spin" : ""}`}>
          {renderSlices()}
        </div>
      </div>
      <div className="button-container">
        <button onClick={startSpinner} disabled={isSpinning}>
          {isSpinning ? "Spinning..." : "Spin the Spinner"}
        </button>
      </div>
      {result !== null && <p>Result: {result}% discount</p>}
    </div>
  );
}

export default App;

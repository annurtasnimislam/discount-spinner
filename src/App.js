import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(
    Array.from({ length: 8 }, () => Math.floor(Math.random() * 21))
  );

  useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        setIsSpinning(false);
      }, 4000);
    }
  }, [isSpinning]);

  const startSpinner = () => {
    setResult(Array.from({ length: 8 }, () => Math.floor(Math.random() * 21))); // Reset result to new random percentages when starting spinner
    setIsSpinning(true);
  };

  console.log("result", result);

  return (
    <div className="App">
      <h1>Discount Spinner</h1>
      <div className="spinner-container">
        <div className={`spinner ${isSpinning ? "spin" : ""}`}>
          {result.map((percentage, index) => (
            <div
              key={index}
              className="slice"
              style={{
                transform: `rotate(${index * (360 / 8)}deg)`,
              }}
            >
              <span className="percentage">{percentage}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button onClick={startSpinner} disabled={isSpinning}>
          {isSpinning ? "Spinning..." : "Spin the Spinner"}
        </button>
      </div>
      {result.length > 0 && !isSpinning && <p>Result: {result[2]}% discount</p>}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState([20, 10, 30, 40, 50, 60, 70, 80, 0, 90]);

  useEffect(() => {
    if (isSpinning) {
      setTimeout(() => {
        setIsSpinning(false);
      }, 4000);
    }
  }, [isSpinning]);

  const startSpinner = () => {
    setResult(Array.from({ length: 10 }, () => Math.floor(Math.random() * 21))); // Reset result to new random percentages when starting spinner
    setIsSpinning(true);
  };

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
                transform: `rotate(${index * (360 / 10)}deg)`,
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

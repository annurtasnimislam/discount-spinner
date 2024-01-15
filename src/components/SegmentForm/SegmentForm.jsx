import React, { useState } from "react";
import classes from "./SegmentForm.module.css";

const SegmentForm = ({ setSegments, setSegColors }) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedType, setSelectedType] = useState("percentage");
  const [color, setColor] = useState("#000000");

  const handleAddSegment = () => {
    const newSegment =
      selectedType === "percentage"
        ? `${selectedValue}%`
        : `${selectedValue} ${selectedType}`;
    setSegments((prevSegments) => [...prevSegments, newSegment]);
    setSegColors((prevSegColors) => [...prevSegColors, color]);
    setSelectedValue(0);
    setSelectedType("percentage");
    setColor("#000000");
  };

  return (
    <div className={classes.wrapper}>
      <h3>Add Segment</h3>
      <label>
        Value:
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(parseInt(e.target.value, 10))}
        >
          {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <label>
        Type:
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="percentage">Percentage</option>
          <option value="fixed">Fixed</option>
        </select>
      </label>
      <label>
        Color:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>
      <button onClick={handleAddSegment}>Add Segment</button>
    </div>
  );
};

export default SegmentForm;

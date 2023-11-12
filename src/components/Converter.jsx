// src/Converter.js
import React, { useState } from 'react';
import '../styles/style.css';

const Converter = () => {
  const [inches, setInches] = useState('');
  const [result, setResult] = useState('');

  const convertInchesToMeters = (inches) => {
    const meters = inches * 0.0254;
    return meters.toFixed(2); 
  };

  const calculate = () => {
    if (!isNaN(inches)) {
      const meters = convertInchesToMeters(inches);
      setResult(`${inches} Inches = ${meters} Meters`);
    } else {
      setResult('Please enter a valid number of inches.');
    }
  };

  return (
    <div className="Container">
      <div className="center-part">
        <h2>Inch-To-Meter Converter</h2>
        <br />
        <div className="input-part">
          <label>Number of inches:</label>
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter number of inches here.."
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            className="inches"
          />
          <br />
          <br />
          <button onClick={calculate}>Calculate</button>
          <br />
          <br />
          <input
            type="text"
            placeholder="Result will appear here"
            value={result}
            className="result"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;

import React, { useState } from 'react';
import './index.module.css'; // Import the CSS file

export type ItemType = {
  Height: Number;
  Weight: Number;
};

export type Type = {
  blockType: 'bmi';
  blockName?: string;
  bmi: ItemType[];
};

export const Component: React.FC<Type> = (props) => {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);
  
    const calculateBMI = () => {
      if (height && weight) {
        const heightInMeters = parseFloat(height) / 100;
        const weightInKg = parseFloat(weight);
        const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
        setBMI(bmiValue);
      }
    };
  
    return (
      <div className ='bmi-calculator'>
        <label>
          Height (cm):
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
        <br />
        <label>
          Weight (kg):
          <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <br />
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi !== null && <p>Your BMI: {bmi}</p>}
      </div>
    );
  };
  
  
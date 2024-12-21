import React, { useState } from 'react'; 

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const Add = () => setResult(Number(num1) + Number(num2));
  const Subtract = () => setResult(Number(num1) - Number(num2));
  const Multiply = () => setResult(Number(num1) * Number(num2));
  const Divide = () => setResult(Number(num1) / Number(num2));

  return (
    <div>
      <input
        type="number"
        placeholder="first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <button onClick={Add}>Add</button>
        <button onClick={Subtract}>Subtract</button>
        <button onClick={Multiply}>Multiply</button>
        <button onClick={Divide}>Divide</button>
      </div>
      {<h1>Result: {result}</h1>}
    </div>
  );

}
export default Calculator;

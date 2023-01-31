import { React } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => { 

  const [resultT1, setResultT1] = useState([]);
  const [inputArrayT1, setInpuArrayT1] = useState([]);
  const [inputTargetT1, setInputTargetT1] = useState('');

  function task1(array, numOfTarget) {
    for (let i=0; i<array.length; i++) {
      const index = numOfTarget - array[i];
      const indexPos = array.indexOf(index) - 1;
      if (indexPos !== -1 && indexPos !== index) {
        return [i, indexPos];
      }
    }
  }

  const handleClickT1 = () => {
    setResultT1(task1(inputArrayT1, inputTargetT1));
  }

  return (
    <div className="home-page">
      <div>Task 1</div>
      <div>Topic: Given an array of integers, return indices of the two numbers such that they add up to a specific target.</div>
        <div>
          <div>Input an array seperate by ","</div>
          <input
            id='input'
            className="text-input"
            name="text"
            placeholder="Input an array"
            onChange={e => setInpuArrayT1(e.target.value)}
          />
        </div>
        <div>
          <div>Input specific number of target</div>
          <input
            id='input'
            className="text-input"
            name="text"
            placeholder="Input number of target"
            onChange={e => setInputTargetT1(e.target.value)}
          />
        </div>
        <span> </span>
        <Button className="btn-calculate" onClick={handleClickT1}>
          Click
        </Button>
      <div>Return: {resultT1}</div>
    </div>
  );
}

export default App;

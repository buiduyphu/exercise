import { React } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => { 

  const [inputNumber, setInputNumber] = useState('');
  const [output, setOutput] = useState('');

  function task2(number) {
    const arrNew = number.split(''); 
    const arrRev = arrNew.reverse();
    
    if (-2147483648 < number && number < 2147483647) {
      for (let i=0; i<arrRev.length; i++) {
        if (arrRev[0] === '0' || isNaN(arrRev[i])) {
          arrRev.splice(i, 1)
        }
      }
      if (number < 0) {
        arrRev.unshift('-');
      }
      arrRev.join('');
      return arrRev;
    } else return 0;
  }
  
  const handleClick = () => {
    setOutput(task2(inputNumber));
  }
  
  return (
    <div className="home-page">
      <div>
        <div>Task2</div>
        <div>Topic: Given a 32-bit signed integer, reverse digits of an integer.</div>
        <div>
          <div>Input an 32-bit signed integer</div>
          <input
            id='input'
            className="text-input"
            name="text"
            placeholder="Input number"
            onChange={e => setInputNumber(e.target.value)}
          />
        </div>
        <span> </span>
        <Button className="btn-calculate" onClick={handleClick}>
          Click
        </Button>
      <div>Output: {output}</div>
      </div>
    </div>
    
  );
}

export default App;

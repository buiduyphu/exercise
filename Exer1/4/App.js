import { React } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => { 

  const [inputNumber, setInputNumber] = useState('');
  const [output, setOutput] = useState('');

  function convertSymbols(string) {
    if (string === 'I') return 1
    else if (string === 'V') return 5
    else if (string === 'X') return 10
    else if (string === 'L') return 50
    else if (string === 'C') return 100
    else if (string === 'D') return 500
    else if (string === 'M') return 1000
    else return -1;
  }
  
  function task4(number) {
    let result = 0;
  
    for (let i=0; i<number.length; i++) {

      const firstNum = convertSymbols(number[i]);
      const secondNum = convertSymbols(number[i+1]);
      
      if (firstNum >= secondNum) {
        result = result + firstNum;
      } else {
        result = result + secondNum - firstNum;
        i++;
      }
    }

    if (result > 1 && result < 3999) {
      return result;
    } else return false;
     
  }
  
  const handleClick = () => {
    if (!task4(inputNumber)) {
      alert('Input number in the range from 1 to 3999.')
    } else setOutput(task4(inputNumber));
  }
  
  return (
    <div className="home-page">
      <div>
        <div>Task 4</div>
        <div>Topic: Given a roman numeral, convert it to an integer.</div>
        <div>
          <div>Input an roman numeral, which is guaranteed to be within the range from 1 to 3999.</div>
          <input
            id='input'
            className="text-input"
            name="text"
            placeholder="1 <= number <= 3999"
            onChange={e => setInputNumber(e.target.value)}
          />
        </div>
        <span> </span>
        <Button className="btn-calculate" onClick={handleClick}>
          Click
        </Button>
      <div>Converted: {output}</div>
      </div>
    </div>
    
  );
}

export default App;

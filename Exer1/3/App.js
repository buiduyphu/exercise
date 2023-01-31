import { React } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => { 

  const [inputNumber, setInputNumber] = useState('');
  const [output, setOutput] = useState('');
  
  function task3(number) {
    if (number < 0) {
      return false;
    } else if (number >= 0 && number < 10) {
      return true;
    } else if (number == reverse(number)) {
      return true;
    } else return false;
  }

  function reverse(number) {
    let revNum = 0;
    while(number > 0) {
      revNum = revNum * 10 + number % 10;
      number = parseInt( number / 10);
    }
    return revNum;
  }
  
  const handleClick = () => {
    if (task3(inputNumber)) {
      setOutput('TRUE')
    } else setOutput('FALSE');
  }
  
  return (
    <div className="home-page">
      <div>
        <div>Task 3</div>
        <div>Topic: Determine whether an integer is a palindrome.</div>
        <div>
          <div>Input an integer</div>
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
      <div>Return: {output}</div>
      </div>
    </div>
    
  );
}

export default App;

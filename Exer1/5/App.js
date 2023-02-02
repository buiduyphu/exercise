import { React } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => { 

  const [inputString, setInputString] = useState('');
  const [output, setOutput] = useState('');

  function findPrefix(string) {
    let i=0;
    let arrSplit = new Array();
    arrSplit = string.split(',');
    if (arrSplit.length === 0) {
      return "";
    } else if (arrSplit.length === 1) {
      return arrSplit[0];
    } else {
      while (arrSplit[0][i] && arrSplit.every(item => item[i] === arrSplit[0][i])) {
        i++;
      }
    }
    return arrSplit[0].substr(0,i);
  }


  const handleClick = () => {
    setOutput(findPrefix(inputString));
  }
  
  return (
    <div className="home-page">
      <div>
        <div>Task 5</div>
        <div>Topic: Given a string, find the longest common prefix string amongst an array of strings</div>
        <div>
          <div>Input an string, separate by ','</div>
          <input
            id='input'
            className="text-input"
            name="text"
            placeholder="Input string"
            onChange={e => setInputString(e.target.value)}
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

import { React } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const App = () => { 

  const [inputString1, setInputString1] = useState('');
  const [inputString2, setInputString2] = useState('');
  const [output, setOutput] = useState('');

  function calculate(list1, list2) {
    
    let string1 = list1.split('');
    string1 = string1.reverse();
    let string2 = list2.split('');
    string2 = string2.reverse();

    let s1 = '';
    let s2 = '';
    let sum = 0;
    let result = '';

    for (let i=0; i<string1.length; i++) {
      if (!isNaN(string1[i]) && string1[i] !== ' ') {
        s1 = s1 + string1[i];
      }
    }
    for (let i=0; i<string2.length; i++) {
      if (!isNaN(string2[i]) && string2[i] !== ' ') {
        s2 = s2 + string2[i];
      }
    }

    sum = (parseInt(s1) + parseInt(s2)).toString();
    sum = sum.split('');
    sum = sum.reverse();
    sum = sum.join('');

    for (let i=0; i<sum.length - 1; i++) {
      result = result + sum[i] + ' -> ';
    }
    result = result + sum.charAt(sum.length - 1);
   

    return result;
  }

  const handleClick = () => {
    setOutput(calculate(inputString1, inputString2));
  }
  
  return (
    <div className="home-page">
      <div>
        <div>Task 6</div>
        <div>Topic: Add the two numbers and return it as a linked list.</div>
        <div>
          <div>Input 2 lists, which is representing two non-negative integers</div>
          <div>Ex: (2 -> 4 -> 3) for number 342</div>
          <input
            id='input'
            className="text-input"
            name="text"
            placeholder="Input list 1"
            onChange={e => setInputString1(e.target.value)}
          />
          <input
            id='input'
            className="text-input"
            name="text"
            placeholder="Input list 2"
            onChange={e => setInputString2(e.target.value)}
          />
        </div>
        <span> </span>
        <Button className="btn-calculate" onClick={handleClick}>
          Calculate
        </Button>
      <div>Output: {output}</div>
      </div>
    </div>
    
  );
}

export default App;

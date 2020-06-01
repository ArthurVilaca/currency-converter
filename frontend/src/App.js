import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [converted, setConverted] = useState(0);
  const [history, setHistory] = useState([]);
  const [originalOperator, setOriginalOperator] = useState('BRL');
  const [destinyOperator, setdestinyOperator] = useState('USD');

  const convert = () => {
    axios.post(process.env.REACT_APP_API_URL + '/convert', { amount: amount, from: originalOperator, to: destinyOperator })
      .then((response) => {
        setConverted(response.data)
        setHistory([...history, { from: originalOperator, to: destinyOperator, amount: amount, converted: response.data }])
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <div className='Title'>currency converter</div>
      <div className='Conversor'>
        <input value={amount} type="number" placeholder="Amount" onChange={e => setAmount(e.target.value)} />
        <select value={originalOperator} onChange={e => setOriginalOperator(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='BRL'>BRL</option>
          <option value='EUR'>EUR</option>
          <option value='JPY'>JPY</option>
        </select>
        <span>to</span>
        <select value={destinyOperator} onChange={e => setdestinyOperator(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='BRL'>BRL</option>
          <option value='EUR'>EUR</option>
          <option value='JPY'>JPY</option>
        </select>
      </div>
      <div className='Button'>
        <button onClick={convert}>Convert</button>
      </div>
      <div className='ConvertedValue'>
        new value: { converted }
      </div>
      <div className='History'>
        <div>historic:</div>
        {
          history.map((history, index) => {
            return(
              <div key={index}>
                <span>{ history.amount } { history.from } </span>
                <span> To </span>
                <span>{ history.converted } { history.to } </span>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

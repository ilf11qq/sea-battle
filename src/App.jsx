import React, { useState, useEffect } from 'react'
import Board from './components/Board/'
import './App.css';

function App() {
  const [arr, setArr] = useState(new Array(10).fill(0).map(el => new Array(10).fill(0)));
  const changeArr = (value) => {
    const arr2 = arr.slice();
    arr2[Math.floor(value/10)][value % 10] = -1;
    setArr(arr2);
  }
  return (
    <Board arr={arr} changeArr={changeArr}/>
  )
}

export default App;

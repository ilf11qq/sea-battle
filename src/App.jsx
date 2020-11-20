import React, { useState } from 'react'
import Board from './components/Board/'
import './components/utils/initialize'
import './App.css';
import initiliaze from './components/utils/initialize';


function App() {
  const [arr, setArr] = useState(initiliaze(10))
  const changeArr = (row, column) => {
    const arr2 = [...arr]
    arr2[row][column].isClicked = true;
    setArr(arr2);
  }
  return (
    <Board arr={arr} changeArr={changeArr}/>
  )
}

export default App;

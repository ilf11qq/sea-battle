import React, { useState } from 'react'
import Board from './components/Board/'
import './components/utils/initialize'
import './App.css';
import { isSquarePossible, randomizeBoard} from './components/utils/initialize';


function App(props) {
  // const [arr, setArr] = useState(initiliaze(10))
  // const [arr, setArr] = useState(randomizeBoard())
  // const changeArr = (row, column) => {
  //   const arr2 = [...arr]
  //   arr2[row][column].isClicked = true;
  //   setArr(arr2);
  // }
  let arr = randomizeBoard()
  const end = () => {
    alert('end');
    arr = randomizeBoard();
  }
  return (
    <Board arr={arr} end={end}/>
  )
}

export default App;

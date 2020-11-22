import Board from './components/Board/'
import './components/utils/initialize'
import './App.css';
import {randomizeBoard} from './components/utils/initialize';


function App(props) {
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

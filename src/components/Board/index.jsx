import { useState } from 'react'
import Square from '../Square'
import './style.scss'

const Board = (props) => {
    const[board, setBoard] = useState(props.arr)
    const handleClick = (key) => {
        props.changeArr(key);
    }
    let list = new Array(100);
    for (let i = 0; i < 10; i++) {
        for (let g = 0; g < 10; g++) {
            list.push(<Square elem={props.arr[i][g]} player ={true} handleClick={handleClick} direction='right' key={i.toString() + g} value={i.toString() + g} value2={props.arr[i][g]}/>)
        }
    }
    // const list = props.arr.map( elem => {
    //      return <Square elem={elem[0]} player ={true} handleClick={handleClick} direction='right' value={i++}/>
    // })
    return (
        <div className='field'>{list}</div>
    )
}
export default Board;
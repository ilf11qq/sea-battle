import { useEffect, useState } from 'react'
import Square from '../Square'
import './style.scss'
const Board = (props) => {
    const [board, setBoard] = useState(props.arr)
    const [items, setItems] = useState(2)
    const changeBoard = (row, column) => {
        const tempBoard = [...board]
        tempBoard[row][column].isClicked = true;
        if (!(tempBoard[row][column].isEmpty)) {
            setItems(items - 1)
        }
        setBoard(tempBoard);
    }
    useEffect (() => {
        if (items < 1) {
            props.end();
        }
    })
    let list = props.arr.flat().map(item => <Square elem={item} key={item.row.toString() + item.column.toString()} handleClick={changeBoard}/>)
    return (
        <div className='field' >{list}</div>
    )
}
export default Board;
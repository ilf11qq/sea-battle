import Square from '../Square'
import './style.scss'

const Board = (props) => {
    const handleClick = (row, column) => {
        props.changeArr(row, column);
    }
    const list = props.arr.flat().map(item => <Square elem={item} key={item.row.toString() + item.column.toString()} handleClick={handleClick}/>)
    return (
        <div className='field' >{list}</div>
    )
}
export default Board;
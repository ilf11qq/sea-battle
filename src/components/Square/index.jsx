import './style.scss'


const Square = (props) => {
    let classes = 'square ' + (props.player && "square__" + props.direction);
    const click = () => {
        if (!props.elem.isClicked) {
            props.handleClick(props.elem.row, props.elem.column);
            return
        }
    }

    return (
        <div className={classes} onClick={click}></div>
    )
}
export default Square;

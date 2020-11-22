import './style.scss'


const Square = (props) => {
    let classes = 'square ' + ((!props.elem.isEmpty && props.elem.isClicked) ? "square__has-item " : '') + ((props.elem.isEmpty && props.elem.isClicked) ? "square__has-clicked " : "");
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

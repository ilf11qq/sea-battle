import React, { useState } from 'react'
import './style.scss'


const Square = (props) => {
    const [clicked, setClicked] = useState(false);
    let classes = 'square ' + (props.player && "square__" + props.direction);
    const click = () => {
        if (!clicked) {
            setClicked(true);
            props.handleClick(props.value);
            return
        }
    }

    return (
        // props.elem ? <div className={"square " + 'square--' + props.player} onClick={props.click} >{props.elem}</div> : 
        // <div className={"square " + 'square--' + props.player} onClick={props.click} ></div>
        <div className={classes} onClick={click}>{props.value} {props.value2}</div>
    )
}
export default Square;

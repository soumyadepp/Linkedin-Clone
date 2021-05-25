import React from 'react'
import './InputOptions.css';

function InputOptions({ title, Icon, color, handlerFunction }) {
    return (
        <div className="inputOption">
            <Icon style={{ color: color }} />
            <button onClick={handlerFunction}>{title}</button>
        </div>
    )
}

export default InputOptions;

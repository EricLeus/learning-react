import React from 'react';
import './Toggle.css'

const Toggle = props => {
    return (
        <label className="switch">
            <input type="checkbox" onClick={props.onFlip}/>
            <span className="slider"></span>
        </label>
    );
};

export default Toggle;
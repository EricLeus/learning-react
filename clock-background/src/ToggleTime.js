import React from 'react';
import Toggle from './Toggle';
import './ToggleTime.css';

const ToggleTime = props => {
    return (
        <div className={`toggle-container ${props.dayOrNight}`}>
            <h1>12H</h1>
            <Toggle onFlip={props.onFlip}/>
            <h1>24H</h1>
        </div>
    );
};

export default ToggleTime;
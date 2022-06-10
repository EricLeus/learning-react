import React from 'react';
import './Clock.css'

const Clock = props => {
    return (
        <div className={`clock ${props.dayOrNight}`}>
            <h1>{props.time}</h1>
        </div>
    );
};

Clock.defaultProps = {
    time: '12:00:00PM',
    dayOrNight: 'day'
};

export default Clock;
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import ToggleTime from './ToggleTime';
import './index.css';

class App extends React.Component {
    state = { time: new Date().toLocaleTimeString(), format: '12H' };

    toggleFormat = () => {
        if(this.state.format === '12H') {
            this.setState({ format: '24H' });
        } else {
            this.setState({ format: '12H' });
        }
    }

    getDayOrNight() {
        const hour = parseInt(this.state.time.split(':')[0]);
        const meridiem = this.state.time.split(' ')[1];

        if(typeof meridiem !== 'undefined') {
            return ((hour >= 6 && meridiem === 'AM' && hour !== 12) || (hour < 6 && meridiem === 'PM')) ? 'day' : 'night';
        } else {
            return (hour >= 6 && hour < 18) ? 'day' : 'night';
        }
    }

    componentDidMount() {
        setInterval(() => {
            if(this.state.format === '12H') {
                this.setState({ time: new Date().toLocaleTimeString() });
            } else {
                this.setState({ time: new Date().toLocaleTimeString([], { hour12: false }) })
            }
        }, 1000);
    }

    render() {
        const dayOrNight = this.getDayOrNight();

        return (
            <div className={`app ${dayOrNight}`}>
                <Clock time={this.state.time} dayOrNight={dayOrNight}/>
                <ToggleTime dayOrNight={dayOrNight} onFlip={this.toggleFormat}/>
            </div>
        );
    }
};

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);
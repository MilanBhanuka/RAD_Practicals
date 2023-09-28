import React from 'react';

class Toggle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        isOn: false,
        };
    }
    handleToggle = () => {
        this.setState((prevState) => ({
        isOn: !prevState.isOn,
        }));
    };
    render() {
        const { isOn } = this.state;
        return (
        <div>
        <h3>Toggle</h3>
        <button onClick={this.handleToggle}>{isOn ? 'ON' : 'OFF'}</button>
        <p>Status: {isOn ? 'ON' : 'OFF'}</p>
        </div>
        );
    }
         
}
export default Toggle;

import React, { Component } from 'react';
import "./button.css";

class Button2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <button className="ripple flat">{this.props.children}</button>
        );
    }
}

export default Button2;
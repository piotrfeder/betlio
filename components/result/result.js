import React, { Component } from 'react';
import './result.css';

export class Result extends Component { 

    render() {
        let itemName = this.props.result;

        return (
            <div className="result">
             { itemName }
            </div>
        )
    }
}
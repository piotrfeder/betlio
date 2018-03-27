import React, { Component } from 'react';

export class Counter extends Component {

    render() {
        return(
            <div>Counted: {this.props.counter}</div>
        )
    }
}
import React, { Component } from 'react';
import { Counter } from './Counter.js';

export class Button extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            itemID: props.id
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() { 
            this.setState({
                count: this.state.count + 1
            })
    }


	render() {
		return(
            <div>
                <button id={this.props.id} onClick={this.handleClick} >Button</button>
                {this.state.itemID }
                <Counter counter={this.state.count} />
            </div>
			
		)
	}

}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export  class BtnMore extends Component {
    constructor(props){
        super(props);
        this.state = {
           
            itemName: this.props.name,
            itemId: this.props.id
        }
    }
        
        
        render() {
            return(
                <Link to={'/single_item/' + this.state.itemId}>Więcej o { this.state.itemName }</Link>
            )
        }
}
import React, {Component} from 'react';
import { Main } from './main.js';

export  class Home extends Component{
    constructor(props) {
        super();
        this.state = {
            title: props.title
        }

    }

    render() {
        return(
            <div class="ïtem__title">
                <h1>Home Page</h1>
                <Main />
            </div>
            
        )
    }

    
}
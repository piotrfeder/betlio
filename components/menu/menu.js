import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export class Menu extends Component {
    constructor() {
        super();
        this.state = {
            getData: [],
            loader: true

        }


    }

    

    render() {

        return (
            <nav className="navigation">
                <Link to={'/'} className="navigation__link">Home</Link>
                <Link to={'/leagues'} className="navigation__link">Leagues</Link>
            </nav>
        );
    }
}
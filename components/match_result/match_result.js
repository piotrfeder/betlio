import React, { Component } from 'react';
import './match_result.css';

export class MatchResult extends Component{

    render() {
        return(
            <div className="match__result">
                    <div className="match__goal">{this.props.home}</div>
                    <div className="match__goal">{this.props.away}</div>

             </div>

        )
    }
}
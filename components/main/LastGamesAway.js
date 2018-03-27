import React, { Component } from 'react';
import './last_matches.css';

export class LastGamesAway extends Component {
    render() {
        let itemName = this.props.matches;

        return (
            <div className="last-matches">
            
              {
                  itemName.map((item, key) => {
                      return <div className="last-match" key={key}>
                      <div className="last-match__team last-match__team--right">{item.lma_away} </div>
                      <div className="last-match__score"> { item.lma_homeGoal }</div>
                      <div className="last-match__divide">:</div>
                      <div className="last-match__score"> { item.lma_awayGoal}</div>   
                      <div className="last-match__team last-match__team--left"> { this.props.teamName }</div>
         

                      </div>
                  })
              }
            </div>
        )
    }
}
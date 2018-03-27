import React, { Component } from 'react';

export class LastGamesHome extends Component {  

    render() {
        let itemName = this.props.matches;

        return (
            <div className="last-matches">
              {
                  itemName.map((item, key) => {
                      return <div className="last-match" key={key}>
                      <div className="last-match__team last-match__team--right">{ this.props.teamName }</div>
                      <div className="last-match__score">{ item.lmh_homeGoal }</div>
                      <div className="last-match__divide">:</div>
                      <div className="last-match__score">{ item.lmh_awayGoal}</div>        
                    <div className="last-match__team last-match__team--left">{item.lmh_away}</div>

                      </div>
                  })
              }
            </div>
        )
    }
}
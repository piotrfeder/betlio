import React, { Component } from 'react';
import './last_matches.css';

export class LastGamesAwayStats extends Component {  

    render() {
        let itemName = this.props.stats;


        return (
            <div className="team__title">
            {
                this.props.name
            }
              {
                  itemName.map((item, key) => {
                      return <div className="last-stats" key={key}>
                          
                          <div className="last-stats__item">Conceded: <p>{ item.lma_scored }</p></div>
                          <div className="last-stats__item">Scored: <p>{  item.lma_conceded}</p></div>
                          <div className="last-stats__item">Over 1.5: <p>{ item.lma_over15 }</p></div>
                          <div className="last-stats__item">Under 1.5: <p>{ item.lma_under15 }</p></div>
                          <div className="last-stats__item">Over 2.5: <p>{ item.lma_over25 }</p></div>
                          <div className="last-stats__item">Under 2.5: <p>{ item.lma_under25 }</p></div>
                      </div>
                  })
              }
            </div>
        )
    }
}
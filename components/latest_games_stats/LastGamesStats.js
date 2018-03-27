import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class LastGamesHomeStats extends Component {
    render() {
        let itemName = this.props.stats;


        return (
            <div className="stats">
           
              {
                  itemName.map((item, key) => {
                      return <div className="last-stats" key={key}>
                            <div className="last-stats__item">Scored: <p>{ item.lmh_scored }</p></div>
                            <div className="last-stats__item">Conceded: <p>{ item.lmh_conceded }</p></div>
                            <div className="last-stats__item">Over 1.5: <p>{ item.lmh_over15 }</p></div>
                            <div className="last-stats__item">Under 1.5: <p>{ item.lmh_under15 }</p></div>
                            <div className="last-stats__item">Over 2.5: <p>{ item.lmh_over25 }</p></div>
                            <div className="last-stats__item">Under 2.5: <p>{ item.lmh_under25 }</p></div>

                      </div>
                  })
              }
            </div>
        )
    }
}


LastGamesHomeStats.propTypes = {
    stats: PropTypes.array
}
import React, { Component } from 'react';
import { BChart } from '../charts/chart.js';
import './match_stats.css';

export class MatchStats extends Component {

    render() {
        let itemName = this.props.stats;


        return (
            <div className="match-stats">
              {
                  itemName.map((item, key) => {
                      return <div className="match-stats__charts" key={key}>
                    
                    <BChart name="Over 1.5" home={item.h_overs15} away={item.a_unders15} />
                    <BChart name="Under 1.5" home={item.h_unders15} away={item.a_unders15} />
                    <BChart name='Over 2.5' home={item.h_overs} away={item.a_overs} />
                    <BChart name="Under 2.5" home={item.h_unders} away={item.a_unders} />
                    <BChart name="Av. Goals Scored" home={item.h_avscored} away={item.a_avscored} />
                    <BChart name="Av. Goals Conceded" home={item.h_avconceded} away={item.a_avconceded} />
                    <BChart name="Scored" home={item.h_scored} away={item.a_scored} />
                    <BChart name="Conceded" home={item.h_conceded} away={item.a_conceded} />
                    <BChart name="Scored in matches" home={item.h_scoredin} away={item.a_scoredin} />
                    <BChart name="Conceded In Matches" home={item.h_concededin} away={item.a_concededin} />
                      </div>
                  })
              }
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Result } from '../result/result.js';
import { Predict } from '../predict/predict.js';
import { TeamName } from '../team_name/teamName.js';
import { MatchStats} from '../match_stats/matchStats.js';
import { LastGamesAway } from '../main/LastGamesAway.js';
import { LastGamesAwayStats} from '../main/LastGamesAwayStats.js';
import { LastGamesHome } from '../main/LastGamesHome.js';
import { LastGamesHomeStats } from '../latest_games_stats/LastGamesStats.js';
import MetaTags from 'react-meta-tags';
import  Loader  from '../loader/loader.js';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.js';


import './single_match.css';


export class SingleMatch extends Component {
    constructor() {
        super();
        this.state = {
            getData: [],
            dane: undefined,
            home: [],
            away: [],
            stats: [],
            lastMatchesHome: [],
            lastMatchesHomeStats: [],
            lastMatchesAway: [],
            lastMatchesAwayStats: [],
            predict: '',
            predict15: '',
            predictHS: '',
            predictAS: '',
            homeGoal: '',
            awayGoal: '',
            loader: true
        }


    }

    

    componentDidMount() {
        let main = this;
        let  rhome = encodeURIComponent(main.props.match.params.home.trim());
        let  raway = encodeURIComponent(main.props.match.params.away.trim());
        
        let home = rhome.split('_').join(' ');
        let away = raway.split('_').join(' ');
       
        let url = 'https://api.betlio.com/matchinfo/index.php?home=' + home + '&away=' + away;

        if(window.fetch)
        {
            /* console.log('wspiera fetch'); */
        }
        else
        {
           /*  console.log('nie wpsiera fetch'); */
        }


        fetch(url)
            .then(function (response) {

                if (response.status !== 200) {

                }
                response.json().then(function (data) {
                       

                    let MatchItems = data.map((item) => {
                        return main.setState({
                           
                            home: item.home,
                            away: item.away,
                            stats: item.info,
                            lastMatchesHome: item.lmh,
                            lastMatchesHomeStats: item.lmhs,
                            lastMatchesAway: item.lma,
                            lastMatchesAwayStats: item.lmas,
                            predict: item.predict[0].predict,
                            predict15: item.predict[0].predict15,
                            predictHS: item.predict[0].predictHscore,
                            predictAS: item.predict[0].predictAscore,
                            homeGoal: item.result[0].hGoal,
                            awayGoal: item.result[0].aGoal,
                            loader: false
                        })
                    })

                    
                });

            })
    }





    render() {
        let propHome = this.props.match.params.home;
        let propAway = this.props.match.params.away;
        let rHome = propHome.split('_').join(' ');
        let rAway = propAway.split('_').join(' ');

        let homeName = rHome;
        let awayName = rAway;
        let metaDesc = homeName + ' vs. ' + awayName + ' check out match statistics and our predictions!'
        let metaTitle =  rHome + ' vs. ' + rAway + ' - Betlio.com';
        let num = 'idTag';
        let breadcrumbs = homeName + ' vs. ' + awayName;
        let matchResult = parseInt(this.state.homeGoal, 10) + parseInt(this.state.awayGoal, 10);

        return ( 
            <div className="single__match">
                <MetaTags>
                    <title>{ metaTitle }</title>
                    <meta name="description" content={metaDesc} id={num + 1 } />
                    <meta property="og:description" content={metaDesc} id={num + 2} />
                    <meta property="og:title" content={ metaTitle } id={num + 3} />
                </MetaTags>
                <Breadcrumbs breadcrumbs={breadcrumbs} />


                 { this.state.loader ? <Loader /> : null}
                <div className="match__full">
                <p className="match__section-title">Our predictions:</p>
                    <Predict predict={ this.state.predict } type="over25" mresult={matchResult}/>
                    <Predict predict={ this.state.predict15 } type="over15"  mresult={matchResult}/>
                    <Predict predict={ this.state.predictHS } type="hscore" mresult={matchResult}/>
                    <Predict predict={ this.state.predictAS } type="ascore" mresult={matchResult}/>
                </div>
                
                <div className="match__half-box">
                   
                    <div className="match__home">
                        <div className="match__header">
                            <TeamName name={homeName} teamData={this.state.home} />
                            <Result result={this.state.homeGoal}/>
                        </div>
                        <p className="match__section-title">Last 6 home games:</p>
                        <LastGamesHome matches={this.state.lastMatchesHome} teamName={ homeName }/>
                        <p className="match__section-title">Last 6 home games stats:</p>
                        <LastGamesHomeStats stats={this.state.lastMatchesHomeStats}/>
                    </div>
                    <div className="match__away">
                        <div className="match__header">
                            <TeamName name={awayName} teamData={this.state.away} />
                            <Result result={this.state.awayGoal}/>
                        </div>
                        <p className="match__section-title">Last 6 away games:</p>
                        <LastGamesAway matches={this.state.lastMatchesAway} teamName={ awayName }/>
                        <p className="match__section-title">Last 6 away games stats:</p>
                        <LastGamesAwayStats stats={ this.state.lastMatchesAwayStats} />
                    </div>
                </div>
                <div className="match__half-box">
                    <MatchStats stats={this.state.stats} />
                </div>            
            </div>

        );

    }

}
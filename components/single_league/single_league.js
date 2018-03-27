import React, { Component } from 'react';
import { Title } from '../title/Title.js';
import { Predict } from '../predict/predict.js';
import { Result } from '../result/result.js';
import MetaTags from 'react-meta-tags';
import  Loader  from '../loader/loader.js';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.js';
import '../btn/btn.css';
import PropTypes from 'prop-types';

export class SingleLeague extends Component {
    constructor() {
        super();
        this.state = {
            getData: [],
            index: 18,
            loader: true
        }

        this.addMore = this.addMore.bind(this);
    }

    

    addMore() {
        this.setState({
            index: this.state.index + 9
          });
    }

   
    

    componentDidMount() {
        let main = this;
   
        let MatchItems;


        
        let url = 'https://api.betlio.com/league/index.php';

        if(window.fetch)
        {
            console.log('wspiera fetch');
        }
        else
        {
            console.log('nie wpsiera fetch');
        }

        let fetchOptions = 
                 [{
                    liga: main.props.match.params.name, 
                    ilosc: main.state.index
                    }]
        ;
       


        fetch(url, {
            method: 'POST',
            body: JSON.stringify(fetchOptions)
        } )
            .then(function (response) {
                if (response.status !== 200) {

                }
                response.json().then(function (data) {
                    
                    main.setState({
                        getData: data,
                        loader: false
                    })
                    
                });

            })
    }





    render() {
       
        let indexM = this.state.index - 1;
        let metaDesc = 'Check our predictions for ' + this.props.match.params.name  + ' matches! Each round has good predictions!'
        let metaTitle =  this.props.match.params.name + ' - Betlio.com';
        let num = 'idTag';
        let breadcrumbs = this.props.match.params.name;
        let MatchItems = this.state.getData.map((item) => {

            let matchResult = parseInt(item.homeGoal, 10) + parseInt(item.awayGoal, 10);
            let homeScorePredict = parseInt(item.homeGoal, 10);
            let awayScorePredict = parseInt(item.awayGoal, 10);

            return ( 
                <div className="match-item">
                     <div className="match-bottom">
                        <div className="match-bottom__data">{ item.data }</div>
                        <div className="match-bottom__status"> { item.status }</div>
                        <div className="match-bottom__round">Round: { item.kolejka }</div>
                    </div>
                    <div className="match-teams">
                            <Title home={item.home} away={item.away} id={item.id} />
                            <div className="match-teams__result">
                                <Result result={ item.homeGoal } />
                                <Result result={ item.awayGoal } />
                            </div>
                    </div>
                    <div className="match-predict">
                    <Predict predict={item.predict} type="over25" mresult={matchResult}/>
                    <Predict predict={item.predict15} type="over15" mresult={matchResult}/>
                    <Predict predict={item.predictHscore} type="hscore" mresult={homeScorePredict}/>
                    <Predict predict={item.predictAscore} type="ascore" mresult={awayScorePredict}/>
                    </div>
                </div> 
            )
        })

        return ( 
            <div className="matches">
                <div className="match">

                <MetaTags>
                    <title>{ metaTitle }</title>
                    <meta name="description" content={metaDesc} id={num+1} />
                    <meta property="og:description" content={metaDesc} id={num+2} />
                    <meta property="og:title" content={ metaTitle } id={num+3} />
                </MetaTags>
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                { this.state.loader ? <Loader /> : null }

                { MatchItems.map(function(list, key)
                    {
                        if(key <= indexM) { 
                                return list
                            } 
                            
                    })
                } 
                            
                </div>
                <div class="btn" onClick={this.addMore}>Load More</div>
            </div>
           

        );

    }

}


SingleLeague.propTypes = {
    name: PropTypes.string.isRequired
}
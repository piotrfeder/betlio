import React, { Component } from 'react';
import { Title } from '../title/Title.js';
import { Predict } from '../predict/predict.js'; 
import { Result } from '../result/result.js';
import MetaTags from 'react-meta-tags';
import  Loader  from '../loader/loader.js';

import './css/match/match.css';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            getData: [],
            dane: undefined,
            loader: true,
            predict: '',
            predictType: ''
        }

        this.changePredict = this.changePredict.bind(this);
    }


    changePredict(e) 
    {
        

        let siblings = e.currentTarget.parentNode.childNodes;
        let i = 0;
        
        
       
         for(i; i < siblings.length; i++)
        {
            siblings[i].className = 'filter__button'; 
        } 

        this.setState({
            predict: e.currentTarget.dataset.predict,
            predictType: e.currentTarget.dataset.type,
           
            
        }) 

        e.currentTarget.classList.add('active');
        
    }
    

    componentDidMount() {
        let main = this;

       

        document.title = 'Betlio.com - Football matches predictions';

        fetch('https://api.betlio.com/matches/index.php')
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
        let num = 'idTag';
        let matchItems = this.state.getData;
        

        let items = matchItems.filter(item => item);

        let predict = this.state.predict;
        let predictType = this.state.predictType;

        if(predict === 'predict' && predictType === 'under')
        {
            items = matchItems.filter(item => item.predict === 'under')
        }
        else if(predict === 'predict' && predictType === 'over')
        {
            items = matchItems.filter(item => item.predict === 'over')
        }
        else if(predict === 'predict15' && predictType === 'under')
        {
            items = matchItems.filter(item => item.predict15 === 'under')
        }
        else if(predict === 'predict15' && predictType === 'over')
        {
            items = matchItems.filter(item => item.predict15 === 'over')
        }
        else if(predict === 'all' && predictType === 'all')
        {
            items = matchItems;
        }
        
        

        let MItems = items.map((item) => {
            
            
                                    return ( 
                                        <div className="match-item">
                                             <div class="match-bottom">
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
                                                <Predict predict={item.predict} type="over25"/>
                                                <Predict predict={item.predict15} type="over15" />
                                                <Predict predict={item.predictHscore} type="hscore" />
                                                <Predict predict={item.predictAscore} type="ascore" />
                                            </div>
                                           
                                            
                                           
                                            
                                        </div> 
                                    )
            
            
            
                                })

        return ( 
           
            
            <div className="match">
                <MetaTags>
                    <title>Betlio.com - Football predictions</title>
                    <meta name="description" content="Betlio.com - Football predictions. 14 leagues: Premier League, Bundesliga, Primera Division, Seria A and many more. We predict: overs, unders and which team scores or not." id={num+1} />
                    <meta property="og:description" content="Betlio.com - Football predictions. 14 leagues: Premier League, Bundesliga, Primera Division, Seria A and many more. We predict: overs, unders and which team scores or not." id={num+2} />
                    <meta property="og:title" content="Betlio.com - Football predictions" id={num+3} />
                </MetaTags>
                <div class="filter">
                <p className="filter__head">Filter:</p>
                <div class="filter__box">
                    <button onClick={this.changePredict} data-predict='all' data-type='all' className="filter__button">All</button>
                    <button onClick={this.changePredict} data-predict='predict' data-type='under' className="filter__button">Under 2.5</button>
                    <button onClick={this.changePredict} data-predict='predict' data-type='over' className="filter__button">Over 2.5</button>
                    <button onClick={this.changePredict} data-predict='predict15' data-type='under' className="filter__button">Under 1.5</button>
                    <button onClick={this.changePredict} data-predict='predict15' data-type='over' className="filter__button">Over 1.5</button>
                </div>
               
                </div>
                
               
                { this.state.loader ? <Loader /> : null }
                {
                    MItems.map(function(list, key)
                        {
                        
                                return   list
                        
                            
                        })
                }
            </div>

        );

    }

}


import React, { Component } from 'react';
import { TitleLeague } from '../title_league/TitleLeague.js';
import MetaTags from 'react-meta-tags';
import Loader from '../loader/loader.js';
import './leagues.css';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.js';


export class Leagues extends Component {
    constructor() {
        super();
        this.state = {
            getData: [],
            loader: true

        }


    }

    componentDidMount() {
        let main = this;
        let MenuItems;


        fetch('https://api.betlio.com/leagues/index.php')
            .then(function (response) {

                if (response.status !== 200) {

                }
                response.json().then(function (data) {

                    MenuItems = data.map((item) => {


                        return ( 
                            
                                
                                <div className="league-stats">
                                    <TitleLeague name={item.name}  flag={item.logo}/>
                                </div>
                            
                        )



                    })

                    main.setState({
                        getData: MenuItems,
                        loader: false
                    })
                });

            })
    }

 render() {
     let num = 'idTag';
     let breadcrumbs = 'Leagues';
        return ( 
            <div className="leagues">
                <MetaTags>
                    <title>Leagues - Betlio.com</title>
                    <meta name="description" content="Choose one from major leagues: Premiership, Primera Division, Bundesliga, Seria A and many more." id={num+1} />
                    <meta property="og:description" content="Choose one from major leagues: Premiership, Primera Division, Bundesliga, Seria A and many more." id={num+2} />
                    <meta property="og:title" content="Leagues - Betlio.com" id={num+3} />
                </MetaTags>
                <Breadcrumbs breadcrumbs={breadcrumbs} />

                { this.state.loader ? <Loader /> : null }
             {
               this.state.getData.map(function(list, key)
               {
                       return <div className="league"> { list}</div>                   
               })
            }
        
            
            
            </div>

        );

    }

}


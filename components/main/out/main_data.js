import React, { Component } from 'react';
import { Title } from './Title.js';


export default class MainContent extends Component {

    componentDidMount() {
        
                    let ItemData;
        
                    fetch('http://jsonplaceholder.typicode.com/posts')
                        .then(function(response)
                        {
                            if(response.status !== 200)
        
                            {
                                console.log('nie laczy sie')
                            }
        
                            response.json().then(function(data) {
                                
                                ItemData = data.map((item) => {
                                    <div className="listItem">

                                    </div>
                                    
                                })
        
                            })
                        } )
                }

    render() {
       
        return(

        )

    }

}
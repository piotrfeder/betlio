import React, { Component } from 'react';
import './team_name.css';


export class TeamName extends Component {


    

    render() {
        let itemName = this.props.teamData;

        return (
            <div className="team-title">
            
              {
                  itemName.map((item, key) => { 
                    
                        
                      return <div className="team-title__crest" key={key}> 
                      <img src={item.crest} alt="" 
                      
                      />
                      
                      </div>
                      
                  })
              }

              
              <h4>{ this.props.name }</h4>
            </div>
        )
    }
}
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export  class Title extends Component{
    render() {
        
        let home = this.props.home;
        let away = this.props.away;
        let rHome = home.split(' ').join('_');
        let rAway = away.split(' ').join('_');

        return(
           
                <Link to={'/match/' + rHome + '/' + rAway} className="match__title" > 
                    <div className="match__team">
                        { this.props.home } 
                    </div>
                    <div className="match__team">
                        { this.props.away}
                    </div>
                </Link>
            
        )
    }

    
}
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export  class TitleLeague extends Component{
    render() {
        let leageLogo = 'static/' + this.props.flag;
        return( 
            <div className="league__name">
            
                <Link to={'/league/' + this.props.name} > 
                <img src={leageLogo} alt={this.props.name} />
                <h4>{ this.props.name }</h4></Link>
            </div>
        )
    }

    
}
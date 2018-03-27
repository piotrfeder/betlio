import React from 'react';
import './breadcrumbs.css';

const Breadcrumbs = (props) => {
    let breadcrumb = props.breadcrumbs;

        return(
            <div className="breadcrumbs">
                <a href="">Home</a> / { breadcrumb }
            </div>
        )
    
}

export default Breadcrumbs;
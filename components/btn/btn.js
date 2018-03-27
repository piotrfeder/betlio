import React from 'react';
import './btn.css';
import PropTypes from 'prop-types';

const Button = ({name}) => (
    
        <div className="btn">{name}</div>
    
)

export default Button;

Button.propTypes = {
        name: PropTypes.string.isRequired
} 
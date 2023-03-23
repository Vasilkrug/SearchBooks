import React from 'react';
import './Button.css';

const Button = ({text, onclick}) => {
    return (
        <button onClick={(e) => onclick(e)} className={'search-button'}>{text}</button>
    );
};

export default Button;
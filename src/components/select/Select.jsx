import React from 'react';
import './Select.css';

const Select = ({options}) => {
    return (
        <select id={'categories'}>
            {options.map(option => {
                return <option key={option.value} value={option.value}>{option.value}</option>
            })}
        </select>
    );
};

export default Select;
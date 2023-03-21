import React from 'react';
import './Select.css';

const Select = ({options, onChange}) => {

    return (
        <select id={'categories'} onChange={(e) => onChange(e)}>
            {options.map(option => {
                return <option key={option.value}
                               value={option.value}>{option.value}</option>
            })}
        </select>
    );
};

export default Select;
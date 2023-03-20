import React, {useState} from 'react';
import './Form.css';
import Select from "../select/Select";
import {categoriesOptions, sortOptions} from "../data/data";

const Form = () => {
    const [value, setValue] = useState('')
    const inputChange = (e) => {
        setValue(e.target.value)
    }
    const fetchToApi = async (e) => {
        e.preventDefault()
        const request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&orderBy=newest&maxResults=30&key=AIzaSyAQrcw62zlWuvJo3l6KqepGkD0osFJbYqc`)
        const response = await request.json()
        console.log(response.items)
    }
    return (
        <form className={'search-form'}>
            <label>
                <input onChange={(e) => inputChange(e)} className={'search'} type="text" placeholder={'Search'}/>
            </label>
            <label>
                <Select options={categoriesOptions}/>
            </label>
            <label>
                <Select options={sortOptions}/>
            </label>
            <button onClick={(e) => fetchToApi(e)} className={'search-button'}>Search</button>
        </form>
    );
};

export default Form;
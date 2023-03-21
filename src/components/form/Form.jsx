import React, {useState} from 'react';
import './Form.css';
import Select from "../select/Select";
import {categoriesOptions, sortOptions} from "../data/data";
import {useDispatch, useSelector} from "react-redux";
import {useSelect} from "../../hooks/useSelect";

const Form = () => {
    const [value, setValue] = useState('');
    const [categorySelect,setCategorySelect] = useSelect('');
    const [sortSelect,setSortSelect] = useSelect('');

    console.log(sortSelect)
    const dispatch = useDispatch()

    const inputChange = (e) => {
        setValue(e.target.value)
    }

    const fetchToApi = async (e) => {
        e.preventDefault()
        try {
            const request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}+subject:${categorySelect}&orderBy=${sortSelect}&maxResults=30&key=AIzaSyAQrcw62zlWuvJo3l6KqepGkD0osFJbYqc`)
            const response = await request.json()
            dispatch({type: 'SEARCH_BOOKS', payload: {books: response.items}})
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form className={'search-form'}>
            <label>
                <input onChange={(e) => inputChange(e)} className={'search'} type="text" placeholder={'Search'}/>
            </label>
            <label>
                <Select options={categoriesOptions} onChange={setCategorySelect}/>
            </label>
            <label>
                <Select options={sortOptions} onChange={setSortSelect}/>
            </label>
            <button onClick={(e) => fetchToApi(e)} className={'search-button'}>Search</button>
        </form>
    );
};

export default Form;
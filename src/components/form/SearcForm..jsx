import React from 'react';
import './SearcForm.css';
import Select from "../select/Select";
import {categoriesOptions, sortOptions} from "../data/data";
import {useDispatch} from "react-redux";
import {useSelect} from "../../hooks/useSelect";

const SearcForm = () => {
    const [categorySelect, setCategorySelect] = useSelect('all');
    const [sortSelect, setSortSelect] = useSelect('relevance');
    const [value, setValue, clear] = useSelect('');

    const dispatch = useDispatch()
    //api
    //отфильтровать ответ сервера
    const fetchToApi = async (e) => {
        e.preventDefault()
        try {
            const request = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}%20subject:${categorySelect}&orderBy=${sortSelect}&maxResults=30&key=AIzaSyAQrcw62zlWuvJo3l6KqepGkD0osFJbYqc`)
            const response = await request.json()

            dispatch({type: 'SEARCH_BOOKS', payload: {books: response.items || []}})
        } catch (e) {
            console.error(e)
        } finally {
            clear()
        }
    }

    return (
        <form className={'search-form'}>
            <label>
                <input value={value} onChange={(e) => setValue(e)} className={'search'} type="text"
                       placeholder={'Search'}/>
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

export default SearcForm;
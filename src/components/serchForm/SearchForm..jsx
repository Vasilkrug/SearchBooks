import React from 'react';
import './SearcForm.css';
import Select from "../select/Select";
import {categoriesOptions, sortOptions} from "../data/data";
import {useDispatch} from "react-redux";
import {useSelect} from "../../hooks/useSelect";
import {fetchToApi} from "../../api/api";

const SearchForm = () => {
    const [categorySelect, setCategorySelect] = useSelect('all');
    const [sortSelect, setSortSelect] = useSelect('relevance');
    const [value, setValue, clear] = useSelect('');

    const dispatch = useDispatch()
    //отфильтровать ответ сервера
    const getData = async (e) => {
        e.preventDefault()
        const data = await fetchToApi(value, categorySelect, sortSelect)
        dispatch({type: 'SEARCH_BOOKS', payload: {books: data.items || []}})
        clear()

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
            <button onClick={(e) => getData(e)} className={'search-button'}>Search</button>
        </form>
    );
};

export default SearchForm;
import React from 'react';
import {useDispatch} from 'react-redux';
import Select from '../select/Select';
import {categoriesOptions, sortOptions} from '../data/data';
import {useSelect} from '../../hooks/useSelect';
import {fetchToApi} from '../../api/api';
import Button from '../button/Button';
import './SearcForm.css';

const SearchForm = () => {
    const [categorySelect, setCategorySelect] = useSelect('all');
    const [sortSelect, setSortSelect] = useSelect('relevance');
    const [value, setValue, clear] = useSelect('');

    const dispatch = useDispatch();

    const getData = async (e) => {
        e.preventDefault()
        dispatch({type: 'SET_IS_LOADING', payload: {isLoading: true}})
        dispatch({type: 'SET_INPUT_VALUE', payload: {inputValue: value}})
        dispatch({type: 'SET_SORT_OPTIONS', payload: {sortOptions: {categorySelect, sortSelect}}})
        dispatch({type: 'INCREMENT_START_INDEX'})
        const data = await fetchToApi(value, categorySelect, sortSelect)
        const isError = !data.totalItems;
        dispatch({type: 'SET_ERROR', payload: {error: isError}})
        dispatch({type: 'TOTAL_BOOKS', payload: {count: data.totalItems}})
        dispatch({type: 'SEARCH_BOOKS', payload: {books: data.items || []}})
        clear()
        dispatch({type: 'SET_IS_LOADING', payload: {isLoading: false}})
    }

    return (
        <form className={'search-form'}>
            <label>
                <input value={value} onChange={(e) => setValue(e)} className={'search'} type='text'
                       placeholder={'Search'}/>
            </label>
            <label>
                <Select options={categoriesOptions} onChange={setCategorySelect}/>
            </label>
            <label>
                <Select options={sortOptions} onChange={setSortSelect}/>
            </label>
            <Button onclick={getData} text={'Search'}/>
        </form>
    );
};

export default SearchForm;
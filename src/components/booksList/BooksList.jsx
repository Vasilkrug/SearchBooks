import React from 'react';
import BookCard from "../bookCard/BookCard";
import {useDispatch, useSelector} from "react-redux";
import './BooksList.css';
import {fetchToApi} from "../../api/api";

const BooksList = () => {
    const books = useSelector(state => state.books.books)
    const totalBooks = useSelector(state => state.books.totalBooks)
    const hasError = useSelector(state => state.books.hasError)
    const sortOptions = useSelector(state => state.books.sortOptions)
    const inputValue = useSelector(state => state.books.inputValue)
    const startIndex = useSelector(state => state.books.startIndex)
    const emptyImg = require('../../assets/images/emptyImg.jpg');
    const {categorySelect, sortSelect} = sortOptions
    const dispatch = useDispatch();
    const getId = (id) => {
        dispatch({type: 'SELECT_BOOK', payload: {id: id}})
    }
    const loadMoreHandler = async () => {
        dispatch({type: 'SET_IS_LOADING', payload: {isLoading: true}})
        dispatch({type: 'INCREMENT_START_INDEX'})
        const data = await fetchToApi(inputValue, categorySelect, sortSelect, startIndex)
        dispatch({type: 'LOAD_MORE_BOOKS', payload: {books: data.items}})
        dispatch({type: 'SET_IS_LOADING', payload: {isLoading: false}})
    }

    return (
        <main className={'book-list'}>
            <div className={'total-books'}>
                <h2>Найдено {totalBooks} книг</h2>
            </div>
            {books.length && !hasError ? books.map(book => {
                    return <BookCard
                        key={book.id}
                        getId={getId}
                        id={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        categories={book.volumeInfo.categories || []}
                        img={book?.volumeInfo?.imageLinks?.thumbnail || emptyImg}/>
                })
                : <h1>Найдите книгу</h1>}
            <div className={'more-button'}>
                <button onClick={() => loadMoreHandler()}>More</button>
            </div>
        </main>
    );
};

export default BooksList;
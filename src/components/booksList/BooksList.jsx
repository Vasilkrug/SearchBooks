import React from 'react';
import BookCard from '../bookCard/BookCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchToApi} from '../../api/api';
import Button from '../button/Button';
import './BooksList.css';

const BooksList = () => {
    const books = useSelector(state => state.books.books)
    const totalBooks = useSelector(state => state.books.totalBooks)
    const hasError = useSelector(state => state.books.hasError)
    const {categorySelect, sortSelect} = useSelector(state => state.books.sortOptions)
    const inputValue = useSelector(state => state.books.inputValue)
    const startIndex = useSelector(state => state.books.startIndex)
    const emptyImg = require('../../assets/images/emptyImg.jpg');
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
            {!books.length && !hasError ? <h2>Попробуйте найти книгу</h2> : null}
            {totalBooks ? <div className={'total-books'}>
                <h2>Найдено {totalBooks} книг</h2>
            </div> : null}
            {!totalBooks && hasError ?
                <h2>Книг не найдено</h2> : null}
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
                : null}
            <div className={'more-button'}>
                {(books.length && books.length >= 30) && (startIndex < totalBooks) ?
                    <Button onclick={loadMoreHandler} text={'Загрузить еще'}/>
                    : null}
            </div>
        </main>
    );
};

export default BooksList;
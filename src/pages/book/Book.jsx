import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import BookPreview from '../../components/bookPreview/BookPreview.';
import {fetchToApiById} from '../../api/api';

const Book = () => {
    const bookId = useParams().id || '';
    const dispatch = useDispatch()
    const [book, setBook] = useState({})

    useEffect(() => {
        dispatch({type: 'SET_IS_LOADING', payload: {isLoading: true}})
        fetchToApiById(bookId).then(res => {
            if (res) {
                setBook(res)
            }
            dispatch({type: 'SET_IS_LOADING', payload: {isLoading: false}})
        })
    }, [])

    return (
        <div>
            {book.id ? <BookPreview selectedBook={book}/> : null}
        </div>
    );
};

export default Book;
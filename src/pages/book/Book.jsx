import React from 'react';
import {useSelector} from 'react-redux';
import BookPreview from '../../components/bookPreview/BookPreview.';

const Book = () => {
    const selectedBook = useSelector(state => state.books.selectedBook)

    return (
        <>
            <BookPreview selectedBook={selectedBook}/>
        </>
    );
};

export default Book;
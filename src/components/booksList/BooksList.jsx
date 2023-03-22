import React from 'react';
import BookCard from "../bookCard/BookCard";
import {useSelector} from "react-redux";
import './BooksList.css';

const BooksList = () => {
    const books = useSelector(state => state.books.books)
    const totalBooks = useSelector(state => state.books.totalBooks)
    const emptyImg = require('../../assets/images/emptyImg.jpg');

    return (
        <main className={'book-list'}>
            <div className={'total-books'}>
                <h2>Найдено {totalBooks} книг</h2>
            </div>
            {books.length ? books.map(book => {
                    return <BookCard
                        key={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        categories={book.volumeInfo.categories || []}
                        img={book?.volumeInfo?.imageLinks?.thumbnail || emptyImg}/>
                })
                : <h1>Найдите книгу</h1>}
        </main>
    );
};

export default BooksList;
import React from 'react';
import './BookPreview.css';

const BookPreview = ({selectedBook}) => {
    const emptyImg = require('../../assets/images/emptyImg.jpg')
    const {title, description, authors, categories} = selectedBook.volumeInfo;
    const {thumbnail} = selectedBook.volumeInfo.imageLinks || emptyImg;

    return (
        <div className={'book-preview'}>
            <div className={'book-preview-head'}>
                <p className={'author-preview'}>{!authors ? 'Без автора' : authors[0]}</p>
                <p>{title}</p>
                <span>{!categories ? 'Без категории' : categories[0]}</span>
            </div>
            <div className={'book-preview-img'}>
                <img src={thumbnail || emptyImg} alt=""/>
            </div>
            <div className={'book-preview-description'}>
                <p>{!description ? 'Без описания' : description}</p>
            </div>
        </div>
    );
};

export default BookPreview;
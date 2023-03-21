import React from 'react';
import './BookCard.css'

const BookCard = ({img, categories, title, authors}) => {

    return (
        <div className={'book-card'}>
            <div className={'card-img'}>
                <img src={img} alt=""/>
            </div>
            <div className={'card-title'}>
                <p>{title}</p>
            </div>
            <div className={'card-info'}>
                <p>{categories[0]}</p>
                <span>{!authors ? 'Без автора' : authors[0]}</span>
            </div>
        </div>
    );
};

export default BookCard;

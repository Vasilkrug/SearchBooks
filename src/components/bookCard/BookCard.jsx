import React from 'react';
import './BookCard.css'
import {Link} from "react-router-dom";

const BookCard = ({img, categories, title, authors, id, getId}) => {
    return (
        <div className={'book-card'} onClick={() => getId(id)}>
            <div className={'card-img'}>
                <img src={img} alt="book"/>
            </div>
            <div className={'card-title'}>
                <Link to={id}><p>{title}</p></Link>
            </div>
            <div className={'card-info'}>
                <p>{!categories.length ? 'Без категории' : categories[0]}</p>
                <span>{!authors ? 'Без автора' : authors[0]}</span>
            </div>
        </div>

    );
};

export default BookCard;

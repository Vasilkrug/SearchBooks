import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import BooksList from "./components/booksList/BooksList";

const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <BooksList/>
        </div>
    );

}

export default App;

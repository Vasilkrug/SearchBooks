import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import BooksList from "./components/booksList/BooksList";
import Loader from "./components/loader/Loader";
import {useSelector} from "react-redux";

const App = () => {
    const isLoading = useSelector(state => state.books.isLoading)

    return (
        <div className={'App'}>
            <Header/>
            <BooksList/>
            {isLoading ? <Loader/> : null}
        </div>
    );

}

export default App;

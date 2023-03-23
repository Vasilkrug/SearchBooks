import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import BooksList from "./components/booksList/BooksList";
import Loader from "./components/loader/Loader";
import {useSelector} from "react-redux";
import {Route, Routes} from "react-router-dom";
import BookPreview from "./components/bookPreview/BookPreview.";

const App = () => {
    const isLoading = useSelector(state => state.books.isLoading)
    const selectedBook = useSelector(state => state.books.selectedBook)

    return (
        <div className={'App'}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<BooksList/>}/>
                <Route
                    path={'/:id'}
                    element={<BookPreview selectedBook={selectedBook}/>}/>
            </Routes>
            {isLoading ? <Loader/> : null}
        </div>
    );

}

export default App;

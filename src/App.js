import React from 'react'
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import {useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import BookPreview from './components/bookPreview/BookPreview.';
import Main from './pages/main/Main';
import './App.css';


const App = () => {
    const isLoading = useSelector(state => state.books.isLoading)
    const selectedBook = useSelector(state => state.books.selectedBook)

    return (
        <div className={'App'}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route
                    path={'/:id'}
                    element={<BookPreview selectedBook={selectedBook}/>}/>
            </Routes>
            {isLoading ? <Loader/> : null}
        </div>
    );

}

export default App;

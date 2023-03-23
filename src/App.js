import React from 'react'
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import {useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/main/Main';
import Book from './pages/book/Book';
import './App.css';


const App = () => {
    const isLoading = useSelector(state => state.books.isLoading)

    return (
        <div className={'App'}>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route
                    path={'/:id'}
                    element={<Book/>}/>
            </Routes>
            {isLoading ? <Loader/> : null}
        </div>
    );

}

export default App;

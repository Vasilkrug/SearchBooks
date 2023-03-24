import React from 'react'
import Header from './components/header/Header';
import Loader from './components/loader/Loader';
import {useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import Main from './pages/main/Main';
import Book from './pages/book/Book';
import './App.css';
import Error from "./pages/error/Error";


const App = () => {
    const isLoading = useSelector(state => state.books.isLoading)

    return (
        <div className={'App'}>
            <Header/>
            <Routes>
                <Route exact path={'/'} element={<Main/>}/>
                <Route
                    exact path={'/book/:id'}
                    element={<Book/>}/>
                <Route path={'*'} element={<Error/>}/>
            </Routes>
            {isLoading ? <Loader/> : null}
        </div>
    );

}

export default App;

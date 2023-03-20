import React from 'react'
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className={'header'}>
                <div className="logo">
                    <p>BookSpace</p>
                </div>
                <form className={'search-form'}>
                    <label>
                        <input className={'search'} type="text" placeholder={'Search'}/>
                    </label>
                    <label>
                        <select id={'categories'}>
                            <option value="all">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                    </label>
                    <label>
                        <select id={'sort'}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </label>
                    <button className={'search-button'}>Search</button>
                </form>
            </header>
        </div>
    );

}

export default App;

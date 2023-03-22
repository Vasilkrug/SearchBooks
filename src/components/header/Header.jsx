import React from 'react';
import Logo from "../logo/Logo";
import SearchForm from "../serchForm/SearchForm.";
import './Header.css';

const Header = () => {
    return (
        <header className={'header'}>
            <Logo/>
            <SearchForm/>
        </header>
    );
};

export default Header;
import React from 'react';
import Logo from "../logo/Logo";
import Form from "../form/Form";
import './Header.css';

const Header = () => {
    return (
        <header className={'header'}>
            <Logo/>
            <Form/>
        </header>
    );
};

export default Header;
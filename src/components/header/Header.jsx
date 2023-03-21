import React from 'react';
import Logo from "../logo/Logo";
import SearcForm from "../form/SearcForm.";
import './Header.css';

const Header = () => {
    return (
        <header className={'header'}>
            <Logo/>
            <SearcForm/>
        </header>
    );
};

export default Header;
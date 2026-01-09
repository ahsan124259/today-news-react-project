import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/career'>Career</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Navbar;
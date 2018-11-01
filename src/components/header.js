import React from 'react';
import '../styles.css';

const Header = () => {

    return (
        <div className='header-container'>
            <h1>AWS Developer Associate</h1>
            <h3>{process.env.REACT_APP_SECRET_CODE}</h3>
            <h2><i>Released June 2018</i></h2>
        </div>
    )
}

export default Header;

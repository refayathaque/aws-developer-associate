import React from 'react';
import { Link } from 'react-router-dom'

import '../styles.css';

const Navigation = () => {

    return (
        <div className=''>
            <h1>I am the nav bar</h1>
            <li><Link to='/'>Topics Home</Link></li>
            <li><Link to='/ec2'>EC2</Link></li>
        </div>
    )
}

export default Navigation;

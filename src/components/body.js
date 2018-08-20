import React from 'react';
import Navigation from './navigation.js'
import TopicsDisplay from './topicsDisplay.js'
import '../styles.css';

const Body = () => {

    return (
        <div className=''>
            <Navigation />
            <TopicsDisplay />
        </div>
    )
}

export default Body;

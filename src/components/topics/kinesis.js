import React from 'react';
import '../../styles.css';

import logo from "../../images/Analytics_AmazonKinesis.jpg"

const Kinesis = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="Kinesis Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Kinesis</h2>
            </div>
        </div>
    )

}

export default Kinesis

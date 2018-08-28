import React from 'react';
import '../../styles.css';

import logo from "../../images/Messaging_AmazonSQS.jpg"

const SQS = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="SQS Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>SQS</h2>
            </div>
        </div>
    )

}

export default SQS

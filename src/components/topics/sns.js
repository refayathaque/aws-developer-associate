import React from 'react';
import '../../styles.css';

import logo from "../../images/Messaging_AmazonSNS.jpg"

const SNS = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="SNS Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>SNS</h2>
            </div>
        </div>
    )

}

export default SNS

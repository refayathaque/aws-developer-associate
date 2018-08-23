import React from 'react';
import '../../styles.css';

import logo from "../../images/NetworkingContentDelivery_AmazonCloudFront.jpg"

const CloudFront = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="CloudFront"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is CloudFront?</h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )

}

export default CloudFront;

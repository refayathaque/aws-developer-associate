import React from 'react';
import '../../styles.css';

import logo from "../../images/DeveloperTools_AWSX-Ray.jpg"

const XRay = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="X-Ray Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>X-Ray</h2>
                <ul>
                    <li><i>One way of visualizing our serverless apps</i></li>
                    <li><strong>Collects data about requests your app serves</strong></li>
                    <li>Provides tools we can use to view, filter, and gain insights into ^ data to <strong>identify issues and opportunites for optimization</strong></li>
                    <li>For any traced request to our app, we can see detailed information not only about the request/response, but also about <i>calls our app makes downstream to other AWS resources, microservices, databases and HTTP web APIs</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>SDK</h2>
                <ul>
                    <li>Provides <strong>interceptors to add to your code to trace incoming HTTP requests</strong></li>
                    <li>Provides <strong>client handlers to instrument AWS SDK clients that your app uses to call other AWS services</strong></li>
                    <li>Provides an <strong>HTTP client to use to instrument calls to other internal and external HTTP web services</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Integration</h2>
                <ul>
                    <li>Elastic Load Balancing</li>
                    <li>Lambda</li>
                    <li>API Gateway</li>
                    <li>Elastic Compute Cloud (EC2)</li>
                    <li>Elastic Beanstalk</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Languages</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Go</li>
                    <li>Ruby</li>
                    <li>.NET</li>
                </ul>
            </div>
        </div>
    )

}

export default XRay;

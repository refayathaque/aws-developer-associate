import React from 'react';
import '../../styles.css';

import logo from "../../images/Compute_AWSElasticBeanstalk.jpg"

const ElasticBeanstalk = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="ElasticBeanstalk Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>ElasticBeanstalk</h2>
                <ul>
                    <li><i>A provisioning service</i></li>
                    <li>Similar to CloudFormation, but here you use the GUI instead of the JSON CloudFormation template</li>
                    <li>Service to <strong>deploy and scale web apps</strong> developed in popular languages like Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker onto widely used app server platforms such as Apache Tomcat, Nginx, Passenger, Puma and IIS</li>
                    <li>This <i>allows us (developers) to focus on writing code and not having to worry about any of the underlying infrastrtucure needed to run the app</i></li>
                    <li>All we have to do is upload the code and have the service handles <strong>deployment, capacity provisioning, load balancing, auto-scaling, and application health</strong></li>
                    <li>We retain full control of the underlying AWS resources powering the app, and we pay only for the resources required to store and run the app (e.g., EC2 instances and S3 buckets)</li>
                    <li><i>We can also have the service handle ^ for us</i></li>
                    <li><strong>Fastest and simplest way to deploy app in AWS</strong></li>
                    <li>Automatically scales app up and down</li>
                    <li>We have the ability to select the EC2 instance type that will be most optimal for our app</li>
                    <li>Managed platform updates feature automatically applies updates to our OS (Operating System), Java, PHP, Node.js, etc.</li>
                    <li>Intergrated with CloudWatch and X-Ray for performance data and metrics</li>
                </ul>
            </div>
        </div>
    )

}

export default ElasticBeanstalk

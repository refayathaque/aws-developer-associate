import React from 'react';
import '../../styles.css';

const TopicsHome = () => {

    return (
        <div className='topics-container'>
            <div class="topicsHome-flex-item">
                <h2>IAM</h2>
                <h3>Identity Access Management</h3>
                <h4><i>Manage users and their level of access</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>EC2</h2>
                <h3>Elastic Compute Cloud</h3>
                <h4><i>Resizeable virtual machine in the cloud</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>ELB</h2>
                <h3>Elastic Load Balancer</h3>
                <h4><i>Balance load across multiple different servers</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>RDS</h2>
                <h3>Relational Database Service</h3>
                <h4><i>Akin to spreadsheets with rows and fields (columns)</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>Elasticache</h2>
                <h4><i>Quickly pull data from in-memory caches</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>S3</h2>
                <h3>Simple Storage Service</h3>
                <h4>Secure, highly-scalable object storage</h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>CloudFront</h2>
                <h4><i>Content Delivery Network (CDN)</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>Lambda</h2>
                <h4><i>Ultimate/latest abstraction layer for compute</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>API Gateway</h2>
                <h4><i>Publish/manage/monitor/secure APIs at any scale</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>Step Functions</h2>
                <h4><i>Visualize and test serverless apps</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>X-Ray</h2>
                <h4><i>Analyze and debug production and distributed apps</i></h4>
            </div>
            <div class="topicsHome-flex-item">
                <h2>DynamoDB</h2>
                <h4><i>A Non-Relational SQL Database (NoSQL)</i></h4>
            </div>
        </div>
    )
}

export default TopicsHome;

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
            <div class="topicsHome-flex-item">1</div>
            <div class="topicsHome-flex-item">2</div>
            <div class="topicsHome-flex-item">3</div>
            <div class="topicsHome-flex-item">4</div>
            <div class="topicsHome-flex-item">5</div>
            <div class="topicsHome-flex-item">6</div>
        </div>
    )
}

export default TopicsHome;

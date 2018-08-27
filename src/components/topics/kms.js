import React from 'react';
import '../../styles.css';

import logo from "../../images/Database_AmazonDynamoDB.jpg"

const KMS = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="KMS Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is KMS?</h2>
                <ul>
                    <li><i>Key Management Service</i></li>
                    <li>Makes it easy for us to create and control encryption keys used to encrypt our data</li>
                    <li>Integrated with other services like EBS, S3, Redshift, Elastic Transcoder, WorkMail, RDS, etc. to make it easy for us to encrypt our data using these encryption keys</li>
                    <li><strong>Encryption keys for KMS is regional</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Customer Master Key</h2>
                <ul>
                    <li>Alias</li>
                    <li>Creation Date</li>
                    <li>Description</li>
                    <li>Key State</li>
                    <li><strong>Key Material (either customer provided or AWS provided)</strong></li>
                    <li><strong>Can never be exported, cannot leave KMS</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Setting up a Customer Master Key</h2>
                <ul>
                    <li>Create alias and description</li>
                    <li>Choose material option</li>
                    <li>Define key <strong>administrative permissions</strong> - IAM users/roles that can administer (<strong>but not use</strong>) the key through the KMS API</li>
                    <li>Define key <strong>usage permissions</strong> - IAM users/roles that can use the key to encrypt and decrypt data</li>
                </ul>
            </div>
        </div>
    )

}

export default KMS;

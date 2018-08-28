import React from 'react';
import '../../styles.css';

import logo from "../../images/SecurityIdentityCompliance_AWSKMS.jpg"

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
                    <li><strong>Key Material (either customer provided or KMS generated)</strong></li>
                    <li><strong>Can never be exported, cannot leave KMS</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Setting up a Customer Master Key (CMK)</h2>
                <ul>
                    <li>Create alias and description</li>
                    <li>Choose material option</li>
                    <li>Define key <strong>administrative permissions</strong> - IAM users/roles that can administer (<strong>but not use</strong>) the key through the KMS API - <i>Cannot add external accounts</i></li>
                    <li>Define key <strong>usage permissions</strong> - IAM users/roles that can <i>use the key to encrypt and decrypt data</i> - <i>Can add external accounts</i> - <strong>Can enable key rotation</strong></li>
                    <li><i>We can set the key user and key administrator when we create our new key in IAM</i>, but before that we must create two separate users so we can assign them to either be the key user or the key administrator</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>KMS API Calls</h2>
                <ul>
                    <li><strong>AWS KMS Encrypt</strong></li>
                    <li><strong>AWS KMS Decrypt</strong></li>
                    <li><strong>AWS KMS Re-Encrypt</strong></li>
                    <li><strong>AWS KMS Enable-Key-Rotation</strong></li>
                    <li>When using an EC2 to encrypt/decrypt/re-encrypt/rotate keys use the access key and secret access key of the <strong>key user</strong>, and be mindful of the <strong>region</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Envelope Encryption</h2>
                <ul>
                    <li>We take our Master Key (aka Customer Master Key) and use it to encrypt/decrypt our Envelope Key (aka Data Key)</li>
                    <li>The Envelope Key (Data Key) is what encrypts/decrypts our data</li>
                    <li>Essentially, we are <strong>encrypting/decrypting the key that encrypts/decrypts our data</strong></li>
                    <li><i>To decrypt the Envelope Key we use our Master Key and run an encryption algorthm decrypting the Envelope Key, and turning it into a readable Plain Text Data Key - We then take the Plain Text Data Key and decrypt the data</i></li>
                </ul>
            </div>
        </div>
    )

}

export default KMS;

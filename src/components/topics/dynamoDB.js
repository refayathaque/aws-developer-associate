import React from 'react';
import '../../styles.css';

import logo from "../../images/Database_AmazonDynamoDB.jpg"

const DynamoDB = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="DynamoDB Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is DynamoDB?</h2>
                <ul>
                    <li><strong>Fast and flexible NoSQL database service for all apps that need consistent, single-digit millisecond (i.e., low) latency at any scale</strong></li>
                    <li>Fully managed and supports <strong>both document and key-value data models/data structures</strong></li>
                    <li>Its flexible data model, e.g., we don't have to define our database schema up front, and reliable performance make it ideal for mobile, web, gaming, ad-tech, IoT, and many other applications</li>
                    <li>Stored on SSD storage</li>
                    <li>Spread across 3 geographically distinct data centers</li>
                    <li>Choice of 2 consistency models for <strong>read</strong> operations:</li>
                    <li><i>Eventually Consistent Reads (Default)</i></li>
                    <li><i>Strongly Consistent Reads</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Consistent Reads</h2>
                <ul>
                    <li>Eventually Consistent Reads - Consistency across all copies of data (spread across 3 geographically distinct data centers) is usually reached within a second - Repeating a read (reading a piece of data that we <i>just wrote or updated</i>) after a short time should return the updated data (within a second) - <strong>Best read performance, but new data reflection can take up to a second</strong></li>
                    <li>Strongly Consistent Reads - Return results that reflect all writes that recieved a successful response prior to the read - Consistently across all 3 locations</li>
                    <li>Strongly Consistent Reads - <i>Any writes that occurred before the read will be reflected in the read, and will be consistent across all 3 locations</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <ul>
                    <li>Tables</li>
                    <li>Items - I.e., <strong>row of data in a table</strong></li>
                    <li>Attributes - I.e., <strong>column of data in a table</strong></li>
                    <li>Key = Name of the data</li>
                    <li>Value = Data itself</li>
                    <li>Documents can be written in JSON, HTML or XML</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Primary Keys</h2>
                <ul>
                    <li>DynamoDB stores and retrieves data based on <strong>Primary Keys</strong></li>
                    <li>2 types - <strong>Partition Key and Composite Key</strong></li>
                    <li><strong>Partition Key</strong> - <i>Unique attribute</i> - E.g., userID, productID, email address</li>
                    <li>Value of the partition key is input to an internal hash function which determines the partition (physical location) where the data is stored</li>
                    <li><i>If we use the partition key as our primary key, then we have to ensure that no two items have the same partition key</i></li>
                    <li><strong>Composite Key</strong> - <i>Combination of Partition Key and Sort Key</i> - E.g., ought to be used when we have the <i>same user posting multiple times to a forum</i></li>
                    <li>Based on ^ example - Primary key would be a composite key consisting of - Partition key as userID - Sort key as the timestamp of the his/her post to the forum</li>
                    <li>If using composite keys, <i>2 (or more) items may have the same partition key but they must have different sort keys (otherwise the composite key is not truly unique)</i></li>
                    <li>Under the composite key system - All items with the same partition key are stored together, then sorted according to the sort key value</li>
                    <li>Composite keys are useful because they allow us to <strong>store multiple items with the same partition key</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Access Control</h2>
                <ul>
                    <li>Authentication and access control is managed via IAM</li>
                    <li>We can create an IAM user within our account which will have specific permissions to access and create tables</li>
                    <li>We can create an IAM role which enables us to obtain temporary access keys which can then be used to access services like DynamoDB</li>
                    <li>We can also use special <strong>IAM Condition(s)</strong> to restrict user access to only their own records</li>
                    <li>^ E.g., we can add a <strong>Condition</strong> to an IAM policy to allow access only to items where the partition key value matches the userID</li>
                    <li>Fine grained access control using Condition parameter: <strong>dynamodb:LeadingKeys</strong> to allow users to access only the items where the partition key value matches their userID</li>
                </ul>
            </div>
        </div>
    )

}

export default DynamoDB;

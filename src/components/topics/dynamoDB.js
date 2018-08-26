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
            <div className="topics-flex-item-inline">
                <h2>What is an Index?</h2>
                <ul>
                    <li>In SQL databases, an index is a data structure which allows us to perform <strong>fast queries on specific columns in a table</strong></li>
                    <li>We select the columns we want to include in the index and then run searches on the index - As opposed to running searches on the entire dataset</li>
                    <li>Enable fast queries on specific data columns</li>
                    <li>Dynamo DB has 2 types of indexes to help speed up our queries: <strong>Local Secondary Index and Global Secondary Index</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Local Secondary Index</h2>
                <ul>
                    <li>Can only be created when we create our table</li>
                    <li>We <strong>cannot add/remove/modify the index later</strong></li>
                    <li><strong>Same Partition Key</strong> as our table - But <strong>different sort key</strong></li>
                    <li>Gives us a different view of the data, one that is organized by the alternative sort key</li>
                    <li>Index queries based on this alternative sort key will be much faster than querying from the table</li>
                    <li>E.g., Partition Key: userID, Sort Key: accountCreationDate</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Global Secondary Index</h2>
                <ul>
                    <li>Can create during or <strong>after</strong> table creation</li>
                    <li><strong>Different Partition and Sort Keys</strong></li>
                    <li>Gives us a different view of the data, one that is organized by the alternative sort key <i>and alternative parittion key</i></li>
                    <li>E.g., Partition Key: emailAddress (as opposed to userID), Sort Key: lastLogInDate</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Query</h2>
                <ul>
                    <li>Operation that finds items in a table based on the <strong>Primary Key attribute and a distinct value to search for</strong></li>
                    <li>E.g., select an item where the <i>userID (Primary Key) is equal to 212</i> - Will select all the attributes for that item, e.g., first name, surname, email, etc. (i.e., will return the document/item/row)</li>
                    <li>We can use an optional <i>Sort Key name and value to refine results</i></li>
                    <li>^ E.g., if our Sort Key is a timestamp, we can refine the query to <strong>only select items with a timestamp issue in the last 7 days</strong></li>
                    <li>By default, a query returns all the attributes for the items but we can use the <strong>ProjectionExpression</strong> parameter if we want the query to only return the specific attributes we want</li>
                    <li>^ E.g., if we want to <i>only see the email address</i> rather than all the user's attributes</li>
                    <li>Results are always sorted by the Sort Key</li>
                    <li>Numeric order - by default in ascending order (1, 2, 3, 4)</li>
                    <li>ASCII characters - by default in ascending order</li>
                    <li>We can <strong>reverse the order by setting ScanIndexForward parameter to false</strong> - <i>Only applies to queries, not scans</i></li>
                    <li>By default, queries are Eventually Consistent - But <strong>we can explicitly set queires to be Strongly Consistent</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Scan</h2>
                <ul>
                    <li>Examines every item in the table</li>
                    <li>By default, a scan returns all the attributes for the items but we can use the <strong>ProjectionExpression</strong> parameter if we want the query to only return the specific attributes we want</li>
                    <li>Possible to filter results - <i>Filtering is not searching the database, it is first dumping the data (entire table), and then applying a filter on top of the data to show us only the results we are looking for</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Query or Scan?</h2>
                <ul>
                    <li><strong>Query is more efficient than scan</strong></li>
                    <li>Scan dumps the entire table, then filters out the values to provide the desired result - <i>Removing the unwanted data is extra work</i></li>
                    <li>As the table grows, the scan operation will take longer  and longer</li>
                    <li>Scan operation on a large table <strong>can use up the provisioned throughput for a large table in just a single operation</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Optimizing Performance</h2>
                <ul>
                    <li>We can reduce the impact of a query/scan by setting a smaller page size, which in turn will use fewer read operations - E.g., set the page size to return 40 items</li>
                    <li><strong>Larger # of smaller operations will allow other requests to succeed without database throttling</strong></li>
                    <li>Isolate scan operations to specific tables and segregate them from your mission-critical traffic</li>
                    <li><i>Avoid using scan operations if you can</i> - Design tables so you only use query, Get, or BatchGetItem APIs</li>

                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>How to Improve Scan Performance</h2>
                <ul>
                    <li>By default, a scan operation processes data sequentially, returning 1Mb increments before moving on to retrieve the next 1Mb of data - It can only scan one partition at a time</li>
                    <li>We can configure DynamoDB to use <strong>Parallel scans</strong> instead, and we can do this by logically dividing a table or index into segments and scanning each segment in parallel</li>
                    <li>However, it's best to avoid parallel scans if our table/index is already incurring heavy read/write workloads from other apps</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Provisioned Throughput</h2>
                <ul>
                    <li>Provisioned Throughput - Mechanism we use to <strong>define the capacity and performance requirements</strong></li>
                    <li>Measured in <strong>Capacity Units (CU)</strong></li>
                    <li>When you create your table, you specify your requirements in terms of Read and Write CUs</li>
                    <li>1 x Write CU = 1 x 1Kb Writes per second</li>
                    <li>1 x Read CU = 1 x 4Kb Strongly Consistent Reads per second</li>
                    <li>1 x Read CU = <strong>2 x 4Kb</strong> Eventually Consistent Reads per second <strong>(Default)</strong></li>
                    <li>E.g., table with 5 x Read CUs and 5 x Write CUs will be able to do - 20Kb per second of Strongly Consistent Reads (5 x 4Kb) - 40kb per second of Eventually Consistent Reads (5 x (2 x 4Kb)) - 5Kb per second of Writes (5 x 1Kb) - <i>Assuming each item is between 512 Bytes and 1Kb</i></li>
                    <li><i>If your app reads or writes larger items it will consume more CUs and will cost you more as well</i></li>

                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>CU Calculation Example</h2>
                <ul>
                    <li>Your app needs to read 80 items (table rows/documents) per second, each item is 3Kb in size, and you need Strongly Consistent Reads</li>
                    <li>Step 1 - Calculate how many Read CUs you need given the size of the item - 3Kb/4Kb = 0.75 - <i>always round up</i> - <strong>Each read will need 1 Read CU</strong></li>
                    <li>Multiply ^ by the required # of reads per second - 1 x 80 - <strong>80 Read CUs needed for the required operation</strong></li>
                    <li>Similar calculation as ^ for Eventually Consistent Reads, but since <strong>1 x Read CU = 2 x 4Kb Eventually Consistent Reads per second</strong>, the final required CUs will be <strong>halved</strong> - <strong>40 Read CUs</strong> given the example above</li>
                    <li>For Write CU calculation it is also similar to ^, with the only difference being that <i>1 x Write CU = 1 x 1Kb Writes per second - So for the above example it would be (3 x 80) <strong>240 CUs if we had to Write instead of Read</strong></i></li>
                </ul>
            </div>

        </div>
    )

}

export default DynamoDB;

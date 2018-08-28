import React from 'react';
import '../../styles.css';

import logo from "../../images/Database_AmazonDynamoDB.jpg"
import logoDAX from "../../images/Database_AmazonDynamoDBAccelerator.jpg"

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
                    <li><strong>"ProvisionedThroughputExceededException"</strong> error means that we have <i>exceeded the maximum allowed provisioned throughput for a table or for one or more global secondary indexes</i></li>

                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>CU Calculation Example</h2>
                <ul>
                    <li>Your app needs to read 80 items (table rows/documents) per second, each item is 3Kb in size, and you need Strongly Consistent Reads</li>
                    <li>Step 1 - Calculate how many Read CUs you need given the size of the item - 3Kb/4Kb = 0.75 - <i>always round up</i> - <strong>Each read will need 1 Read CU</strong></li>
                    <li>Multiply ^ by the required # of reads per second - 1 x 80 - <strong>80 Read CUs needed for the required operation</strong></li>
                    <li>Similar calculation as ^ for Eventually Consistent Reads, but since <strong>1 x Read CU = 2 x 4Kb Eventually Consistent Reads per second</strong>, the final required CUs will be <strong>halved</strong> - <strong>40 Read CUs would be needed </strong> given the example above</li>
                    <li>For Write CU calculation it is also similar to ^, with the only difference being that <i>1 x Write CU = 1 x 1Kb Writes per second - So for the above example it would be (3 x 80) <strong>240 CUs if we had to Write instead of Read</strong></i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>DAX</h2>
                <ul>
                    <li><i>DynamoDB Accelerator</i></li>
                    <li>Fully managed, clustered <strong>in-memory write-through cache</strong> optimized for DynamoDB</li>
                    <li>Delivers up to a 10x <strong>read</strong> performance improvement</li>
                    <li>Microsecond performance for millions of requests per second</li>
                    <li>Ideal for read-heavy and bursty read workloads</li>
                    <li>E.g., auction applications, gaming and retail sites during Black Friday/Christmas promotions</li>
                    <li>Write-through caching service - this means that the data is written to the cache as well as the back end store at the same time - <i>Any time the table is updated DAX is also updated</i></li>
                    <li>Allows us to point the DynamoDB API calls at the DAX cluster - <i>Everytime our app tries to query DynamoDB, it will actually try and query the DAX cluster first</i> - If the item our app is querying is in the cache (there is a <strong>cache hit</strong>), DAX will return the result to our app</li>
                    <li>You point your API calls at the DAX cluster, instead of your table</li>
                    <li>^ If the item is not available in DAX (<strong>cache miss</strong>), DAX performs an <i>Eventually Consistent</i> GetItem operation against DynamoDB</li>
                    <li>Retrieval of data from DAX reduces the read load on DynamoDB tables</li>
                    <li>In some cases it is possible to use DAX and reduce the Provisioned Read Capacity to save on DynamoDB charges</li>
                    <li><strong>Not suitable for apps requiring Strongly Consistent Reads</strong>, it is really only for <i>improving response times of Eventually Consistent Reads</i></li>
                    <li>Not suitable for write intensive apps</li>
                    <li>Not suitable for apps which do not perform many read operations</li>
                    <li>Not suitable for apps which do not require microsecond response times</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoDAX} alt="DAX Logo"></img>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have a motion sensor which writes 600 items of data every minute. Each item consists of 5kb. What should you set the write throughput to?</h3>
                <ul>
                    <li className="correct-answer">50</li>
                    <li>10</li>
                    <li>20</li>
                    <li>40</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the API call to retrieve multiple items from a DynamoDB table?</h3>
                <ul>
                    <li>GetItems</li>
                    <li>BatchGetItems</li>
                    <li className="correct-answer">BatchGetItem</li>
                    <li>BatchGet</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>In terms of performance, a scan is more efficient than a query.</h3>
                <ul>
                    <li className="correct-answer">False</li>
                    <li>True</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have an application that needs to read 25 items of 13kb in size per second. Your application uses strongly consistent reads. What should you set the read throughput to?</h3>
                <ul>
                    <li>10</li>
                    <li>25</li>
                    <li>50</li>
                    <li className="correct-answer">100</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have an application that needs to read 25 items of 13kb in size per second. Your application uses eventually consistent reads. What should you set the read throughput to?</h3>
                <ul>
                    <li>10</li>
                    <li>25</li>
                    <li>100</li>
                    <li className="correct-answer">50</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Using the AWS portal, you are trying to Scale DynamoDB past its preconfigured maximums. Which service can you increase by raising a ticket to AWS support?</h3>
                <ul>
                    <li className="correct-answer">Provisioned throughput limits</li>
                    <li>Item sizes</li>
                    <li>Global Secondary Indexes</li>
                    <li>Local Secondary Indexes</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which of the following attributes would make a good Partition Key?</h3>
                <ul>
                    <li>ProductType</li>
                    <li>Size</li>
                    <li>WarehouseLocation</li>
                    <li className="correct-answer">ProductID</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which of the following attributes would make a good Sort Key?</h3>
                <ul>
                    <li className="correct-answer">InvoiceDate</li>
                    <li>OrderNumber</li>
                    <li>EmailAddress</li>
                    <li>CustomerID</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Your application is storing customer order data in DynamoDB. Which of the following pairs of attributes would make the best composite key to allow you to query DynamoDB efficiently?</h3>
                <ul>
                    <li>CustomerID + ProductID</li>
                    <li className="correct-answer">CustomerID + OrderDate</li>
                    <li>CustomerID + ProductCategory</li>
                    <li>CustomerID + Size</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Your application is storing customer order data in a DynamoDB table. You need to run a query to find all the orders placed by a specific customer in the last month, which attributes would you use in your query?</h3>
                <ul>
                    <li className="correct-answer">The Partition Key of CustomerID and a Sort Key of OrderDate</li>
                    <li>The Partition Key of OrderDate and Sort Key of CustomerName</li>
                    <li>A composite Primary Key made up of the CustomerName and OrderDate</li>
                    <li>The Partition Key of OrderDate and a Sort Key of CustomerID</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the difference between a Global Secondary Index and a Local Secondary Index</h3>
                <ul>
                    <li>You can create a Local Secondary Index at any time but you can only create a Global Secondary Index at table creation time</li>
                    <li>You can delete a Global Secondary Index at any time</li>
                    <li>You can delete a Local Secondary Index at any time</li>
                    <li className="correct-answer">You can create a Global Secondary Index at any time but you can only create a Local Secondary Index at table creation time</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which of the following services provides in-memory write-through cache optimised for DynamoDB?</h3>
                <ul>
                    <li className="correct-answer">DAX</li>
                    <li>Elasticache</li>
                    <li>CloudFront</li>
                    <li>Read-replica</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Your low latency web application needs to store its session state so that it can be accessed quickly. Which service do you recommend?</h3>
                <ul>
                    <li>In memory on your EC2 instance</li>
                    <li>RDS</li>
                    <li className="correct-answer">DynamoDB</li>
                    <li>Elastic File Store</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>By default, a DynamoDB query operation is used for which of the following?</h3>
                <ul>
                    <li className="correct-answer"><p>Find items in a table based on the Primary Key attribute</p></li>
                    <li>Return the entire contents of a table filtered on the Primary Key attribute</li>
                    <li>Return the entire contents of a table</li>
                    <li>Find items in a table based on the Sort Key attribute</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>In DynamoDB, a scan operation is used for which of the following?</h3>
                <ul>
                    <li>Return the entire contents of a table filtered on the Primary Key attribute</li>
                    <li>Find items in a table based on the Primary Key attiribute</li>
                    <li>Find items in a table based on the Sort Key attribute</li>
                    <li className="correct-answer"><p>Return the entire contents of a table</p></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which of the following are recommended ways to optimise a query or scan in DynamoDB?</h3>
                <ul>
                    <li className="correct-answer"><p>Reduce the page size to return fewer items per results page</p></li>
                    <li>Filter your results based on the Primary Key and Sort Key</li>
                    <li>Set your queries to be eventually consistent</li>
                    <li>Run parallel scans</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You are running a query on your Customers table in DynamoBD, however you only want the query to return CustomerID and EmailAddress for each item in the table, how can you refine the query so that it only includes the required attributes?</h3>
                <ul>
                    <li>Create a Global Secondary Index which only includes the attributes you need and run the query on the Global Seconday Index</li>
                    <li className="correct-answer">Use the ProjectionExpression parameter</li>
                    <li>Run a query based on the Primary Key and filter the results using a Sort Key of EmailAddress</li>
                    <li>Use a scan operation instead</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What does the error "ProvisionedThroughputExceededException" mean in DynamoDB?</h3>
                <ul>
                    <li className="correct-answer">You exceeded your maximum allowed provisioned throughput for a table or for one or more global secondary indexes</li>
                    <li>The DynamoDB table has exceeded the allocated space</li>
                    <li>There is no such error message. The correct error message would be "ProvisionedThroughputFailureException"</li>
                    <li>The DynamoDB table is unavailable</li>
                </ul>
            </div>
        </div>
    )

}

export default DynamoDB;

import React from 'react';
import '../../styles.css';

import logo from "../../images/Analytics_AmazonKinesis.jpg"

const Kinesis = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="Kinesis Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is Streaming Data?</h2>
                <ul>
                    <li>Data that is generated continiously by thousands of data sources, which typically send in the data records simultaneously, and in small sizes (order of kilobytes)</li>
                    <li>Examples - Purchases from online stores like Amazon, stock prices, game data (as the gamer is playing), social network data, geospatial data (think uber), IoT sensor data</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is Kinesis</h2>
                <ul>
                    <li>Platform to send you streaming data too</li>
                    <li>Makes it <strong>easy to load and analyze streaming data, and also provides the ability to build a custom app for specific business needs</strong></li>
                    <li>Three core services...</li>
                    <li><strong>Kinesis Streams</strong></li>
                    <li><strong>Kinesis Firehose</strong></li>
                    <li><strong>Kinesis Analytics</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Kinesis Streams</h2>
                <ul>
                    <li>Data <strong>producers</strong> (Mobile devices, computers, IoT, EC2, etc.) sending data to Kinesis Streams - Kinesis Streams will <strong>store this data (default is 24 hours, but can be upped to 7 days retention)</strong> - Data is stored in <strong>Shards</strong> - Once the data is data is stored in the Shard, the data is then sent to the data <strong>consumers</strong> - These <strong>consumers</strong> are a processing fleet of EC2s doing a myriad of different calculations/operations - Once the consumers are done with their processing they then send the data to be stored in AWS services like DynamoDB, S3, Elastic MapReduce, Redshift, etc. </li>
                    <li><strong>Shards</strong> - Kinesis Streams consist of Shards - 5 transactions per second for reads, up to a maximum total data read rate of 2Mb per second and up to 1,000 records per second for writes, up to a maximum total data write rate of 1Mb per second (including partition keys)</li>
                    <li>We can have <strong>multiple shards in a stream</strong></li>
                    <li><i>Data capacity of our stream is a function of the # of Shards we specify for the stream</i> - Total capacity of the stream is the sum of the capacities of its Shards</li>
                    <li>We can configure Lambda to subscribe to a stream and execute a function on our behalf when a new record is detected, before sending the processed data on to its final destination</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Kinesis Firehose</h2>
                <ul>
                    <li>Similar to Kinesis Streams except that it is <strong>completely automated, and we don't have to worry about our data consumers going in and mining the data from the data producers</strong></li>
                    <li><i>The data producers just send the data to Kinesis Firehouse and then the data is sent to S3</i></li>
                    <li><strong>We don't have to worry about the management of Shards, streams, or data retention within Kinesis itself</strong>, it's completely automated</li>
                    <li><strong>Analytics of the data coming into Firehose from the data producers is optional</strong></li>
                    <li>Data retention does not work the same as Kinesis Streams - <i>Data coming in from producers is either analyed by Lambda or transferred over to S3</i></li>
                    <li>If we want to use <strong>Redshift with Kinesis Firehose</strong>, we have to <i>have the data in S3 first before being copied over  Redshift</i></li>
                    <li>We can also write data straight into an Elasticsearch cluster</li>
                    <li><i>Capture, transform, load data streams into AWS data stores for near real-time anlaytics</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Kinesis Analytics</h2>
                <ul>
                    <li>Allows us to run <strong>SQL queries of the data as it exists in Kinesis Streams/Firehose</strong></li>
                    <li>We can then use the SQL queries <strong>to store the data inside S3/Redshift/Elasticseach cluster</strong></li>
                    <li>Way of analyzing the data that is in Kinesis using SQL queries</li>
                </ul>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
        </div>
    )

}

export default Kinesis

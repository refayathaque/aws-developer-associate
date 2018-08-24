import React from 'react';
import '../../styles.css';

import logo from "../../images/Compute_AWSLambda.jpg"

const Lambda = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="Lambda Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is Lambda?</h2>
                <ul>
                    <li><i>All we have to worry about is our code, AWS takes care of everything else for us</i></li>
                    <li>Compute service where we can upload code and create a <strong>Lambda function</strong></li>
                    <li>Lambda takes care of provisioning and managing the servers that are being used to run our code</li>
                    <li>Do not have to worry about operating systems, patching, scaling, etc.</li>
                    <li>Lambda can be - <strong>Event driven</strong> compute service where it is run in response to events - E.g., change to data in S3 or DynamoDB table</li>
                    <li>Lambda can be - Compute service in <strong>response to HTTP requests</strong> using APIGateway or through API calls from AWS SDKs</li>
                    <li><i>Can also trigger other Lambda functions</i> - <strong>1 event can = x functions, if functions trigger other functions</strong> - E.g., an event can trigger one Lambda function which in turn triggers 3 other Lambda functions</li>
                    <li>Can interact with many other AWS services/resources, e.g., persisting data into a DynamoDB table</li>
                    <li><strong>Independent - 1 event = 1 function</strong></li>
                    <li>AWS classifies it as <strong>'compute service'</strong>'</li>
                    <li>Is part of the <strong>'serverless'</strong> realm along with: <i>APIGateway, S3, DynamoDB</i> - RDS is not 'serverless'</li>
                    <li>Lambda architectures can get extremely complicated, use X-Ray to debug</li>
                    <li>Can do things <strong>globally</strong> (not stuck in one region) - E.g., we can use it to back up S3 buckets into other S3 buckets</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Languages</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C#</li>
                    <li>Go</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>How is Lambda priced?</h2>
                <ul>
                    <li># Requests - First 1 million requests are free, $0.20 per 1 million requests thereafter</li>
                    <li>Duration - Calculated from time our code begins executing until it returns (i.e., terminates) - Rounded up to the nearest 100ms - This pricing also depends on the amount of memory we allocate to the function - $0.00001667 per Gb-second used</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Why is Lambda cool?</h2>
                <ul>
                    <li>No servers</li>
                    <li>Continous Scaling - No need to configure Auto Scaling Groups like with EC2 - Scales out (not up) automatically, e.g., we can have millions of functions running parallelly</li>
                    <li>Super cheap</li>
                    <li>Amazon Echo works with Lambda - When we use Alexa we are speaking to AWS Lambda</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Triggers</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )

}

export default Lambda;

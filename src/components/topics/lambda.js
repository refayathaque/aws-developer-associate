import React from 'react';
import '../../styles.css';

import logo from "../../images/Compute_AWSLambda.jpg"
import logoFunction from "../../images/Compute_AWSLambda_LambdaFunction.jpg"

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
                    <li>Lambda can be - Compute service in <strong>response to HTTP requests</strong> using API Gateway or through API calls from AWS SDKs</li>
                    <li><strong>Independent - 1 event = 1 function</strong></li>
                    <li><i>Can also trigger other Lambda functions</i> - <strong>1 event can = x functions, if functions trigger other functions</strong> - E.g., an event can trigger one Lambda function which in turn triggers 3 other Lambda functions</li>
                    <li>Can interact with many other AWS services/resources, e.g., persisting data into a DynamoDB table</li>
                    <li>AWS classifies it as <strong>'compute service'</strong>'</li>
                    <li>Is part of the <strong>'serverless'</strong> realm along with: <i>API Gateway, S3, DynamoDB</i> - RDS/EC2/Elastic Beanstalk are not 'serverless'</li>
                    <li>Lambda architectures can get extremely complicated, use X-Ray to debug</li>
                    <li>Can do things <strong>globally</strong> (not stuck in one region) - E.g., we can use it to back up S3 buckets into other S3 buckets</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Triggers (Total: 14)</h2>
                <ul>
                    <li>API Gateway</li>
                    <li>AWS IoT</li>
                    <li>Alexa Skills Kit</li>
                    <li>Alexa Smart Home</li>
                    <li>CloudFront</li>
                    <li>CloudWatch Events</li>
                    <li>CloudWatch Logs</li>
                    <li>CodeCommit</li>
                    <li>Cognito Sync Trigger</li>
                    <li>DynamoDB</li>
                    <li>Kinesis</li>
                    <li>S3</li>
                    <li>SNS</li>
                    <li>SQS</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Languages</h2>
                <ul>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Go</li>
                    <li>C#</li>
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
                    <li>In the console we can see a list of AWS services/resouces the function has access to by virtue of the <strong>role</strong> assigned</li>
                    <li>You can define Environment Variables as key-value pairs that are accessible from your function code - These are useful to store configuration settings without the need to change function code</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Versioning</h2>
                <ul>
                    <li>Publish one or more versions of our Lambda function</li>
                    <li>We can work with different variations of our Lambda function in the development workflow, e.g., development, beta, and production</li>
                    <li>Each function version has a <i>unique ARN (Amazon Resource Number)</i></li>
                    <li>After you publish a version it becomes <strong>immutable</strong>, i.e., it cannot be changed</li>
                    <li>$LATEST - <strong>Unpublished</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Qualified/Unqualified ARNs</h2>
                <ul>
                    <li>We can refer to functions using its ARN, and there are two ARN types:</li>
                    <li>Qualified ARN - Function ARN with the version suffix - arn:aws:lambda:aws-region:acct-id:function:helloworld:$LATEST</li>
                    <li>Unqualified ARN - Function ARN <strong>without the version suffix</strong> - arn:aws:lambda:aws-region:acct-id:function:helloworld</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Alias</h2>
                <ul>
                    <li>After initially creating a function ($LATEST), we can publish a version 1 of it</li>
                    <li>By creating an alias named <strong>PROD</strong> that points to version 1, we can now use the PROD alias to invoke version 1 of the function</li>
                    <li>We can then refactor the code ($LATEST) and publish another stable and improved version (version 2)</li>
                    <li>We can promote version 2 to production by <strong>remapping</strong> the PROD alias so it now points to version 2</li>
                    <li><i>If we find something wrong with version 2, we can easily roll back the production code to version 1 by remapping the PROD alias so it now points to version 1</i></li>
                    <li>Split Traffic - Using aliases to different versions - Adds up to 100% - <strong>Cannot split traffic with $LATEST, instead create an alias to $LATEST</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoFunction} alt="Lambda Function Logo"></img>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You work for a gaming company that has built a serverless application on AWS using Lambda, API Gateway and DynamoDB. They release a new version of the lambda function and the application stops working. You need to get the application up and back online as fast as possible. What should you do?</h3>
                <ul>
                    <li className="correct-answer">Roll your Lambda back to the previous version</li>
                    <li>Create a cloudformation template of the environment. Deploy this template to a seperate region and then redirect Route53 to the new region</li>
                    <li>DynamoDB is not serverless and is causing the error. Migrate your database to RDS and redeploy the lambda function</li>
                    <li>The new function has some dependencies not available to lambda. Redeploy the application on EC2 and put the EC2 instances behind a network load balancer</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have created a serverless application which converts text in to speech using a combination of S3, API Gateway, Lambda, Polly, DynamoDB and SNS. Your users complain that only some text is being converted, where as longer amounts of text does not get converted. What could be the cause of this problem?</h3>
                <ul>
                    <li>AWS X-ray service is interfering with the application and should be disabled</li>
                    <li>You’ve placed your DynamoDB table in a single availability zone which is currently down, causing an outage.</li>
                    <li>Polly has built in censorship, so if you try and send it text that is deemed offensive, it will not generate an MP3.</li>
                    <li className="correct-answer">Your lambda function needs a longer execution time. You should change this to the maximum of 300 seconds</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have created a simple serverless website using S3, Lambda, API Gateway and DynamoDB. Your website will process the contact details of your customers, predict an expected delivery date of their order and store their order in DynamoDB. You test the website before deploying it in to production and you notice that all though the page executes, and the lambda function is triggered, it is unable to write to DynamoDB. What could be the cause of this issue?</h3>
                <ul>
                    <li>The availability zone that DynamoDB is hosted in is down</li>
                    <li className="correct-answer">Your lambda function does not have the sufficient Identity Access  Management (IAM) permissions to write to DynamoDB.</li>
                    <li>The availability zone that Lambda is hosted in is down</li>
                    <li>You have written your function in python which is not supported as a run time environment for Lambda.</li>
                </ul>
            </div>
        </div>
    )

}

export default Lambda;

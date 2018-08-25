import React from 'react';
import '../../styles.css';

import logo from "../../images/ApplicationServices_AmazonAPIGateway.jpg"

const APIGateway = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="API Gateway Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>API</h2>
                <ul>
                    <li><i>Application Programming Interface</i></li>
                    <li>Types of APIs - REST (REpresentational State Transfer), uses JSON (key-value pairs), 70% of internet uses this - SOAP (Simple Object Access Protocol), uses XML, mostly deprecated</li>
                    <li><i>Possible to configure API Gateway as a SOAP web service passthrough</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is API Gateway?</h2>
                <ul>
                    <li>Fully managed service making it easy for us to <strong>publish/manage/monitor/secure APIs at any scale</strong></li>
                    <li>We can create an API acting as a 'front door' for apps to access data, business logic, or functionality from our AWS back-end services such as apps running on EC2, or code running on Lambda</li>
                    <li>An end user will make a request to our AWS environment - The request is processed by API Gateway, then it can (based on the type of request) forward the request to other services/resources such as Lambda, EC2, or DynamoDB</li>
                    <li>When creating a new API you can - Clone from existing API, <strong>import from Swagger</strong>, or use an example API</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What can it do?</h2>
                <ul>
                    <li>Expose HTTPS endpoints to define a RESTful API - I.e., gives us an HTTPS address we can make calls to, and we can configure how the API responds to those calls</li>
                    <li><i>Serverless-ly</i> connect to services like Lambda and DynamoDB</li>
                    <li>Send each API endpoint to a different target - E.g., one going to Lambda while another goes to DynamoDB</li>
                    <li>Runs efficiently with low cost</li>
                    <li>Scales effortlessly (automatically)</li>
                    <li>Track and control usage using API key</li>
                    <li><strong>Throttle requests to prevent attacks</strong></li>
                    <li>Connect to CloudWatch to log all requests for monitoring</li>
                    <li>Maintain multiple versions of your API using <strong>deployment stages</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Configuring</h2>
                <ul>
                    <li>Define an API (container)</li>
                    <li>Define resources and nested resources (URL paths)</li>
                    <li><i>For each resource:</i></li>
                    <li>Select <strong>supported HTTP methods</strong> (verbs) - GET, POST, DELETE, etc.</li>
                    <li>Set security</li>
                    <li>Choose target, e.g., EC2/Lambda/DynamoDB/etc.</li>
                    <li>Set request and response transformations</li>
                    <li>After setting up the ^ resource - <strong>Deploy API to a stage</strong> - There will be an API Gateway domain by default, but we can change and use custom domain - Now supports AWS Certificate Manager (ACM), so free SSL/TLS certs</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is API caching?</h2>
                <ul>
                    <li>Used to cache our endpoint's reponse</li>
                    <li>Increases performance</li>
                    <li>With caching, we can reduce the # calls made to the endpoint and also <strong>improve the latency</strong> of the requests to your API</li>
                    <li>When caching is enabled for a stage, API Gateway caches reponses from the endpoint for a specified TTL (Time To Live) period (in seconds)</li>
                    <li>API Gateway then responds to the request by looking up the endpoint response from the cache instead of making a request to your endpoint</li>
                    <li>Caching occurs when there is the first of its type request being made, e.g., if a user requests all results from Lambda (which then queries DynamoDB) for 'men's size 7 black adidas trainers' at 12:00 am (assuming TTL is one day, or 86400 seconds) then all subsequent requests for 'men's size 7 black adidas trainers' will be processed by the API Gateway cache instead of the request being forwarded to Lambda</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Same Origin Policy</h2>
                <ul>
                    <li>Important concept in app security model</li>
                    <li>Under this policy, a web broswer permits scripts contained in a first web page to access data in a second web page, <strong>but only if both web pages have the same origin</strong></li>
                    <li>^ Done to stop XSS (Cross-Site Scripting) attacks</li>
                    <li>Enforced by web browsers</li>
                    <li>Ignored by tools like <i>curl (tool for transferring data using various protocols) and Postman (makes it easy to test, develop and document APIs by allowing users to quickly put together both simple and complex HTTP requests)</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>CORS</h2>
                <ul>
                    <li><i>Cross-Origin Resource Sharing</i></li>
                    <li>A way the server at the other end (server-side, not the client code in the browser, i.e., client-side) can relax the same-origin policy</li>
                    <li>Mechanism that allow restricted resources (e.g., fonts) on a web page to be requested from another domain outside the domain from which the first resource was served</li>
                    <li>Browser makes an HTTP OPTIONS call for a URL - OPTIONS is an HTTP method just like GET/PUT/POST</li>
                    <li>Server returns a response that says - "These other doamins are approved to GET this URL"</li>
                    <li>When we see the error, <strong>"Origin policy cannot be read at the remote resource"</strong>, in out Chrome console, we need to <strong>enable CORS on API Gateway</strong></li>
                    <li><i>Personal anecdote - I had to enable this to have my S3+CloudFront deployed React application trigger a Lambda function through an API Gateway endpoint and return a status - I also got the error mentioned ^</i></li>
                    <li><strong>If you are using JavaScript/AJAX that uses multiple domains with API Gateway, ensure that you have enabled CORS on API Gateway</strong></li>
                    <li><i>Enable if your API has to interact with S3</i></li>
                    <li>CORS is enforced by the client</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Import APIs</h2>
                <ul>
                    <li>Use <strong>API Gateway Import</strong> to import an API from an external definition file into API Gateway (e.g., Swagger 2.0 definition files)</li>
                    <li>^ Supports <strong>Swagger v2.0</strong> definition files</li>
                    <li>We can either <strong>create a new API by submitting a POST</strong> request which includes a Swagger definition in the payload and endpoint configuration - Or we can <strong>update an existing API by using a PUT</strong> request that contains a Swagger definition in the payload</li>
                    <li>We can <strong>update an API by overwriting it with a new definition, or by merging a definition with an existing API</strong></li>
                    <li><i>Specify options using the mode query parameter in the request URL</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>API Throttling</h2>
                <ul>
                    <li>By default, API Gateway limits the steady-state request rate to <strong>10,000 requests per second (rps)</strong></li>
                    <li>Maximum <strong>concurrent requests is 5000 requests across all APIs within an account</strong></li>
                    <li>If we exceed 10,000 rps or 5000 concurrent requests we will get a <strong>429 'Too Many Requests' error</strong> response</li>
                    <li><i>If we set API throttling to a rate limit lower than the default 10,000 rps, we will also get a 429 error when that limit is exceeded</i></li>
                    <li><i>Examples:</i></li>
                    <li>If a caller submits 10,000 requests in a one second period evenly (e.g., 10 requests every millisecond), API Gateway processes all requests without dropping any</li>
                    <li>If the caller sends 10,000 requests in the first millisecond, API Gateway serves 5,000 of those requests and throttles the rest in the one-second period</li>
                    <li>If the caller submits 5,000 requests in the first millisecond and then evenly spreads another 5,000 requests through the remaining 999 milliseconds (e.g., about 5 requests every millisecond), API Gateway processes all 10,000 requests in the one-second period without returning 429 errors</li>
                    <li>Default throttling <strong>limits can be lifted</strong> - For additional charges</li>
                </ul>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have created an application using serverless architecture using Lambda, Api Gateway, S3 and DynamoDB. Your boss asks you to do a major upgrade to API Gateway and you do this and deploy it to production. Unfortunately something has gone wrong and now your application is offline. What should you do to bring your application up as quickly as possible?</h3>
                <ul>
                    <li>Restore your previous API gateway configuration using an EBS snapshot</li>
                    <li>Restart API Gateway for the new changes to take effect</li>
                    <li className="correct-answer">Rollback your API Gateway to the previous stage</li>
                    <li>Delete the existing API Gateway</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have an internal API that you use for your corporate network. Your company has decided to go all in on AWS to reduce their data center footprint. They will need to leverage their existing API within AWS. What is the most efficient way to do this?</h3>
                <ul>
                    <li className="correct-answer">Use the Swagger Importer tool to import your API in to API Gateway</li>
                    <li>Replicate your API to API Gateway using the API Replication Master</li>
                    <li>Recreate the API manually</li>
                    <li>Use AWS API Import/Export feature of AWS Storage Gateway</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have launched a new web application on AWS using API Gateway, Lambda and S3. Someone posts a thread to reddit about your application and it starts to go viral. You start receiving 10,000 requests every second and your you notice that that most requests are similar. Your web application begins to struggle. What can you do to optimize performance of your application?</h3>
                <ul>
                    <li>Enable API Gateway Accelerator</li>
                    <li>Migrate your API Gateway to an Network Load Balancer and enable session stickiness for all sessions</li>
                    <li>Change your route53 alias record to point to AWS Neptune and then configure Neptune to filter your API requests to genuine requests only</li>
                    <li className="correct-answer">Enable API Gateway caching to cache frequent requests</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You are developing a new application using serverless infrastructure and are using services such as S3, DynamoDB, Lambda, API Gateway, CloudFront, CloudFormation and Polly. You deploy your application to production and your end users begin complaining about receiving a HTTP 429 error. What could be the cause of the error?</h3>
                <ul>
                    <li className="correct-answer">You enabled API throttling for a rate limit of 1000 requests per second while in development and now that you have deployed to production your API Gateway is being throttled</li>
                    <li>Your lambda function does not have sufficient permissions to read to DynamoDB and this is generating a HTTP 429 error</li>
                    <li>You have an S3 bucket policy which is preventing lambda from being able to write files to your bucket, generating a HTTP 429 error</li>
                    <li>Your cloudformation stack is not valid and is failing to deploy properly which is causing a HTTP 429 error</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You are a developer for a busy real estate company and you want to enable other real estate agents to the ability to show properties on your books, but skinned so that it looks like their own website. You decide the most efficient way to do this is to expose your API to the public. The project works well, however one of your competitors starts abusing this, sending your API tens of thousands of requests per second. This generates a HTTP 429 error. Each agent connects to your API using individual API keys. What actions can you take to stop this behaviour?</h3>
                <ul>
                    <li>Deploy multiple API Gateways and give the agent access to another API Gateway</li>
                    <li>Use AWS Shield Advanced API protection to block the requests</li>
                    <li>Place an AWS Web Application Firewall in front of API Gateway and filter the requests</li>
                    <li className="correct-answer">Throttle the agents API access using the individual API Keys</li>
                </ul>
            </div>
        </div>
    )

}

export default APIGateway;

import React from 'react';
import '../../styles.css';

import logo from "../../images/ApplicationServices_AmazonAPIGateway.jpg"

const APIGateway = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="Lambda Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>API</h2>
                <ul>
                    <li><i>Application Programming Interface</i></li>
                    <li>Types of APIs - REST (REpresentational State Transfer), uses JSON (key-value pairs), 70% of internet uses this - SOAP (Simple Object Access Protocol), uses XML, mostly deprecated</li>
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
                </ul>
            </div>
        </div>
    )

}

export default APIGateway;

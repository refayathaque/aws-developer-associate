import React from 'react';
import '../../styles.css';

import logo from "../../images/NetworkingContentDelivery_AmazonCloudFront.jpg"

const CloudFront = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="CloudFront"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is a CDN?</h2>
                <ul>
                    <li><i>Content Delivery Network</i></li>
                    <li>System of distributed servers (network) that deliver webpages and other web content to a user based on the geographic locations of the user, the origin of the webpage, and a content delivery server</li>
                    <li><strong>Speeds up the distribution</strong> of our static and dynamic web content (HTML, JavaScript, CSS, images)</li>
                    <li>Edge Locations - Situated all over the world - CloudFront uses these to keep a <strong>cache of our web content</strong> (we can also write to it, i.e., <strong>PUT an object on to them</strong>, e.g., Transfer Acceleration) - Resulting in a much faster response time - Dramatically reduces network hops for each request - <strong>Different from an AWS region/AZ</strong></li>
                    <li>Origin - Of files the CDN will distribute, e.g., S3 bucket, EC2 instance, an Elastic Load Balancer (ELB), or Route53</li>
                    <li>Distribution - Name of the CDN, which consists of a collection of Edge Locations</li>
                    <li>Web Distribution - Typically used for websites, e.g., HTTP/HTTPS</li>
                    <li>RTMP (Adobe Real-Time Messaging Protocol) - Used for media streaming and/or flash multi-media content - <i>Another type of distribution</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is CloudFront?</h2>
                <ul>
                    <li>Can be used to deliver our entire website, including dynamic, static, streaming, and interactive content using a global network of edge location</li>
                    <li>Requests for your content are <strong>automatically routed to the nearest edge location</strong>, so content is delivered with the best possible performance - E.g., can be used to optimize performance for users accessing a website backed by S3</li>
                    <li>Also works seamlessly with any <strong>non-AWS origin server</strong>, which stores the original, definitive versions of your files</li>
                    <li>Objects are <strong>cached for the life of the TTL (Time To Live)</strong></li>
                    <li>We can <strong>clear cached objects at any time, but we will be charged</strong> for it</li>
                    <li>Clear cache by <strong>invalidating objects</strong> - Something we might have to do if we cannot wait for the TTL (Time To Live) to expire</li>
                    <li>Geo-Restriction - Possible to whitelist/blacklist countries</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>CloudFront and S3 Transfer Acceleration</h2>
                <ul>
                    <li>Amazon S3 Transfer Acceleration enables fast, easy, and secure transfers of files <i>over long distances</i> between your end users and an S3 bucket - Reduced latency for S3 uploads</li>
                    <li>Transfer Acceleration - Takes advantage of CloudFront's globally distributed edge locations - As the data arrives at an edge location, data is routed to S3 over an <strong>optimized network path</strong> (essentially these are fast networks <strong>within</strong> AWS)</li>
                </ul>
            </div>
        </div>
    )

}

export default CloudFront;

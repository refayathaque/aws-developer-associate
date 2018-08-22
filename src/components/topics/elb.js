import React from 'react';
import '../../styles.css';

// import logo from "../../images/acloudguru.jpg"

const ELB = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline">
                <h2>Types</h2>
                <ul>
                    <li>Application Load Balancer - Operates at OSI (Open Systems Interconnection) Layer 7 - Can see all the way up to the app layer and make very clever routing decisions based on incoming information</li>
                    <li>Network Load Balancer - Operates at Layer 4 - For when we want super fast performance - Most expensive - We will use this if latency is an issue</li>
                    <li>Classic Load Balancer - Not recommended anymore, but remains as legacy service</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Application Load Balancer</h2>
                <ul>
                    <li>Best for load balancing of HTTP and HTTPS traffic</li>
                    <li>Operates at Layer 7 and are <strong>application-aware</strong></li>
                    <li>Intelligent, we can create advanced request routing and have it send specific requests to specific web servers</li>
                    <li>Can be spread across multiple Availability Zones (AZs) to increase redundancies</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Network Load Balancer</h2>
                <ul>
                    <li>Best for load balancing of TCP (Transmission Control Protocol) traffic where <i>extreme performance</i> is neccesary</li>
                    <li>Operates at Layer 4 (connection level)</li>
                    <li>Can handle <strong>millions of requests per second</strong>, while also maintianing ultra-low latencies</li>
                    <li>Most expensive out of the three</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Classic Load Balancer</h2>
                <ul>
                    <li><i>Legacy</i></li>
                    <li>Can load balance HTTP/HTTPS apps</li>
                    <li>Can use Layer 7-specific features like <strong>X-Forwarded</strong> and <strong>sticky sessions</strong></li>
                    <li>We can also use this if we need a strict Layer 4 load balancing for apps which rely purely on TCP</li>
                    <li>We can do Layer 7 (but the Layer 7 here is nowhere near as intellgient as it is in an Application Load Balancer, this is literally <i>only</i> using X-Forwarded and sticky sessions) <strong>or</strong> Layer 4</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Load Balancer Errors</h2>
                <ul>
                    <li><i>Classic Load Balancers</i></li>
                    <li>If app stops responding, the Classic Load Balancer will respond with a 504 error (gateway timeout)</li>
                    <li>This means that the app is having problems, and that it's not responding wihtin the idle timeout perdiod, <strong>not that the Classic Load Balancer is having problems</strong> - The problems could be at the web server or database level</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>X-Forwarded-For Header</h2>
                <ul>
                    <li><i>Classic Load Balancers</i></li>
                    <li>When app users make a DNS request hitting our load balancer will take the request but will use a <strong>private IP (e.g., 10.0.0.23) address instead of the public IPv4 (e.g, 124.12.3.231) address of the app user</strong></li>
                    <li>The load balancer will then send the private IP address to the EC2 instance, and the EC2 instance will <i>only see the private IP address</i></li>
                    <li>But we want to see where our user is! - So if we look in the X-Forwarded-For Header we can get our user's public IPv4 address</li>
                </ul>
            </div>
            <div className="topics-flex-item-block">
                <h2>Route53</h2>
                <ul>
                    <li>DNS (Domain Name System) service</li>
                    <li>Lets us <strong>map domains names</strong> to EC2/Load Balancers/S3</li>
                    <li>We can buy a domain name and connect it to any of the three different back-ends mentioned above</li>
                    <li>Naked domain name: aws-certified-developer.com as opposed to www.aws-certified-developer.com</li>
                </ul>
            </div>
        </div>
    )

}

export default ELB

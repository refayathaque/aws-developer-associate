import React from 'react';
import '../../styles.css';

import logo from "../../images/Compute_AWSElasticBeanstalk.jpg"

const ElasticBeanstalk = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="ElasticBeanstalk Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>ElasticBeanstalk</h2>
                <ul>
                    <li><i>A provisioning service</i></li>
                    <li>Similar to CloudFormation, but here you use the GUI instead of the JSON CloudFormation template</li>
                    <li>Service to <strong>deploy and scale web apps</strong> developed in popular languages like Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker onto widely used app server platforms such as Apache Tomcat, Nginx, Passenger, Puma and IIS</li>
                    <li>This <i>allows us (developers) to focus on writing code and not having to worry about any of the underlying infrastrtucure needed to run the app</i></li>
                    <li>All we have to do is upload the code and have the service handles <strong>deployment, capacity provisioning, load balancing, auto-scaling, and application health</strong></li>
                    <li>We retain full control of the underlying AWS resources powering the app, and we pay only for the resources required to store and run the app (e.g., EC2 instances and S3 buckets)</li>
                    <li><i>We can also have the service handle ^ for us</i></li>
                    <li><strong>Fastest and simplest way to deploy app in AWS</strong></li>
                    <li>Automatically scales app up and down</li>
                    <li>We have the ability to select the EC2 instance type that will be most optimal for our app</li>
                    <li>Managed platform updates feature automatically applies updates to our OS (Operating System), Java, PHP, Node.js, etc.</li>
                    <li>Intergrated with CloudWatch and X-Ray for performance data and metrics</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Deployment Policies</h2>
                <ul>
                    <li>Supports several options for processing deployments:</li>
                    <li><i>All at Once</i></li>
                    <li><i>Rolling</i></li>
                    <li><i>Rolling with Additional Batch</i></li>
                    <li><i>Immutable</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>All At Once</h2>
                <ul>
                    <li>Deploys the new version to all instances simultaneously</li>
                    <li>All of our instances will be <strong>out of service while the deployment takes place</strong></li>
                    <li>We will experience an <strong>outage while the deployment is taking place - Not ideal for mission-critical production systems</strong></li>
                    <li>If the update fails, <i>we will need to roll back the changes by re-deploying the original version to all our instances</i></li>
                    <li>Can do this in test and dev environemnts, but definitely not in your production environment <i>unless your business is okay with having some downtime</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Rolling</h2>
                <ul>
                    <li>Deploys the new version in <strong>batches</strong></li>
                    <li><strong>Each batch of instances is taken out of service</strong> while the deployment takes place</li>
                    <li>Our environment <strong>capacity will be reduced by the # of instances in a batch</strong> while the deployment takes place</li>
                    <li><i>Not ideal for performance sensitive systems</i></li>
                    <li>If the update fails, <i>we need to perform an additional rolling update to roll back the changes</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Rolling with Additional Batch</h2>
                <ul>
                    <li>Launches an <strong>additional batch of instances</strong></li>
                    <li>Deploys the new version in batches</li>
                    <li><strong>Maintains full capacity during deployment process</strong></li>
                    <li>If the update fails, we need to perform an additonal rolling update to roll back the changes</li>
                    <li><strong>Ideal for when the situation is performance senstive, we cannot have any downtime, and we have to maintain full capacity</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Immutable</h2>
                <ul>
                    <li><strong>Deploys the new version to a fresh group of instances in their own new autoscaling group</strong></li>
                    <li>When the new instances pass their health checks, they are moved to our existing auto sclaing group; and finally, the old instances are terminated</li>
                    <li><strong>Maintains full capacity during the deployment process</strong></li>
                    <li><i>Impact of a failed update is far less</i>, and the rollback process requires only terminating the new auto scaling group</li>
                    <li><strong>Preferred option for mission critical production systems</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Deployment Polcies In a Nutshell</h2>
                <ul>
                    <li><strong>All at Once</strong> - <i>Service interruption while we update the entire environment at once</i> - <i>To roll back, perform a further 'All at Once' update</i></li>
                    <li><strong>Rolling</strong> - <i>Reduced capacity during deployment (but no downtime)</i> - <i>To roll back, perform a further 'Rolling' update</i></li>
                    <li><strong>Rolling with Additional Batch</strong> - <i>Maintains full capacity</i> - <i>To roll back, perform a further 'Rolling' update</i></li>
                    <li><strong>Immutable</strong> - <i>Preferred option for mission critical production systems</i> - <i>Maintains full capacity</i> - <i>To roll back, delete the new instances and auto scaling group</i></li>
                </ul>
            </div>
        </div>
    )

}

export default ElasticBeanstalk

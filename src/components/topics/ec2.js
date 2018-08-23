import React from 'react';
import '../../styles.css';
import logoec2 from "../../images/Compute_AmazonEC2.jpg"
import logoebs from "../../images/Storage_AmazonEBS.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EC2 = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logoec2} alt="EC2 Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is EC2?</h2>
                <ul>
                    <li>Web service providing resizeable compute capacity</li>
                    <li>Reduces time needed to obtain and boot new server instances to just minutes (as opposed to days)</li>
                    <li>Allowing us to quickly scale capacity (up, down, and even <i>out</i> by virtue of adding additional instances) in response to changing requirements</li>
                    <li>Changed <strong>economics</strong> of cloud computing</li>
                    <li>Only pay for capacity you <i>actually</i> use, no over-provisioning</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>EC2 Pricing Options</h2>
                <ul>
                    <li>On-demand Instances - Pay a fixed rate by the hour (or second) without commitment, e.g., <FontAwesomeIcon icon={["fab", "linux"]} size="lg" /> instances by the second, whereas <FontAwesomeIcon icon={["fab", "windows"]} /> instances by the hour</li>
                    <li>Reserved Instances - 1 or 3-year commitment for capacity reservations, providing significant discount for hourly rate of instance</li>
                    <li>Spot Instances - Allows us to bid whatever price we want for instance capacity, leading to even larger savings if apps have flexible start and end time, bid prices are constantly changing</li>
                    <li>Dedicated Hosts - Physical EC2 servers dedicated for our use, helps to reduce costs by allowing us to use our existing server-bound software licenses (e.g., VMWare, Oracle, SQL)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>On-Demand</h2>
                <ul>
                    <li>Ideal for users looking for the low cost and flexibility of EC2 without having to commit long-term or make up-front payments</li>
                    <li>Apps with short term/spiky/unpredictable workloads that <strong>cannot be interrupted</strong></li>
                    <li>Apps being developed and tested on EC2 for the first time (also great for learning)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Reserved Instances (RIs)</h2>
                <ul>
                    <li>Apps with steady state, i.e., predictable usage, e.g., web servers</li>
                    <li>Apps requiring reserved capacity</li>
                    <li>We can make up-front payments to reduce total compute costs even further, e.g., if we make a 3-year commitment and pay for it <i>all up-front</i>, we will maximize the discount</li>
                    <li>Standard RIs - Up to 75% cheaper than on-demand instances</li>
                    <li>Convertible RIs - Can change its attributes, <strong>given</strong> the conversion leads to the creation of RIs of <i>equal or greater value</i> - E.g., we can change reservations from CPU-intensive instances to more memory-intensive instances - Can be up to 54% cheaper than on-demand</li>
                    <li>Scheduled RIs - Can launch within the time window we reserve - Allows us to match capacity reservation with predictable recurring schedule that may only require compute for a fraction of a day/week/month at a time (e.g., month-end store sale on the last Friday)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Spot Instances</h2>
                <ul>
                    <li>Apps that have flexible start and end times</li>
                    <li>Apps that are only feasible at very low compute prices - E.g., big pharmaceutical, chemical, and genomics (genome) companies will use this to do large-scale computing at, for example, 4am on a Sunday morning</li>
                    <li>Those with an urgent need for large amounts of additional compute capacity</li>
                    <li>If instance is stopped by AWS then you will not be charged for a partial hour of usage, but if <strong>you</strong> stopped the instance you <i>will be</i> charged for the complete hour in which the instance ran</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Dedicated Hosts</h2>
                <ul>
                    <li>Useful for regulatory requirements that may be against multi-tenant virtualization</li>
                    <li>Ideal for licensing, which does not support multi-tenancy or cloud deployments</li>
                    <li>We can purchase on-demand (hourly)</li>
                    <li>We can also purchase as RIs for up to 70% off the on-demand price</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>EBS</h2>
                <ul>
                    <li>Elastic Block Storage</li>
                    <li>Virtual disk in the cloud</li>
                    <li>Allows us to create storage volumes and attach them to EC2 instances</li>
                    <li>Once attached to EC2, we can create a file system on top of these volumes, we can run a database, or use them in any other way we would a block device</li>
                    <li>They are placed in specific Availability Zones (AZs), where they are automatically replicated in order to protect us from disk failures (building redundancies)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>EBS Volume Types</h2>
                <ul>
                    <li>General Purpose SSD (GP2) - Balances both price and performance for a variety of workloads - Ratio of 3 IOPS per GB with up to 10,000 IOPS and the ability to burst up to  3000 IOPS for extended periods of time for volumes  at 3334 GiB and above</li>
                    <li>Provisioned IOPS SSD (IO1) - For I/O intensive (high-performance) apps such as large relational or non-relational databases - Highest performance SSD volume for mission-critical, low-latency or high-throughput workloads - We should use this when we need extreme performance, i.e., more than 10,000 IOPS - Can provision up to 20,000 IOPS per volume</li>
                    <li>Throughput Optimized HDD (ST1) - Low cost volume for frequently accessed, throughput-intensive workloads - Big data, data warehouses, log processing - Cannot be a boot volume</li>
                    <li>Cold HDD (SC1) - Cheapest storage for infrequently accessed workloads - E.g., file server - Cannot be a boot volume</li>
                    <li>Magnetic (Standard) - Previous generation (legacy) - Lowest cost per GB of all <strong>bootable</strong> volume types - Ideal for workloads where data is accessed infrequently, and for apps where cheapest storage cost necessary</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoebs} alt="EBS Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>CLI - Command Line Interface</h2>
                <ul>
                    <li>Secret access key - We only see this once in the console - If it isn't saved we have to delete the key pair (access key id and secret access key) and regenrate it - After regenerating we'll have to run 'aws configure' in the CLI again and insert the new key pair</li>
                    <li>Do not use just one access key - Do not have <i>one</i> key and share with all your team members - In case someone leaves unamicably then you will need to delete the key pair and <i>create a new one for every single person on your team, and they would all need to update their CLIs</i> - <stong>Create one key pair per team member</stong></li>
                    <li><strong>Do not save the key pair in any of your code, because you do not want to accidentally push this information to public repositories - Anyone can get the same access you have as a user to the AWS environment if they just have your key pair</strong></li>
                    <li><strong>Default region of an SDK is \"US-EAST-1\"</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Reminders on IAM</h2>
                <ul>
                    <li>Least privilege - Always give your users the <strong>minimum</strong> level of access required - E.g., user may only need admin access over S3, in which case do not give them full admin access to the console, only give them admin access to S3</li>
                    <li><i>^ Applies to resources as well</i> - E.g., when setting roles for resources like EC2, do not give it the full 'AdministratorAccess' because if the instance is compromised in any way then the malicious actor has access to <strong>all other AWS services</strong> from the instance</li>
                    <li>Create groups - Assign your users to groups - Your users will automatically inherit the permissions of the group and the group's permissions are set using policy documents</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Reminders on EC2/IAM</h2>
                <ul>
                    <li>Roles allow you to not use access key ids and secret access keys</li>
                    <li>Roles are preferred from a <strong>security perspective</strong></li>
                    <li>#RolesOverAccessKeys</li>
                    <li>Roles are controlled by policies</li>
                    <li>We can change a policy on a role and it will og into effect immediately - E.g., if you later decide that whomever is using the EC2 instance should <strong>only be able to read from S3</strong>, as opposed to read/write/delete, you can change the policy in the role and it will go into effect immediately</li>
                    <li>We can attach and detach roles to <i>running instances</i> without needing to stop/terminate</li>
                    <li><i>If your EC2 instance does not have the user's key pair in the credentials file, but the instance was given a role (in the console) which allows it full access to another service like S3, then you can in fact access content in S3 from the instance - If the instance has the S3 access role but also has a <strong>deleted key pair</strong> then EC2 cannot access S3, the deleted key pair-associated credential and config files must be removed from the EC2 for it to access S3</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h3>A HTTP 4XX code means ____</h3>
                <ul>
                    <li>There has been a server side error</li>
                    <li>There has been a redirection</li>
                    <li>The request was succesful</li>
                    <li className="correct-answer">There has been a client side error</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>To retrieve Metadata or Userdata, you will need to use which of the following IP addresses?</h3>
                <ul>
                    <li>http://127.0.0.1</li>
                    <li className="correct-answer">http://169.254.169.254</li>
                    <li>http://10.0.0.1</li>
                    <li>http://192.168.0.254</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which AWS service below is chargeable?</h3>
                <ul>
                    <li className="correct-answer">Elastic Load Balancers</li>
                    <li>Cloud Formation</li>
                    <li>Elastic Beanstalk</li>
                    <li>Autoscaling</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which of the following best describes Amazon ECS?</h3>
                <ul>
                    <li>The Elastic Container Scheduler is software that you can run and manage to orchestrate many running Docker containers</li>
                    <li>The Elastic Container Schedule is a service that manages running Docker containers on a group of your EC2 instances</li>
                    <li className="correct-answer">The Elastic Container Service is software that you can run and manage to orchestrate many running Docker containers</li>
                    <li>The Elastic Container Scheduler is a serverless system to manage running many Docker containers in a flexible and cost-effective way</li>
                    <li>The Elastic Container Service is a serverless system to manage running many Docker containers in a flexible and cost-effective way</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Individual instances are provisioned ____</h3>
                <ul>
                    <li>In regions</li>
                    <li>Globally</li>
                    <li className="correct-answer">In Availability Zones (AZs)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You work for a media production company that streams popular TV shows to millions of users. They are migrating their web application from an in house solution to AWS. They will have a fleet of over 10,000 webservers to meet the demand and will need a reliable layer 4 load balancing solution capable of handling millions of requests per second. What AWS load balancing solution would be suit their needs?</h3>
                <ul>
                    <li>Application Load Balancer</li>
                    <li>Elastic Load Balancer</li>
                    <li className="correct-answer">Network Load Balancer</li>
                    <li>AWS Direct Connect</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>An new CIO joins your company and implements a new company policy that all EC2 instances must have encryption at rest. What is the quickest and easiest way to apply this policy to your existing EC2 instances?</h3>
                <ul>
                    <li>In the AWS console, click on the EC2 instances, click actions and click encrypt EBS volumes</li>
                    <li>Create an encrypted snapshot of the EC2 volume using the ecrypt on the fly option. Create an AMI of the copied snapshot and then redeploy the EC2 instance using the encrypted AMI. Delete the old EC2 instance</li>
                    <li className="correct-answer">Create a snapshot of the EC2 volume. Then create a copy of that volume, checking the box to enable encryption. Create an AMI of the copied snapshot and then redeploy the EC2 instance using the encrypted AMI. Delete the old EC2 instance</li>
                    <li>Create an encrypted AMI of the EC2 volume using Windows Bitlocker</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You run the internal intranet for a corporate bank. The intranet consists of a number of webservers and single relational database running Microsoft SQL Server. Your peak demand occurs at 9am every week morning when users are first logging in to the intranet. They can only log in using the company's internal network and it is not possible to access the intranet from any location other than within the office building for security purposes. Management is considering a change and to move this enironment to AWS where users will be able to access the intranet via a software VPN. You have been asked to evaluate a migration to AWS and to identify the best EC2 billing model for your company's intranet. You must keep costs low and to be able to scale at particular times of day. You must maintain availabilty of the intranet throughout office hours. Management do not want to be locked in to any contracts in case for some reason they want to go back to hosting internally. What EC2 billing model should you recommend?</h3>
                <ul>
                    <li>Reserved Instances</li>
                    <li>Dedicated Instances</li>
                    <li className="correct-answer">On-demand</li>
                    <li>Spot Instances</li>
                </ul>
            </div>
        </div>
    )

}

export default EC2;

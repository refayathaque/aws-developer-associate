import React from 'react';
import '../../styles.css';

import logo from "../../images/Messaging_AmazonSNS.jpg"
import logoSES from "../../images/Messaging_AmazonSES.jpg"

const SNS = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="SNS Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is SNS?</h2>
                <ul>
                    <li><i>Simple Notification Service</i></li>
                    <li><strong>Pub/Sub</strong></li>
                    <li><strong>Push-based</strong></li>
                    <li>Makes it easy to set up, operate, and send notifications from the cloud</li>
                    <li>Provides developers with a highly scalable, available, flexible, and cost-effective capability to publish messages from an app and immediately deliver them to subscribers or other apps</li>
                    <li>We can have push notifications to Apple, Google, Fire OS, Windows, Android devices included devices in China with Baidu Cloud Push</li>
                    <li>Besides pushing cloud notifications directly to mobile devices, SNS can also deliver notifications by SMS text message/email, and also to SQS queues, or any HTTP endpoint</li>
                    <li><strong>Can also trigger Lambda functions</strong> - When a message is published to an SNS topic that has a Lambda subscribed to it, the Lambda is invoked <strong>with the payload of the published message</strong> - The Lambda receives the message payload as an input parameter and can manipulate the information in the message, publish the message to another SNS topic, or send the message to other AWS services</li>
                    <li>Consumers must <strong>subscribe to a topic</strong> to receive notifications - <strong>Synchronous, because consumers must be subscribed in order to get notifications</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Pub/Sub</h2>
                <ul>
                    <li>Follows the "publish-subscribe" messaging paradigm</li>
                    <li>Notifications delivered to clients (that are subscribed) using a <strong>"push" mechanism that eliminates the need to periodically check or "poll" for new information and updates</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Topics</h2>
                <ul>
                    <li>Group multiple recipients using topics</li>
                    <li>A topic is <strong>an access point for allowing recipients to dynamically subscribe for identical copies of the same notification</strong></li>
                    <li><i>One topic can support deliveries to multiple endpoint types</i> - E.g., we can group together iOS, Android and SMS recipients</li>
                    <li>When we publish once to a topic, SNS delivers appropriately formatted copies of our message to each subscriber</li>
                    <li><i>Can have multiple subscribers to a topic</i></li>
                    <li><strong>Can fan out messages to large # of recipients (replicate and push messages to multiple endpoints in different formats)</strong></li>
                    <li>To prevent messages from being lost, all messages publushed to SNS are <strong>stored redundantly across multple AZs (Availability Zones)</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Benefits</h2>
                <ul>
                    <li><strong>Instantenous, push-based delivery (no polling)</strong></li>
                    <li>Simple APIs and easy integration with our apps</li>
                    <li><i>Flexible message deliver over mutiple transport protocols</i></li>
                    <li>Inexpensive, pay-as-you-go model with no up-front costs</li>
                    <li>Web-based AWS Management Console offers simplicity of a point-and-click interface</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Pricing</h2>
                <ul>
                    <li>$0.50 per 1 million SNS requests</li>
                    <li>$0.06 per 100,000 notification deliveries over HTTP</li>
                    <li>$0.75 per 100 notification deliveries over SMS</li>
                    <li>$2.00 per 100,000 notification deliveries over email</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoSES} alt="SES Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>SES</h2>
                <ul>
                    <li><i>Simple Email Service</i></li>
                    <li><strong>Email only</strong></li>
                    <li>Automated emails</li>
                    <li><i>Asynchronous</i></li>
                    <li>Not subscription based, we only need to know the recipient's email address</li>
                    <li>Scalable and highly available email service designed to help <strong>marketing teams and app developers send marketing/notification/transaction emails to their customers</strong> using a pay-as-you-go model</li>
                    <li>Can also be used to <strong>receive emails</strong>: Incoming email can be delivered automatically to an S3 bucket</li>
                    <li><strong>Incoming emails can also be used to trigger Lambda functions and SNS notifications</strong></li>
                    <li><strong>For both incoming and outgoing email</strong></li>
                    <li>E.g., purchase confirmations, shipping notifications, order status updates, marketing communications, advertisements, newsletters, special offers</li>
                </ul>
            </div>
        </div>
    )

}

export default SNS

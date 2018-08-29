import React from 'react';
import '../../styles.css';

import logo from "../../images/Messaging_AmazonSQS.jpg"
import logoQueue from "../../images/Messaging_AmazonSQS_queue.jpg"

const SQS = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="SQS Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>SQS</h2>
                <ul>
                    <li><i>Simple Queue Service</i></li>
                    <li><i>First ever AWS service that was publically available</i></li>
                    <li>Gives us access to a message queue that can be used to store messages while waiting for a computer to process them</li>
                    <li><strong>Distributed message queueing system</strong> that enables web service apps to quickly and reliably queue messages that one component in the app generates to be consumed by another component - <strong>A queue is a temporary repository for messages that are awaiting processing</strong></li>
                    <li><strong>Always a pull-based system</strong>, not pushed-based</li>
                    <li>We can use this to <strong>decouple the components of an app so they run independently</strong>, easing message management between components</li>
                    <li>Any component of a distributed app can store messages in a fail-safe queue - Messages can contain <strong>up to 256Kb</strong> of text in any format - Any component can later retrieve the messages programatically using the SQS API</li>
                    <li>The queue acts as a buffer between the component producing and saving data, the component receiving the data for processing - This means that the queue resolves issues that arise if the producer is producing work faster than the consumer can process it, or ig the producer or consumer are only intermittently connected to the network</li>
                    <li>E.g., ^ we can configure EC2 Auto-Scaling Groups to automatically spin up (provision) additional EC2 instances if there are more than a certain number of messages in our queue, in the same way, we can configure a EC2 'cool down' to disable what may be excess EC2 capacity if there are not too many messages in the queue</li>
                    <li><strong>Guaranteed that our messages will be processed at least once</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Queue Types</h2>
                <ul>
                    <li><strong>Standard Queues (default)</strong> - Lets us have a nearly-unlimited # of transactions per second - Guarantee that a message is <strong>delivered at least once</strong> - However, ocassionally (because of the highly-distributed architecture that allows high-throughput), more than one copy of a message might be delivered out of order - Provide the <strong>best-effort ordering</strong> which ensures that messages are generally delivered in the same order as they are sent, but this <strong>is not guaranteed</strong></li>
                    <li>E.g, ^ -> 4 -> 3 -> 3 -> 5 -> 2 -> 1</li>
                    <li><strong>FIFO Queues (First-In-First-Out delivery)</strong> - Started only last year - Exactly-once processing: <strong>Order in which messages are sent and received is strictly preserved and a message is delivered once and remains available until a consumer processes and deletes it - Duplicates are not introduced into the queue</strong> - Support message groups that allow <strong>multiple ordered message groups within a single queue</strong> - Limited to 300 transactions per second, but have all the capabilities of standard queues</li>
                    <li>Real world example of FIFO would be banking, since transactions need to occur following a strict order</li>
                    <li>E.g, ^ -> 5 -> 4 -> 3 -> 2 -> 1</li>
                    <li>Messages can be kept in queues from <strong>1 minute to 14 days</strong> - <strong>Default retention period is 4 days</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Visibility Timeout</h2>
                <ul>
                    <li><i>Amount of time that the message is invisible in the queue after a reader picks it up</i></li>
                    <li><i>Provided that the job is processed before the visibility timeout expires, the message will be deleted from the queue</i></li>
                    <li><strong>If the job is not processed within the visibility timeout duration, the message will become visible again and another reader will process it</strong> - This could result in the same message being delivered twice</li>
                    <li>E.g., our visibility timeout is set to 1 minute, but it takes 5 minutes for the job process, the message will become visible again in the queue, so then another EC2 instance will pick that up - Our message could be delivered multiple times because in this case our visibility timeout is too low</li>
                    <li><strong>Default visibility timeout is 30 seconds</strong></li>
                    <li><i>Increase ^ if your job process, or task, takes > 30 seconds</i></li>
                    <li><strong>Maximum visibility timeout is 12 hours</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Long Polling</h2>
                <ul>
                    <li>Another way to retrieve messages from our SQS queues - <i>Default is short polling</i></li>
                    <li>While regular short polling returns responses immediately (even if the message queue being polled is empty), <strong>long polling does not return a response until a message arrives in the queue, or the long poll timeout is reached</strong></li>
                    <li><strong>Maximum long poll timeout: 20 seconds</strong></li>
                    <li><i>Polls the queue periodically</i>, as opposed to all the time (short polling)</li>
                    <li>As such, <strong>long polling can save us money</strong> - By default EC2 will short poll so it will constantly be polling the queue, even if there are no messages there, and this will increase the cost</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoQueue} alt="SQS Queue Logo"></img>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You run a video-hosting website with two types of members: premium, fee-paying members; and free members. Each video that is uploaded is processed by a fleet of EC2 instances, which poll an SQS queue as videos are uploaded. However, you need to ensure that the videos uploaded by your premium, fee-paying members have a higher priority than those of your free members. How might you work with SQS to endure priority treatment of the premium members' videos?</h3>
                <ul>
                    <li>SQS would not be suitable for this scenario. It would be much better to use SNS to encode the videos.</li>
                    <li className="correct-answer">Create two SQS queues — one for premium members, and one for free members. Program your EC2 fleet to poll the premium queue first and, if empty, to then poll your free members SQS queue.</li>
                    <li>SQS allows you to set priorities on individual items within the queue, so simply set the fee paying members at a higher priority than your free members.</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>An SQS message can be delivered multiple times.</h3>
                <ul>
                    <li className="correct-answer">True</li>
                    <li>False</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Your EC2 instances download jobs from an SQS queue. However, they are taking too long to process the messages. What API call can you use to extend the length of time to process the jobs?</h3>
                <ul>
                    <li className="correct-answer">ChangeMessageVisibility</li>
                    <li>AlterMessageTime</li>
                    <li>SetMessageVisibility</li>
                    <li>ExtendMessageTime</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the default visibility timeout for a message in an SQS queue?</h3>
                <ul>
                    <li>1 year</li>
                    <li>15 minutes</li>
                    <li>1 minute</li>
                    <li className="correct-answer">30 seconds</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the maximum visibility of an SQS message in a queue?</h3>
                <ul>
                    <li>14 days</li>
                    <li>1 day</li>
                    <li className="correct-answer">12 hours</li>
                    <li>1 hour</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the maximum retention period for an SQS message?</h3>
                <ul>
                    <li>12 hours</li>
                    <li>1 hour</li>
                    <li className="correct-answer">14 days</li>
                    <li>1 day</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>SQS was the first service on the AWS platform?</h3>
                <ul>
                    <li className="correct-answer">True</li>
                    <li>False</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>How large can an SQS message be?</h3>
                <ul>
                    <li className="correct-answer">256Kb</li>
                    <li>512Kb</li>
                    <li>128Kb</li>
                    <li>64Kb</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You have a fleet of EC2 instances that are constantly polling empty SQS queues, burning CPU cycles and costing your company money. What should you do?</h3>
                <ul>
                    <li>Delete the entire EC2 fleet so that they no longer poll the queue</li>
                    <li className="correct-answer">Enable SQS Long Polling</li>
                    <li>Enable SQS Short Polling</li>
                    <li>Consider using ElastiCache to cache the messages, rather than SQS</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which Amazon service can you use in conjunction with SQS to \"fan out\" SQS messages to multiple queues?</h3>
                <ul>
                    <li>Elasticache</li>
                    <li>SWF</li>
                    <li className="correct-answer">SNS</li>
                    <li>SES</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the maximum long poll time out?</h3>
                <ul>
                    <li className="correct-answer">20 seconds</li>
                    <li>5 minutes</li>
                    <li>50 seconds</li>
                    <li>1 hour</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You are designing a new application that processes payments and delivers promotional emails to customers. You need to ensure that the payment process takes priority over the creation and delivery of emails. How might you use SQS to achieve this.</h3>
                <ul>
                    <li>Use 1 SQS queue for the platform. Use the SetPriority API call to ensure that all payment SQS messages take priority over the promotional email messages</li>
                    <li>Use 1 SQS queue for the platform. Use the HighPriority API call to ensure that all payment SQS messages take priority over the promotional email messages</li>
                    <li>Use 2 SQS queues for the platform. Have the EC2 fleet poll the promotional emails SQS queue first. If this queue is empty, then poll the payment emails queue</li>
                    <li className="correct-answer">Use 2 SQS queues for the platform. Have the EC2 fleet poll the payment SQS queue first. If this queue is empty, then poll the promotional emails queue</li>
                </ul>
            </div>
        </div>
    )

}

export default SQS

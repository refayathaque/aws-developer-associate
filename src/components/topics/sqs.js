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
                    <li><strong>Distributed queue system</strong> that enables web service apps to quickly and reliably queue messages that one component in the app generates to be consumed by another component - <strong>A queue is a temporary repository for messages that are awaiting processing</strong></li>
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
                    <li><strong>Standard Queues (default)</strong> - Lets us have a nearly-unlimited # of transactions per second - Guarantee that a message is delivered at least once - However, ocassionally (because of the highly-distributed architecture that allows high-throughput), more than one copy of a message might be delivered out of order - Provide the <strong>best-effort ordering</strong> which ensures that messages are generally delivered in the same order as they are sent, but this <strong>is not guaranteed</strong></li>
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
                    <li>Provided that the job is processed before the visbility timeout expires, then the message will be deleted from the queue</li>
                    <li>If the job is not processed within the visibility timeout duration, the message will become visible again and another reader will process it - This could result in the same message being delivered twice</li>
                    <li>E.g., our visibility timeout is set to 1 minute, but it takes 5 minutes for the job process, the message will become visible again in the queue, so then another EC2 instance will pick that up, so our message could be delivered multiple times because in this case our visibility timeout is too low</li>
                    <li><strong>Default visibility timeout is 30 seconds</strong></li>
                    <li><i>Increase ^ if your job process/task takes > 30 seconds</i></li>
                    <li><strong>Maximum visibility timeout is 12 hours</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Long Polling</h2>
                <ul>
                    <li>Another way to retrieve messages from our SQS queues - <i>Default is short polling</i></li>
                    <li>While regular short polling returns responses immediately (even if the message queue being polled is empty), <strong>long polling does not return a response until a message arrives in the queue, or the long poll times out</strong></li>
                    <li><i>Pills the queue periodically</i>, as opposed to all the time</li>
                    <li>As such, <strong>long polling can save us money</strong> - By default EC2 will short poll so it will constantly be polling the queue, even if there are no messages there, and this will increase the cost</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoQueue} alt="SQS Queue Logo"></img>
            </div>
        </div>
    )

}

export default SQS

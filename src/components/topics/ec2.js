import React from 'react';
import '../../styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EC2 = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline">
                <h3>What is EC2?</h3>
                <ul>
                    <li>Web service providing resizeable compute capacity</li>
                    <li>Reduces time needed to obtain and boot new server instances to just minutes (as opposed to days)</li>
                    <li>Allowing us to quickly scale capacity (up, down, and even <i>out</i> by virtue of adding additional instances) with changing requirements</li>
                    <li>Changed <strong>economics</strong> of cloud computing</li>
                    <li>Only pay for capacity you <i>actually</i> use, no over-provisioning</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>EC2 Pricing Options</h3>
                <ul>
                    <li>On demand - Pay a fixed rate by the hour (or second) without commitment, e.g., <FontAwesomeIcon icon={["fab", "linux"]} size="lg" /> instances by the second, whereas <FontAwesomeIcon icon={["fab", "windows"]} /> instances by the hour</li>
                    <li>Reserved - 1 or 3-year commitment for capacity reservations, providing significant discount for hourly rate of instance</li>
                    <li>Allows us to bid whatever price we want for instance capacity, leading to even larger savings if apps have flexible start and end time, bid prices are constantly changing, good analogy: <i>stock market</i></li>
                    <li>Dedicated Hosts - Physical EC2 servers dedicated for our use, helps to reduce costs by allowing us to use our existing server-bound software licenses (e.g., VMWare, Oracle, SQL)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>On-Demand</h3>
                <ul>
                    <li>Ideal for users looking for the low cost and flexibility of EC2 without having to commit long-term or make up-front payments</li>
                    <li>Apps with short term/spiky/unpredictable workloads that <strong>cannot be interrupted</strong></li>
                    <li>Apps being developed and tested on EC2 for the first time (also great for learning)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Reserved Instances (RIs)</h3>
                <ul>
                    <li>Apps with steady state, i.e., predictable usage, e.g., web servers</li>
                    <li>Apps requiring reserved capacity</li>
                    <li>We can make up-front payments to reduce total compute costs even further, e.g., if we make a 3-year commitment and pay for it <i>all up-front</i>, we will maximize the discount</li>
                    <li>Standard RIs - Up to 75% cheaper than on-demand</li>
                    <li>Convertible RIs - Can change its attributes, <strong>given</strong> the exchange leads to the creation of RIs of <i>equal or greater value</i>, e.g., we can change reservations from CPU-intensive instances to more memory-intensive instances, and can be up to 54% cheaper than on-demand</li>
                    <li>Scheduled RIs - Can launch within the time window we reserve, allows us to match capacity reservation to predicatibale recurring schedule that may only require compute for a fraction of a day/week/month at a time (e.g., month-end sale on the last Friday)</li>
                </ul>
            </div>
        </div>
    )
}

export default EC2;

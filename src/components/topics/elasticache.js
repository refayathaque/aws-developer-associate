import React from 'react';
import '../../styles.css';

import logo from "../../images/Database_AmazonElasticCache.jpg"

const Elasticache = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="Elasticache"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is Elasticache?</h2>
                <ul>
                    <li>Service making it easy to deploy, operate, and scale an <strong>in-memory cache in the cloud</strong></li>
                    <li>Improves performance of web apps by allowing us to retrieve information from fast, managed, in-memory caches - Instead of relying entirely on slower disk-based databases</li>
                    <li>Supports two open-source in-memory caching engines: <strong>Memcached and Redis</strong></li>
                    <li>E.g., you're running an e-commerce platform and you want <i>all users</i> to see the top 5 weekly best-sellers every time they visit - Rather than making a production database query to retrieve those 5 items, you can keep data on these 5 items in elasticache - Since the data will remain uniform for all visitors, and they will be seeing it <i>every time they go to the platform (frequent access)</i> - This takes a significant load off your production database</li>
                    <li>Great for <strong>frequently</strong> accessed information - Can make our production databases faster by taking some load off</li>
                    <li>Can be used to significantly <strong>reduce latency and improve throughput</strong> for many read-heavy app workloads - E.g., social networking, gaming, media sharing, and Q&A portals - Also for compute-intensive workloads (e.g., recommendation engine)</li>
                    <li>Improves app performance by <i>storing critical pieces of data in memory for low-latency access</i></li>
                    <li>Cached information may include results of I/O-intensive database queries or results of computationally-intensive calculations</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Types of Elasticache</h2>
                <ul>
                    <li>Memcached - Widely adopted memory object caching system - In-memory key store - Elasticache is protocol compliant with this, so popular tools you use today with existing Memcached environments will work seamlessly with Elasticache</li>
                    <li>Redis - Popular open-source in-memory key-value store - Supports data structures such as sorted sets and lists - Elasticache supports master / slave replication and Multi-AZ which can be used to achieve cross AZ redundancy</li>
                    <li><strong>If you need Multi-AZ use Redis, if you are not concerned about redundancy then use Memcached</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Redis</h2>
                <ul>
                    <li>Due to replication and persistence features of Redis, Elasticache manages Redis more as a relational database</li>
                    <li>Redis Elasticache clusters are managed as stateful entities that include failover, similar to how RDS manages database failover</li>
                    <li>Advanced data types like <strong>lists, hashes, and sets</strong></li>
                    <li>Do you need to <strong>sort and rank</strong> in memory? - E.g., <strong>leaderboards</strong></li>
                    <li>If <i>persistence</i> of your key store is important</li>
                    <li><strong>If you want to run in mulitple AZs (Multi-AZ) with failover</strong></li>

                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Memcached</h2>
                <ul>
                    <li>Since Memcached is designed as a pure caching solution with no persistence, Elasticache manages Memcached nodes as a pool that can grow and shrink, similar to EC2 Auto Scaling Groups</li>
                    <li>Individual nodes are expendable, and Elasticache provides additional capabilities here, such as automatic node replacement and auto discovery</li>
                    <li><i>Use cases:</i></li>
                    <li>If object caching is your primary goal, e.g, to offload your database</li>
                    <li>Interested in <strong>as simple a caching model as possible</strong></li>
                    <li>Planning on running large cache nodes, and require multithreaded performance with utilization of multiple cores</li>
                    <li>Ability to scale your cache horizontally (scale out) as your grow</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Exam Tips</h2>
                <ul>
                    <li>Scenario - Database is under a lot of stress/load, so which service should be used to alleviate?</li>
                    <li>Answer 1 - Elasticache, if the database is particualrly read-heavy and not prone to frequent changes</li>
                    <li>Answer 2 - (<i>If question is related to data warehousing</i>) - Redshift, if the reason your database is stressed is due to the company management frequently running OLAP transactions on it</li>
                    <li>Memcached - When object caching is your primary goal, you want to keep things as simple as possible, you want to scale your cache horizonally (scale out)</li>
                    <li>Redis - You have advanced data types like lists, hashes, and sets, you are doing data sorting and ranking (leaderboards), you need data persistence, you need Multi-AZ, and if you may need pub/sub capabilities</li>
                </ul>
            </div>
        </div>
    )

}

export default Elasticache

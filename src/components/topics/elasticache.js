import React from 'react';
import '../../styles.css';

import logo from "../../images/Database_AmazonElasticCache.jpg"
import logoMemcached from "../../images/Database_AmazonElasticCache_Memcached.jpg"
import logoRedis from "../../images/Database_AmazonElasticCache_Redis.jpg"

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
                    <li>Sits between our app and the database (DynamoDB or RDS)</li>
                    <li>Supports two open-source in-memory caching engines: <strong>Memcached and Redis</strong></li>
                    <li>E.g., you're running an e-commerce platform and you want <i>all users</i> to see the top 5 weekly best-sellers every time they visit - Rather than making a production database query to retrieve those 5 items, you can keep data on these 5 items in elasticache - Since the data will remain uniform for all visitors, and they will be seeing it <i>every time they go to the platform (frequent access)</i> - This takes a significant load off your production database</li>
                    <li>Great for <strong>frequently</strong> accessed information - Can make our production databases faster by taking some load off</li>
                    <li>Can be used to significantly <strong>reduce latency and improve throughput</strong> for many <strong>read-heavy app workloads</strong> - E.g., social networking, gaming, media sharing, and Q&A portals - Also for compute-intensive workloads (e.g., recommendation engine)</li>
                    <li>Improves app performance by <i>storing critical pieces of data in memory for low-latency access</i></li>
                    <li>Particularly advantageous if our data <strong>is not changing frequently</strong></li>
                    <li>Also good for compute heavy workloads - E.g., recommendation engines</li>
                    <li>Cached information may include results of I/O-intensive database queries or results of computationally-intensive calculations</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Caching Strategies : Lazy Loading</h2>
                <ul>
                    <li><strong>Lazy Loading - Loads the data into the cache only when necessary</strong> - If the requested data is in the cache, Elasticache returns the data - If the data is not in the cache, or the cache has expired (related to TTL), Elasticache returns a <strong>null</strong></li>
                    <li><i>If the data is not in the cache, our app will fetch the data from the database and will also write the data received into the cache so the data is available in subsequent query attempts</i></li>
                    <li>Advantages - <i>Only requested data is cached</i>: avoids filling up cache with useless data - Node failures are not fatal, a new empty node will just have a lot of cache misses initially</li>
                    <li>Disadvantages - Cache miss penalty: Initial request will fail, so we will have to make a query to the database, then write the data into the cache and all this adds to our overhead - <i>Stale data</i>: If data is updated only when there is a <strong>cache miss</strong>, the data <strong>can become stale</strong>, and this does not automatically update if the data in the database changes</li>
                    <li>How to deal with stale data? - TTL (Time To Live) - TTL specifies the # of seconds until the key (data) expires to avoid keeping state data in the cache - Lazy Loading treats an expired key as a cache miss and causes the app to retrieve the data from the database and subsequently write the data into the cache with a new TTL - <strong>This strategy does not eliminate state data, but can help in reducing the amount of time our data is stale</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Caching Strategies : Write Through</h2>
                <ul>
                    <li><strong>Adds/updates data to the cache whenever data is written to the database</strong></li>
                    <li>Advantages - <strong>Data in the cache is never stale</strong> - Users are generally more tolerant of additional latency (due to <i>write penalty</i>) when updating data than when retrieving it</li>
                    <li>Disadvantages - <strong>Write penalty</strong>: Every write involves a write to the cache <i>as well as a write to the database</i> (can result in latency) - If a node fails and a new one is spun up, data is missing until added or updated in the database (<strong>we can mitigate by implementing Lazy Loading (because it will automatically fetch when there is no data in the cache) in conjuction with Write Through</strong>) - <i>Wasted resources if most of the data is never read</i>, if only a few of our data points are being frequently read then the Write Through strategy is not ideal</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Types of Elasticache</h2>
                <ul>
                    <li>Memcached - Widely adopted memory object caching system - In-memory key store - Elasticache is protocol compliant with this, so popular tools you use today with existing Memcached environments will work seamlessly with Elasticache - <strong>Multi-threaded - No Multi-AZ capability (Not clustered, only stand-alone, so if AWS loses this you'll lose everything in the cache)</strong></li>
                    <li>Redis - Popular open-source in-memory key-value store - Supports data structures such as sorted sets and lists - Elasticache <strong>supports master / slave replication and Multi-AZ which can be used to achieve cross AZ redundancy</strong></li>
                    <li><strong>If you need Multi-AZ use Redis</strong>, if you are not concerned about redundancy then use Memcached</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Exam Tips</h2>
                <ul>
                    <li>Scenario - Your database is under a lot of stress/load, so which service should be used to alleviate this problem?</li>
                    <li>Answer 1 - <strong>Elasticache, if the database is particualrly read-heavy and not prone to frequent changes</strong></li>
                    <li>Answer 2 - (<i>If question is related to data warehousing</i>) - Redshift, if the reason your database is stressed is due to the company's management frequently running OLAP transactions on it</li>
                    <li>Memcached - When object caching is your primary goal, you want to keep things as simple as possible, you want to scale your cache horizonally (scale out)</li>
                    <li>Redis - You have advanced data types like lists, hashes, and sets, you are doing data sorting and ranking (leaderboards), you need data persistence, you need Multi-AZ, and if you may need pub/sub capabilities</li>
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
            <div className="topics-flex-item-inline-logo">
                <img src={logoRedis} alt="Redis Logo"></img>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoMemcached} alt="Memcached Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Memcached</h2>
                <ul>
                    <li>Pronounced 'Mem'-'Cache'-'Dee'</li>
                    <li>Since Memcached is designed as a pure caching solution with no persistence, Elasticache manages Memcached nodes as a pool that can grow and shrink, similar to EC2 Auto Scaling Groups</li>
                    <li>Individual nodes are expendable, and Elasticache provides additional capabilities here, such as automatic node replacement and auto discovery</li>
                    <li><i>Use cases:</i></li>
                    <li>If <strong>object caching is your primary goal, e.g, to offload your database</strong></li>
                    <li>Interested in <strong>as simple a caching model as possible</strong></li>
                    <li>Planning on running large cache nodes, and require multithreaded performance with utilization of multiple cores</li>
                    <li><strong>Ability to scale your cache horizontally (scale out)</strong> as your grow</li>
                </ul>
            </div>
        </div>
    )

}

export default Elasticache

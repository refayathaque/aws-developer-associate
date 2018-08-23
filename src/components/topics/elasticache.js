import React from 'react';
import '../../styles.css';

import logo from "../../images/Database_AmazonElasticCache.jpg"

const Elasticache = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="A Cloud Guru Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is Elasticache?</h2>
                <ul>
                    <li>Service making it easy to deploy, operate, and scale an <strong>in-memory cache in the cloud</strong></li>
                    <li>Improves performance of web apps by allowing us to retrieve information from fast, managed, in-memory caches - Instead of relying entirely on slower disk-based databases</li>
                    <li>Supports two open-source in-memory caching engines: <strong>Memcached and Redis</strong></li>
                    <li>E.g., you're running an e-commerce platform and you want <i>all users</i> to see the top 5 weekly best-sellers every time they visit - Rather than making a production database query to retrieve those 5 items, you can keep data on these 5 items in elasticache - Since the data will remain uniform for all visitors, and they will be seeing it <i>every time they go to the platform (frequent access)</i> - This takes a significant load off your production database</li>
                    <li>Great for <strong>frequently</strong> accessed information - Can make our production databases faster by taking some load off</li>
                </ul>
            </div>
        </div>
    )

}

export default Elasticache

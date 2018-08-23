import React from 'react';
import '../../styles.css';

import logo from "../../images/Database_AmazonRDS.jpg"

const RDS = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline">
                <h2>Relational Database Types</h2>
                <ul>
                    <li>SQL Server</li>
                    <li>Oracle</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Amazon Aurora</li>
                    <li>MariaDB</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is Data Warehousing?</h2>
                <ul>
                    <li>For business intelligence</li>
                    <li>E.g., Cognos, Jaspersoft, SQL Server Reporting Services, Oracle Hyperion, and SAL NetWeaver</li>
                    <li>Used to pull in massive and very complex data sets - Which are then used by company management to do queries on the data (in order to figure out current performance vs. targets, etc.)</li>
                    <li>Production databases will push out data to data warehouses for when we want to do ^ data intensive queries - We do not want to do ^ data intensive queries on our production databases and risk having them crash</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>OLTP vs. OLAP</h2>
                <ul>
                    <li>OLTP - Online Transaction Processing</li>
                    <li>OLAP - Online Analytics Processing</li>
                    <li>AWS OLAP - RedShift</li>
                    <li>Difference lies with the <i>types of queries</i> being run</li>
                    <li>OLTP - E.g., an online store's customer service representative pulls up order details by the order number, so using the order number a row of data is extracted that has things like the customer's name, date of purchase, address delivered to, delivery status, etc. - Data is simple - Data accessed <strong>frequently</strong></li>
                    <li>OLAP - E.g., a manufacturing company trying to figure out the net profit for two regions, which will require huge numbers of records for a plethora of different things such as number of items sold in both regions, unit cost in each region, sales price in each region, etc. - After the necessary data is extracted complex calculations must be done to determine the net profit (profit = revenue - cost, foreign currency conversions, and other mathematical processes) - Data is complex - Data accessed <strong>infrequently</strong></li>
                    <li>OLAP - Very complex queries require data warehousing databases to use different types of architecture both from a database perspective and infrastructire layer</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="RDS"></img>
            </div>
        </div>
    )

}

export default RDS

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
            <div className="topics-flex-item-block">
                <h2>Common Exam Topic</h2>
                <ul>
                    <li>EC2 to RDS connection troubleshooting</li>
                    <li>RDS inbound security group must be <strong>opened up with type: MYSQL/Aurora, protocol: TCP, port range: 3306 to the EC2 security group as the source</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-block">
                <h2>Two types of backups: Automated Backups and Database Snapshots</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Automated Backups</h2>
                <ul>
                    <li>Allows us to recover our database to any point in time within a <strong>retention period</strong></li>
                    <li>Retention period - Between 1 and 35 days</li>
                    <li>Takes a full daily snapshot and will also store transaction logs throughout the day</li>
                    <li>When we do a recovery, AWS will first choose the most recent daily back up, then apply transaction logs relevant to that specific day</li>
                    <li>We can do <i>point in time recovery down to a second</i>, within the retention period</li>
                    <li>Enabled by default</li>
                    <li>Backup data is stored in S3 and we get free storage in S3 equal to the size of the database - E.g., if our RDS is 10Gb, then we get 10Gb in S3</li>
                    <li>Backups are taken within a defined window - We can define/redefine the window</li>
                    <li>During the backup window, storage I/O may be suspended while data is being backed up - Possible <strong>elevated latency</strong> in database</li>
                    <li><i>If you delete the original RDS instance all its automated backups will also be deleted</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Database Snapshots</h2>
                <ul>
                    <li>Done manually - by the user</li>
                    <li>Stored even after the original RDS instance is deleted - Unlike with automated backups</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Restoring Backups</h2>
                <ul>
                    <li>Whenever we restore either an automated backup or manual snapshot, the restored version of the database will be a <strong>new RDS instance with a new DNS endpoint</strong></li>
                    <li>original.eu-west-1.rds.amazonaws.com ...becomes... restored.eu-west-1.rds.amazonaws.com</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Encryption</h2>
                <ul>
                    <li>Encryption at rest is supported for MySQL, ORacle, SQL Server, PostgreSQL, MariaDB, and Aurora</li>
                    <li>Done using KMS (Key Management Service)</li>
                    <li>Once RDS is encrypted, the data stored at rest in the underlying storage is encrypted, as are its automated backups, read replicas, and snapshots - After the database is encrypted, anything you do with the data (e.g., make a copy of it) will also be encrypted</li>
                    <li>Currently, we <strong>cannot encrypt an existing RDS instance</strong></li>
                    <li>To use RDS encryption for an existing database we must first <i>create a snapshot, make a copy of that snapshot, and then encrypt the copy</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is Multi-AZ RDS?</h2>
                <ul>
                    <li>Available for SQL Server, Oracle, MySQL Server, PostgreSQL, MariaDB, and Aurora</li>
                    <li><i>Each region is a separate geographic area. Each region has multiple, isolated locations known as Availability Zones (AZs)</i></li>
                    <li>Multi-AZ allows us to have an exact copy of the production database in another AZ (essentially another data center/server farm within a region like us-east-1)</li>
                    <li>AWS handles the replication for us, so when the production database is written to, this write will automatically be sync'ed to the standby database in the other AZ</li>
                    <li>In the event of planned database maintenance, a database instance failure, or an AZ failure, RDS will <strong>automatically failover to the standby</strong> so that database operations can resume quickly without administrative intervention</li>
                    <li>If ^ happens, downtime will only be a minute or two</li>
                    <li><strong>Multi-AZ is for disaster recovery only</strong></li>
                    <li>Not primarily used for improving performance, if you want to <strong>improve performance you need read replicas</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is a Read Replica?</h2>
                <ul>
                    <li>Read-only copies of your production database</li>
                    <li>Achieved by using asynchronous replication from the primary RDS instance to the read replica</li>
                    <li>Used primarily for very read-heavy database workloads - E.g., a blog/news site where you have many people coming in and just reading content, instead of writing</li>
                    <li>Available for MySQL Server, PostgreSQL, MariaDB, and Aurora - <strong>Not SQL Server or Oracle</strong></li>
                    <li><i>Used for scaling</i>, not disaster recovery</li>
                    <li><strong>Must have automatic backups turned on in order to deploy a read replica</strong></li>
                    <li>Can have <strong>up to 5</strong> read replica copies of any database</li>
                    <li>Can have read replicas <i>of read replicas</i> (but watch out for latency)</li>
                    <li>Each read replica will have its <strong>own DNS endpoint</strong></li>
                    <li>Can have read replicas that have <strong>Multi-AZ</strong></li>
                    <li>Can create read replicas of Multi-AZ source databases</li>
                    <li>Can be <strong>promoted</strong> to be their own databases, this will however break the replication</li>
                    <li>Can have a read replica in a <i>second region</i></li>
                </ul>
            </div>
        </div>
    )

}

export default RDS

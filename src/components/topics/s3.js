import React from 'react';
import '../../styles.css';

import logo from "../../images/Storage_AmazonS3.jpg"

const S3 = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="S3"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>What is S3?</h2>
                <ul>
                    <li><strong>Simple Storage Service</strong></li>
                    <li>Provides us with secure, durable, highly-scalable <strong>object</strong> storage - E.g., files/images/web pages, <i>not for databases (it is not block storage) and operating systems</i></li>
                    <li>Easy to use - Simple web services interface allows us to store and pull any amount of data from anywhere on the web</li>
                    <li>Data is spread across multiple devices and facilities - High availability and disaster recovery</li>
                    <li>Unlimited storage</li>
                    <li>Files can be between 0 bytes and 5Tb</li>
                    <li>Files are stored in <strong>buckets</strong> (i.e., folders)</li>
                    <li>S3 is a universal namespace - Names must be unique globally - Similar to DNS</li>
                    <li>Upon a succesful file upload we will get a HTTP 200 code</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Data Consistency Model</h2>
                <ul>
                    <li><strong>Read after write consistency</strong> for PUTS of new objects - I.e., immediately after you upload a new file, it can be read/accessed</li>
                    <li><strong>Eventual consistency</strong> for overwrite PUTS (change to a file) and DELETES - Can take some time to propagate - Not immediate</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Simple Key-Value Store</h2>
                <ul>
                    <li><i>Object based</i></li>
                    <li>Objects consist of the following:</li>
                    <li>Key - Name of the object/file</li>
                    <li>Value - Data (made up of sequence of bytes)</li>
                    <li>Version ID - Important for versioning</li>
                    <li>Metadata - Data about data</li>
                    <li>Subresources - Bucket-specific configuration, e.g., bucket policies, access control lists, CORS (Cross Origin Resource Sharing), transfer acceleration</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>The Basics</h2>
                <ul>
                    <li>Built for 99.99% availability for the S3 platform - Meaning it is <i>essentially always</i> accessible</li>
                    <li>Amazon guarantees 99.9% availability</li>
                    <li>Amazon guarantees 99.99999999999% (11 9s) durability for S3 data - Meaning it is <i>very</i> safe</li>
                    <li>Tiered storage available</li>
                    <li>Lifecycle management</li>
                    <li>Versioning</li>
                    <li>Encryption</li>
                    <li>Secure access to your S3 data using control lists and bucket policies</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Storage Tiers/Classes</h2>
                <ul>
                    <li>S3 - 99.99% availability, 99.99999999999% (11 9s) durability, stored redundantly across multiple facilities, and is designed to sustain the loss of 2 facilities concurrently</li>
                    <li>S3 IA - Infrequently Accessed - For data that is accessed less frequently, but requires rapid access when needed - Cheaper than ^ S3, but we get charged a retrieval fee</li>
                    <li>S3 One Zone IA - Same as ^ IA but data is stored in a <strong>single AZ only</strong> - Still 99.99999999999% (11 9s) durability, but only 99.5% availability - 20% cheaper than standard S3 IA</li>
                    <li>Reduced Redundancy Storage - Designed to provide 99.99% durability and 99.99% availability of objects over a give year - Used for data that can be recreated if lost, e.g., thumbnails - (<i>Starting to disappear from AWS documentation but could be in the exam</i>)</li>
                    <li>Glacier - Very cheap - Used for archival only - Optimized for data that is infrequently accessed - Takes 3 to 5 hours to restore</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Storage Tiers/Classes</h2>
                <ul>
                    <li>S3 - 99.99% availability, 99.99999999999% (11 9s) durability, stored redundantly across multiple facilities, and is designed to sustain the loss of 2 facilities concurrently - For frequently accessed objects</li>
                    <li>S3 IA - Infrequently Accessed - For data that is accessed less frequently, but requires rapid access when needed - Unlike ^ S3, availability is 99.9%, but like ^ S3 durability is 99.99999999999% (11 9s)  - Cheaper than ^ S3, but we get charged a retrieval fee</li>
                    <li>S3 One Zone IA - Similar to ^ S3 IA but data is stored in a <strong>single AZ only</strong> - Unlike ^ S3 IA, availability is 99.5%, but like ^ S3 IA durability is 99.99999999999% (11 9s) - 20% cheaper than S3 IA</li>
                    <li>Reduced Redundancy Storage - Designed to provide 99.99% durability and 99.99% availability of objects over a give year - Used for data that can be recreated if lost, e.g., thumbnails - (<i>Starting to disappear from AWS documentation but could be in the exam</i>)</li>
                    <li>Glacier - Very cheap - Used for archival only - Optimized for data that is infrequently accessed - Takes 3 to 5 hours to restore - Has same durability and availability (<strong>after objects are restored</strong>) %s as standard S3</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Charges</h2>
                <ul>
                    <li>Storage per Gb</li>
                    <li># of requests (GET, PUT, COPY, etc.)</li>
                    <li>Storage management pricing - E.g., inventory/analytics/object tags</li>
                    <li>Data management pricing - We have to pay for transferring data out of S3, e.g., if we download a file from S3</li>
                    <li>Transfer acceleration - Uses CloudFront to optimize transfers, makes <strong>uploads faster</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Security</h2>
                <ul>
                    <li>By default, all newly created buckets are <strong>private</strong></li>
                    <li>We can set up access control to buckets using bucket policies and access control lists</li>
                    <li>Bucket Policies - <strong>Applied at a bucket level</strong></li>
                    <li>Access Control Lists - <strong>Applied at an object level</strong> - Fine-grained access control</li>
                    <li>Buckets can be configured to create access logs, which log all requests made to the bucket - These logs can be written to another bucket</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Encryption</h2>
                <ul>
                    <li>In Transit - SSL/TLS (HTTPS), e.g., when uploading/downloading files</li>
                    <li>At Rest - Server Side Encryption (SSE): S3 Managed Keys (<strong>SSE-S3</strong>), AWS Key Management Service Managed Keys (<strong>SSE-KMS</strong>), Server Side Encryption with Customer Provided Keys (<strong>SSE-C</strong>)</li>
                    <li>Client Side Encryption</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Enforcing Encryption on Buckets</h2>
                <ul>
                    <li>Every time a file is uploaded to S3, a PUT request is initiated, and the request has a header with important information</li>
                    <li>If the file is to be encrypted at upload time, the <strong>x-amz-server-side-encryption</strong> parameter will be in the request header</li>
                    <li>Two options are available: <strong>x-amz-server-side-encryption: AES256</strong> (SSE-S3, S3 Managed Keys) and <strong>x-amz-server-side-encryption: ams:kms</strong> (SSE-KMS, KMS Managed Keys)</li>
                    <li>When this parameter is included in the header of the PUT request, it tells S3 to encrypt the object at the time of upload, using the specified encryption method</li>
                    <li>You can enforce the use of Server Side Encryption by using a bucket policy that denies any S3 PUT request which doesn't include the <strong>x-amz-server-side-encryption</strong> parameter in the request header</li>
                    <li>When doing ^ you may get an error - <i>Action does not apply to any resource(s) in statement</i> - To rectify, add a wild card (/*) to the end of your resource in the policy</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>CORS</h2>
                <ul>
                    <li><i>Cross Origin Resource Sharing></i></li>
                    <li>Allowing code that is in one S3 bucket to access/reference code in another S3 bucket</li>
                    <li>CORS must be enabled from the bucket that is <strong>being called</strong></li>
                    <li>Use website endpoint (properties -> static website hosting) URL when setting up CORS, <i>not the regular S3 URL used to access files</i></li>
                </ul>
            </div>
        </div>
    )

}

export default S3;

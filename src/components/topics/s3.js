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
                    <li><i>The largest object that can be uploaded in a single PUT is 5Gb</i></li>
                    <li>Files are stored in <strong>buckets</strong> (i.e., folders)</li>
                    <li>S3 is a universal namespace - Names must be unique globally - Similar to DNS</li>
                    <li>Upon a succesful file upload we will get a HTTP 200 status code</li>
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
                    <li>S3 - 99.99% availability, 99.99999999999% (11 9s) durability, stored redundantly across multiple facilities, and is designed to sustain the loss of 2 facilities concurrently - For frequently accessed objects</li>
                    <li>S3 IA - Infrequently Accessed - For data that is accessed less frequently, but requires rapid access when needed - Unlike ^ S3, availability is 99.9%, but like ^ S3 durability is 99.99999999999% (11 9s)  - Cheaper than ^ S3, but we get charged a retrieval fee</li>
                    <li>S3 One Zone IA - Similar to ^ S3 IA but data is stored in a <strong>single AZ only</strong> - Unlike ^ S3 IA, availability is 99.5%, but like ^ S3 IA durability is 99.99999999999% (11 9s) - 20% cheaper than S3 IA</li>
                    <li>Reduced Redundancy Storage - Designed to provide 99.99% durability and 99.99% availability of objects over a give year - Used for data that can be recreated if lost, e.g., thumbnails - (<i>Starting to disappear from AWS documentation but could be in the exam</i>, AWS discouraging us from using this by virtue of making it more expensive than regular S3)</li>
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
                    <li>Buckets can be configured to create access logs, which log all requests made to the bucket - These logs can be written to the bucket itself or to another bucket</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Encryption</h2>
                <ul>
                    <li>In Transit - SSL/TLS (HTTPS), e.g., when uploading/downloading files</li>
                    <li>At Rest - Server Side Encryption (SSE): S3 Managed Keys [AES256] (<strong>SSE-S3</strong>), AWS Key Management Service Managed Keys [Gives you audit trail of key use, has more features than SSE-S3 but also costs more] (<strong>SSE-KMS</strong>), Server Side Encryption with Customer Provided Keys (<strong>SSE-C</strong>)</li>
                    <li>Client Side Encryption - Encrypt files ourselves locally</li>
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
                    <li>CORS must be enabled on the <strong>bucket that needs to be accessed</strong> - CORS configuration must enable access for the origin (bucket) that is attempting to access</li>
                    <li>Use S3 website URL (properties -> static website hosting) URL when setting up CORS, <i>not the regular S3 bucket URL</i></li>
                    <li>S3 Website URL - <strong>acloudguru.s3-website.eu-west-1.amazonaws.com</strong></li>
                    <li>S3 Bucket URL - s3-eu-west-1.amazonaws.com/acloudguru</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Performance Optimization</h2>
                <ul>
                    <li>S3 is designed to support very high request rates. However, if your S3 buckets are routinely getting over 100 PUT/LIST/DELETE requests per second, or over 300 GET requests per second, then there are some best practice guidlines for performance optimization</li>
                    <li>GET-intensive workloads - CloudFront - As it will cache your most frequently access objects and will reduce latency</li>
                    <li>Mixed Request Type Workloads - Avoid sequential key names for your S3 objects - Instead, add a random prefix like a hex hash to the key name to prevent multiple objects from being stored on the same partition (storing on the same partition can lead to I/O contention)</li>
                </ul>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h3>If you encrypt a bucket on S3, what type of encryption does AWS use?</h3>
                <ul>
                    <li className="correct-answer">Advanced Encryption Standard (AES) 256</li>
                    <li>Data Encryption Standard (DES)</li>
                    <li><p>International Data Encryption Algorithm (IDEA).</p></li>
                    <li><p>Advanced Encryption Standard (AES) 128</p></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>If you want to enable a user to download your private data directly from S3, you can insert a pre-signed URL into a web page before giving it to your user</h3>
                <ul>
                    <li className="correct-answer">True</li>
                    <li>False</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the largest size file you can transfer to S3 using a PUT operation?</h3>
                <ul>
                    <li>100Mb</li>
                    <li>1Gb</li>
                    <li>5Tb</li>
                    <li className="correct-answer">5Gb</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You are hosting a static website in an S3 bucket that uses Java script to reference assets in another S3 bucket. For some reason, these assets are not displaying when users browse to the site. What could be the problem?</h3>
                <ul>
                    <li><p>Amazon S3 does not support Javascript</p></li>
                    <li><p>You cannot use one S3 bucket to reference another S3 bucket</p></li>
                    <li className="correct-answer">You haven't enabled Cross Origin Resource Sharing (CORS) on the bucket where the assets are stored</li>
                    <li>You need to open port 80 on the appropriate security group in which the S3 bucket is located</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You are using S3 in AP-Northeast to host a static website in a bucket called "acloudguru". What would the new URL endpoint be?</h3>
                <ul>
                    <li className="correct-answer"><p>http://acloudguru.s3-website-ap-northeast-1.amazonaws.com</p></li>
                    <li><p>http://acloudguru.s3-website-ap-southeast-1.amazonaws.com</p></li>
                    <li><p>https://s3-ap-northeast-1.amazonaws.com/acloudguru/</p></li>
                    <li><p>http://www.acloudguru.s3-website-ap-northeast-1.amazonaws.com</p></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>S3 provides unlimited storage</h3>
                <ul>
                    <li className="correct-answer">True</li>
                    <li>False</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Your application is consistently reading and writing 100s of objects per second to S3 and your workload is steadily rising. What can you do to to achieve the best performance from S3?</h3>
                <ul>
                    <li className="correct-answer"><p>Add  a hex hash prefix to the objects key name</p></li>
                    <li><p>Configure a CloudFront CDN and use the S3 bucket as the origin</p></li>
                    <li><p>Add a hex hash suffix to the objects key name</p></li>
                    <li><p>Configure an additional bucket and distribute the files evenly between the two buckets</p></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>How does S3 determine which partition to use to store files?</h3>
                <ul>
                    <li><p>S3 automatically stores your files on a random partition</p></li>
                    <li><p>The bucket name determines which partition the file is stored in</p></li>
                    <li><p>By default, all files in the same bucket are stored on the same partition</p></li>
                    <li className="correct-answer"><p>The key name determines which partition the file is stored in</p></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which of the following encryption methods are supported in S3?</h3>
                <ul>
                    <li className="correct-answer"><p>SSE-S3, SSE-KMS, SSE-C</p></li>
                    <li><p>SSE-S3, SSE-AES, SSE-KMS</p></li>
                    <li><p>SSE-C, SSE-AES, SSE-KMS</p></li>
                    <li><p>SSE-S3, SSE-AES, SSE-C</p></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which feature of AWS can you use to configure S3 to allow one S3 bucket to access files in another S3 bucket?</h3>
                <ul>
                    <li className="correct-answer">CORS</li>
                    <li>Bucket ACL</li>
                    <li>Bucket Policy</li>
                    <li>IAM Role</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the HTTP code you would see once you successfully place a file in an S3 bucket?</h3>
                <ul>
                    <li>404</li>
                    <li>300</li>
                    <li className="correct-answer">200</li>
                    <li>512</li>
                </ul>
            </div>
        </div>
    )

}

export default S3;

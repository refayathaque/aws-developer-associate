import React from 'react';
import '../../styles.css';
import logo from "../../images/SecurityIdentityCompliance_AWSIAM.jpg"
import logoA from "../../images/SecurityIdentityCompliance_IAM_role.jpg"

const IAM = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline">
                <h2>What does it provide?</h2>
                <ul>
                    <li>Centralized control</li>
                    <li>Shared access</li>
                    <li>Granular permissions</li>
                    <li>Identity federation (e.g., AD, LinkedIn, etc.)</li>
                    <li>Multifactor authentication</li>
                    <li>Temporary access for users/devices/services</li>
                    <li>Password rotation policy</li>
                    <li>Integrates with different AWS services</li>
                    <li>Supports PCI DSS compliance (for payments)</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Important Terms</h2>
                <ul>
                    <li>Users - End users (people)</li>
                    <li>Groups - Multiple users under one set of permissions</li>
                    <li>Roles - <strong>Assigned to AWS resources (not people)</strong></li>
                    <li>Policy documents - Defines permission(s) and assigned to users/groups/roles, can be shared amongst users/groups/roles</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoA} alt="IAM Role Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>The Basics</h2>
                <ul>
                    <li>Universal - Does not apply to regions</li>
                    <li>Root Account - Created when we first setup account, has <strong>complete</strong> Admin access</li>
                    <li><strong>Do not use the root account for day-to-day activites</strong>, create users under groups and/or with specific policies</li>
                    <li>New users have <strong>no permissions</strong> when first created, we have to explicitly assign them</li>
                    <li>New users provided <strong>access key id and secret access keys</strong> when first created - for access via CLI and APIs</li>
                    <li>We only see the access key id and secret access key once, to see again you must regenerate in IAM console</li>
                    <li><i>Always setup MFA on the root account</i></li>
                    <li>We should set up and customize password rotation policies for all users</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Web Identity Federation</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Cognito User Pools</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Inline vs. Managed vs. Custom Policies</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is NOT a feature of IAM?</h3>
                <ul>
                    <li>Centralized control of account</li>
                    <li>Integrates with AD, permitting single sign-on</li>
                    <li>Granular access control of resources</li>
                    <li className="correct-answer">Can establish biometric authentication, removing need for passwords</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>AWS recommends EC2 instances have credentials stored, in order to access other resources like S3</h3>
                <ul>
                    <li>True</li>
                    <li className="correct-answer">False</li>
                    <br></br>
                    <hr className="hr-style"></hr>
                    <br></br>
                    <li><i>Set role to EC2 with policy/policies for S3 access</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which IAM entity should be used to delegate access <i>to resources</i> for users/groups/services?</h3>
                <ul>
                    <li>User</li>
                    <li>Web Identity Federation</li>
                    <li className="correct-answer">Role</li>
                    <li>Group</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>IAM is used for what?</h3>
                <ul>
                    <li className="correct-answer">Creating and managing users/groups, managing access to services and assigning permissions to allow/deny access to resources</li>
                    <li>Secure VPN access to AWS</li>
                    <li>Move large swaths of data (TBs) into AWS</li>
                    <li>Serverless computing</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is a policy?</h3>
                <ul>
                    <li className="correct-answer">JSON document consisting of permission(s)</li>
                    <li>CSV file with a user's access and secret access keys</li>
                    <li>File with a user's private ssh key</li>
                    <li>A policy that determines what your AWS bill will be</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>What is the ideal way of enabling an EC2 instance to read from S3?</h3>
                <ul>
                    <li>Create a new user and grant read access to S3. Store the user's credentials locally on the EC2 instance and configure your app to provide the credentials with each API request</li>
                    <li>Set up an S3 policy granting read access to EC2 instance based on its ARN</li>
                    <li>Create a new role and grant read access to S3. Store the role's credentials locally on the EC2 instance and configure your app to provide the credentials with each API request</li>
                    <li className="correct-answer">Create an IAM role with read access to S3, then assign this role to the particular EC2 instance</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which of these statements best characterizes IAM?</h3>
                <ul>
                    <li>IAM is an abbreviation for 'Improvised Application Management', it allows one to deploy and manage apps in AWS</li>
                    <li className="correct-answer">Allows us to manage users/groups/roles and their corresponding level of access to all AWS resources/services</li>
                    <li>Allows us to manage permissions for <i>resources only</i></li>
                    <li>Allows us to manage <i>users' passwords only</i>, AWS personnel must create new users for your company through a ticketing system</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="IAM Logo"></img>
            </div>
        </div>
    )
}

export default IAM;

import React from 'react';
import '../../styles.css';

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
                    <li>Roles - Assigned to AWS resources (not people)</li>
                    <li>Identity federation (e.g., AD, LinkedIn, etc.)</li>
                    <li>Multifactor authentication</li>
                    <li>Temporary access for users/devices/services</li>
                    <li>Password rotation policy</li>
                    <li>Integrates with different AWS services</li>
                    <li>Supports PCI DSS compliance (for payments)</li>
                </ul>
            </div>
        </div>
    )
}

export default IAM;

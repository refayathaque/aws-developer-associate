import React from 'react';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles.css';

const Navigation = () => {

    return (
        <div className='navigation-container'>
            <div className="navigation-items">
                <Link className="navigation-items-padding" to='/'><strong>
                    <FontAwesomeIcon icon={["fas", "bars"]} size="lg" color="#524439"/>
                </strong></Link>
                <Link className="navigation-items-padding" to='/iam'>IAM</Link>
                <Link className="navigation-items-padding" to='/ec2'>EC2</Link>
                <Link className="navigation-items-padding" to='/ec2'>SNS</Link>
                <Link className="navigation-items-padding" to='/ec2'>DynamoDB</Link>
            </div>

        </div>
    )
}

export default Navigation;

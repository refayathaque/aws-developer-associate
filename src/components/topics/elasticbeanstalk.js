import React from 'react';
import '../../styles.css';

import logo from "../../images/Compute_AWSElasticBeanstalk.jpg"

const ElasticBeanstalk = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="ElasticBeanstalk Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>ElasticBeanstalk</h2>
            </div>
        </div>
    )

}

export default ElasticBeanstalk

import React from 'react';
import { Switch, Route } from 'react-router-dom'
import IAM from './topics/iam.js'
import EC2 from './topics/ec2.js'
import ACLOUDGURU from './topics/aCloudGuru.js'
import TopicsHome from './topics/topicsHome.js'

import '../styles.css';

const TopicsDisplay = () => {

    return (
        <Switch>
            <Route exact path='/' component={TopicsHome}/>
            <Route path='/iam' component={IAM}/>
            <Route path='/ec2' component={EC2}/>
            <Route path='/acloudguru' component={ACLOUDGURU}/>
        </Switch>
    )
}

export default TopicsDisplay;

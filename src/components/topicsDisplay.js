import React from 'react';
import { Switch, Route } from 'react-router-dom'
import IAM from './topics/iam.js'
import EC2 from './topics/ec2.js'
import ACLOUDGURU from './topics/aCloudGuru.js'
import ELB from './topics/elb.js'
import RDS from './topics/rds.js'
import S3 from './topics/s3.js';
import Elasticache from './topics/elasticache.js'
import TopicsHome from './topics/topicsHome.js'

import '../styles.css';

const TopicsDisplay = () => {

    return (
        <Switch>
            <Route exact path='/' component={TopicsHome}/>
            <Route path='/iam' component={IAM}/>
            <Route path='/ec2' component={EC2}/>
            <Route path='/acloudguru' component={ACLOUDGURU}/>
            <Route path='/elb' component={ELB}/>
            <Route path='/rds' component={RDS}/>
            <Route path='/elasticache' component={Elasticache}/>
            <Route path='/s3' component={S3}/>
        </Switch>
    )
}

export default TopicsDisplay;

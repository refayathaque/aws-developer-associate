import React from 'react';
import { Switch, Route } from 'react-router-dom';
import IAM from './topics/iam.js';
import EC2 from './topics/ec2.js';
import ACloudGuru from './topics/aCloudGuru.js';
import ELB from './topics/elb.js';
import RDS from './topics/rds.js';
import S3 from './topics/s3.js';
import CloudFront from './topics/cloudFront.js';
import Elasticache from './topics/elasticache.js';
import Lambda from './topics/lambda.js';
import APIGateway from './topics/apiGateway.js';
import TopicsHome from './topics/topicsHome.js';

import '../styles.css';

const TopicsDisplay = () => {

    return (
        <Switch>
            <Route exact path='/' component={TopicsHome}/>
            <Route path='/iam' component={IAM}/>
            <Route path='/ec2' component={EC2}/>
            <Route path='/acloudguru' component={ACloudGuru}/>
            <Route path='/elb' component={ELB}/>
            <Route path='/rds' component={RDS}/>
            <Route path='/elasticache' component={Elasticache}/>
            <Route path='/s3' component={S3}/>
            <Route path='/cloudfront' component={CloudFront}/>
            <Route path='/lambda' component={Lambda}/>
            <Route path='/apigateway' component={APIGateway}/>
        </Switch>
    )
}

export default TopicsDisplay;

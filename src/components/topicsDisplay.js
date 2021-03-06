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
import StepFunctions from './topics/stepFunctions.js';
import XRay from './topics/xRay.js';
import Serverless from './topics/serverless.js'
import DynamoDB from './topics/dynamoDB.js'
import KMS from './topics/kms.js'
import SNS from './topics/sns.js'
import SQS from './topics/sqs.js'
import Kinesis from './topics/kinesis.js'
import ElasticBeanstalk from './topics/elasticbeanstalk.js'
import CodeCommit from './topics/codeCommit.js'
import CodeDeploy from './topics/codeDeploy.js'
import CodePipeline from './topics/codePipeline.js'
import DeveloperTheory from './topics/developerTheory.js'
import TopicsHome from './topics/topicsHome.js';

import '../styles.css';

const TopicsDisplay = () => {

    return (
        <Switch>
            <Route exact path='/' component={TopicsHome}/>
            <Route exact path='/codecommit' component={CodeCommit}/>
            <Route exact path='/codedeploy' component={CodeDeploy}/>
            <Route exact path='/codepipeline' component={CodePipeline}/>
            <Route exact path='/developertheory' component={DeveloperTheory}/>
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
            <Route path='/stepfunctions' component={StepFunctions}/>
            <Route path='/xray' component={XRay}/>
            <Route path='/serverless' component={Serverless}/>
            <Route path='/dynamodb' component={DynamoDB}/>
            <Route path='/kms' component={KMS}/>
            <Route path='/sns' component={SNS}/>
            <Route path='/sqs' component={SQS}/>
            <Route path='/kinesis' component={Kinesis}/>
            <Route path='/elasticbeanstalk' component={ElasticBeanstalk}/>
        </Switch>
    )
}

export default TopicsDisplay;

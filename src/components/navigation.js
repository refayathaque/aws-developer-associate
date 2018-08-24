import React from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
// https://stackoverflow.com/questions/41131450/active-link-with-react-router

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles.css';

const Navigation = () => {

    return (
        <div className='navigation-container'>
            <div className="navigation-items-container">
                <Link className="navigation-items" to='/'><strong>
                    <FontAwesomeIcon icon={["fas", "bars"]} size="lg" color="#524439"/>
                </strong></Link>
                <NavLink className="navigation-items" to='/acloudguru' activeStyle={{color:'#ff9671'}}>A Cloud Guru</NavLink>
                <NavLink className="navigation-items" to='/iam' activeStyle={{color:'#ff9671'}}>IAM</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>EC2</NavLink>
                <NavLink className="navigation-items" to='/elb' activeStyle={{color:'#ff9671'}}>ELB</NavLink>
                <NavLink className="navigation-items" to='/rds' activeStyle={{color:'#ff9671'}}>RDS</NavLink>
                <NavLink className="navigation-items" to='/elasticache' activeStyle={{color:'#ff9671'}}>Elasticache</NavLink>
                <NavLink className="navigation-items" to='/s3' activeStyle={{color:'#ff9671'}}>S3</NavLink>
                <NavLink className="navigation-items" to='/cloudfront' activeStyle={{color:'#ff9671'}}>CloudFront</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>Lambda</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>APIGateway</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>Step Functions</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>X-Ray</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>DynamoDB</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>KMS</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>SQS</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>SNS</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>ElasticBeanstalk</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>Kinesis</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>CodeCommit</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>CodeDeploy</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>CodePipeline</NavLink>
                <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>Developer Theory</NavLink>
                <NavLink className="navigation-items" to='/serverless' activeStyle={{color:'#ff9671'}}>Serverless</NavLink>

                {/* https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links */}
            </div>
        </div>
    )
}

export default Navigation;

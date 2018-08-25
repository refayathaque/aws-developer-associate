import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from "react-router-dom";
// https://stackoverflow.com/questions/41131450/active-link-with-react-router
import { connect } from 'react-redux';
import { shortTopicSelected } from '../actions/action_short_topic_selected';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles.css';

class Navigation extends Component {

    constructor(props) {
        super(props);
        // this.onClick = this.onClick.bind(this);
    }

    onClick = () => {
        console.log('hello world')
    }

    render() {

        console.log(this.props.shortTopicSelected_reducer)

        return (
            <div className='navigation-container'>
                <div className="navigation-items-container">
                    <NavLink className="navigation-items" to='/'><strong>
                        <FontAwesomeIcon icon={["fas", "bars"]} size="lg" color="#524439"/>
                    </strong></NavLink>
                    <NavLink className="navigation-items" to='/acloudguru' onClick={this.onClick()} activeStyle={{color:'#ff9671'}}>A Cloud Guru</NavLink>
                    <NavLink className="navigation-items" to='/iam' activeStyle={{color:'#ff9671'}}>IAM</NavLink>
                    <NavLink className="navigation-items" to='/ec2' activeStyle={{color:'#ff9671'}}>EC2</NavLink>
                    <NavLink className="navigation-items" to='/elb' activeStyle={{color:'#ff9671'}}>ELB</NavLink>
                    <NavLink className="navigation-items" to='/rds' activeStyle={{color:'#ff9671'}}>RDS</NavLink>
                    <NavLink className="navigation-items" to='/elasticache' activeStyle={{color:'#ff9671'}}>Elasticache</NavLink>
                    <NavLink className="navigation-items" to='/s3' activeStyle={{color:'#ff9671'}}>S3</NavLink>
                    <NavLink className="navigation-items" to='/cloudfront' activeStyle={{color:'#ff9671'}}>CloudFront</NavLink>
                    <NavLink className="navigation-items" to='/lambda' activeStyle={{color:'#ff9671'}}>Lambda</NavLink>
                    <NavLink className="navigation-items" to='/apigateway' activeStyle={{color:'#ff9671'}}>APIGateway</NavLink>
                    <NavLink className="navigation-items" to='/stepfunctions' activeStyle={{color:'#ff9671'}}>Step Functions</NavLink>
                    <NavLink className="navigation-items" to='/xray' activeStyle={{color:'#ff9671'}}>X-Ray</NavLink>
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

}

const mapStateToProps = state => {
    console.log(state)
    return {
        shortTopicSelected_reducer: state.shortTopicSelected
    }
}


export default withRouter(connect(mapStateToProps, { shortTopicSelected })(Navigation));

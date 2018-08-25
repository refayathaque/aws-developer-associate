import React from 'react';
import '../../styles.css';

import logoAPIG from "../../images/ApplicationServices_AmazonAPIGateway.jpg"
import logoLambda from "../../images/Compute_AWSLambda.jpg"
import logoS3 from "../../images/Storage_AmazonS3.jpg"
import logoDynamoDB from "../../images/Database_AmazonDynamoDB.jpg"


const Serverless = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-block">
                <h2>Serverless Realm: Lambda, API Gateway, DynamoDB, S3 (LADS)</h2>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoLambda} alt="Lambda Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Lambda</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h2>API Gateway</h2>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoAPIG} alt="APIGateway Logo"></img>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoDynamoDB} alt="DynamoDB Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>DynamoDB</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h2>S3</h2>
            </div>
            <div className="topics-flex-item-inline-logo">
                <img src={logoS3} alt="S3 Logo"></img>
            </div>
        </div>
    )

}

export default Serverless;

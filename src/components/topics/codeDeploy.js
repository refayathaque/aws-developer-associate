import React from 'react';
import '../../styles.css';

// import logo from "../../images/.jpg"

const CodeDeploy = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline">
                <h2>Code Deploy</h2>
                <ul>
                    <li>Fully managed automated deployment service and can be used as part of Continuous Delivery or Continuous Deployment process</li>
                    <li><strong>In-Place/Rolling Update</strong></li>
                    <li><strong>Blue/Green</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>In-Place/Rolling Update</h2>
                <ul>
                    <li>You stop the app on each host and deploy the latest code</li>
                    <li>EC2 and on-premise systems only, <strong>no support for Lambda</strong></li>
                    <li>Ideal for apps where you do not mind taking it offline for the duration of the deployment</li>
                    <li>To roll back you must re-deploy the previous version of the app</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Blue/Green</h2>
                <ul>
                    <li>New instances are provisioned and the new app is deployed to these new instances</li>
                    <li>Traffic is routed to the new instances according to your own schedule</li>
                    <li>Supported for EC2, on-premise systems and Lambda functions</li>
                    <li>Roll back is easy, just route the traffic back to the original instances</li>
                    <li><strong>Blue - Active Deployment</strong></li>
                    <li><strong>Green - New Release</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Advanced Settings</h2>
                <ul>
                    <li><strong>AppSpec file defines all parameters needed for the deployment (e.g., location of app files and pre/post deployment validation tests)</strong></li>
                    <li>For EC2/on-premise systems, the appspec.yml file must be placed in the root directory of your revision (same folder that contains your app code) - <strong>The appspec.yml file must be in YAML</strong></li>
                    <li>Lambda supports YAML or JSON</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Run Order of Hooks</h2>
                <ul>
                    <li><strong>BeforeBlockTraffic -> BlockTraffic -> AfterBlockTraffic</strong></li>
                    <li><strong>ApplicationStop</strong></li>
                    <li><strong>BeforeInstall</strong></li>
                    <li><strong>Install</strong></li>
                    <li><strong>AfterInstall</strong></li>
                    <li><strong>ApplicationStart</strong></li>
                    <li><strong>ValidateService</strong></li>
                    <li><strong>BeforeAllowTraffic -> AllowTraffic -> AfterAllowTraffic</strong></li>
                </ul>
            </div>
        </div>
    )

}

export default CodeDeploy

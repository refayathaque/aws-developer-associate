import React from 'react';
import '../../styles.css';

// import logo from "../../images/.jpg"

const CodePipeline = () => {

    return (
        <div className="topics-flex-item-inline">
            <h2>Code Pipeline</h2>
            <ul>
                <li><i>Continuous Integration / Continuous Delivery</i> (CI/CD) service</li>
                <li>Automates your end-to-end software release process based on a user defined workflow</li>
                <li>Can be configured to automatically trigger your pipeline as soon as a change is detected in your source code repository</li>
                <li>Integrates with other services like CodeBuild and CodeDeploy, as well as third party and custom plug-ins</li>
            </ul>
        </div>
    )

}

export default CodePipeline

import React from 'react';
import '../../styles.css';

// import logo from "../../images/.jpg"

const DeveloperTheory = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline">
                <h2>CI/CD</h2>
                <ul>
                    <li>Continuous Integration and Continuous Delivery/Deployment - Best practices for software development and deployment</li>
                    <li>Enable frequent software changes to be applied whilst maintaining system and service stability</li>
                    <li>Companies like AWS, Netflix, Google, and Facebook have pioneered this approach to releasing code, successfully applying thousands of changes per day</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Continuous Integration Workflow</h2>
                <ul>
                    <li><i>Code Repository</i></li>
                    <li>Multiple developers working on different features or bug fixes</li>
                    <li>All contrbuting to the same app</li>
                    <li>Sharing the same code repository (e.g., in GitHub or GitLab)</li>
                    <li>Frequently pushing their updates into the shared repo - at least daily</li>
                    <li><i>Build Management System</i></li>
                    <li>Code repository integrated with a build management system</li>
                    <li>Code changes trigger an automated build</li>
                    <li>We need a way to ensure that any code change does not break the build or introduce new bugs in the app</li>
                    <li><i>Test Framework</i></li>
                    <li>The test system runs automated tests on the newly built app</li>
                    <li>Identifies any bugs, preventing issues from being introduced in the master code</li>
                    <li>CI focuses on small code changes which frequently commited into the main repository once they have been successfully tested</li>
                </ul>
            </div>
        </div>
    )

}

export default DeveloperTheory

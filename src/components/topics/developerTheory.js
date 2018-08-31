import React from 'react';
import '../../styles.css';

// import logo from "../../images/.jpg"

const DeveloperTheory = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline">
                <h2>CI/CD</h2>
                <ul>
                    <li><i>Continuous Integration and Continuous Delivery/Deployment</i> - Best practices for software development and deployment</li>
                    <li>Enables frequent software changes to be applied whilst maintaining system and service stability</li>
                    <li>Companies like AWS, Netflix, Google, and Facebook have pioneered this approach to releasing code successfully as they apply thousands of changes per day</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Continuous Integration Workflow</h2>
                <ul>
                    <li><strong>Continuous Integration is about integrating or merging the code changes frequently - At least once per day - Enabling multiple devs to work on the same app</strong></li>
                    <li><i>-- Code Repository --</i></li>
                    <li>Multiple developers working on different features or bug fixes</li>
                    <li>All contrbuting to the same app</li>
                    <li>Sharing the same code repository (e.g., using Git in GitHub/GitLab/etc.)</li>
                    <li>Frequently pushing their updates into the shared repo - At least daily</li>
                    <li><i>-- Build Management System --</i></li>
                    <li>Code repository integrated with a build management system</li>
                    <li>Code changes trigger an automated build</li>
                    <li><i>We need a way to ensure that any code change does not break the build or introduce new bugs in the app</i></li>
                    <li><i>-- Test Framework --</i></li>
                    <li>The test system runs automated tests on the newly built app</li>
                    <li>Identifies any bugs, preventing issues from being introduced in the master code</li>
                    <li><strong>CI focuses on small code changes which are frequently commited into the main repository once they have been successfully tested</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Continuous Delivery/Deployment</h2>
                <ul>
                    <li>CD can mean <i>either Continous Delivery or Continious Deployment</i> - <strong>They are not the same things however</strong></li>
                    <li>Continuous Delivery - Development practice where <strong>merged changes are automatically built, tested, and prepared for release into staging and production environments</strong></li>
                    <li>There is <i>usually a manual decision process to initiate deployment of the new code</i></li>
                    <li>Continuous Deployment - <strong>Takes the idea of automation one step further and automatically deploys the new code following successful testing, eliminating any manual steps</strong></li>
                    <li>With continuous deployment the <i>new code is automatically released as soon as it passes through the stages of your release process (build, test, package)</i></li>
                    <li>Continuous deployment ensure that small changes are released early and frequently</li>
                    <li>Both CDs require the build, test, and deployment staging processes to be fully automated - <strong>But continuous deployment automates the release process as well</strong></li>
                    <li>Continuous Deployment - Fully automates the entire release process, code is deployed into production as soon as it has successfully passed through the release pipeline</li>
                    <li><i>CodeCommit (Code Repository) -> CodeBuild (Build Management System) -> Test Framework -> CodeDeploy (Deploy Packaged Application) -> Environments</i> - All of this falls under <strong>CodePipeline</strong></li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>AWS CI/CD Tools</h2>
                <ul>
                    <li>CodeCommit - Source control service (Git)</li>
                    <li>CodeBuild - Compile source code, run tests, and package code</li>
                    <li>CodeDeploy - Automated deployment to EC2, on-premise systems and Lambda</li>
                    <li>CodePipeline - CI/CD workflow tool, fully automates the entire release process (build, test, deployment)</li>
                </ul>
            </div>
        </div>
    )

}

export default DeveloperTheory

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
            <div className="topics-flex-item-inline">
                <h2>CodeBuild</h2>
                <ul>
                    <li>CodeBuild is a fully managed build service - Can build source code, run tests and product software packages based on commands that we define ourselves</li>
                    <li>By default, the <strong>buildspec.yml</strong> defines the build commands and settings used by CodeBuild to run our build</li>
                    <li>We can completely override the settings in the buildspec.yml by adding our own commands in the console when launching the build</li>
                    <li>If our build fails, we should check the build logs in the CodeBuild console and we can also view the full CodeBuild log in CloudWatch</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Docker and CodeBuild</h2>
                <ul>
                    <li>Docker allows us to package up our software into <strong>containers</strong> which we can run in ECS (Elastic Container Service)</li>
                    <li>A Docker container includes everything the software needs to run including code, libraries, runtime and environment variables, etc.</li>
                    <li>We use a special file called a <strong>Dockerfile</strong> to specify the instructions needed to assemble our Docker image</li>
                    <li>Once built, Docker images can be store in <strong>ECR (Elastic Container Registry)</strong> and ECS can then use the image to launch Docker containers</li>
                    <li>There are specific Docker commands to build, tag (apply an alias), and push our Docker image to the ECR repository</li>
                    <li><i>docker build -r myimagerepo .</i></li>
                    <li><i>docker tag myimagerepo:latest 532537857293.dkr.ecr.eu-central-1.amazonaws.com/myimagerepo:latest</i></li>
                    <li><i>docker push 534095243095.dkr.ecr.eu-central-1.amazonaws.com/myimagerepo:latest</i></li>
                </ul>
            </div>
            <div className="topics-flex-item-block">
                <h2>Quiz Questions</h2>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which of the following practices allows multiple developers working on the same application to merge code changes frequently, without impacting each other and enables the identification of bugs early on in the release process?</h3>
                <ul>
                    <li>Continuous Deployment</li>
                    <li className="correct-answer">Continuous Integration</li>
                    <li>Continuous Delivery</li>
                    <li>Continous Development</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which AWS service can be used to compile source code, run tests and package code?</h3>
                <ul>
                    <li>CodeDeploy</li>
                    <li>CodeCommit</li>
                    <li>CodePipeline</li>
                    <li className="correct-answer">CodeBuild</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>When deploying application code to EC2, the AppSpec file can be written in which language?</h3>
                <ul>
                    <li className="correct-answer">YAML</li>
                    <li>JSON or YAML</li>
                    <li>XML</li>
                    <li>JSON</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which AWS service can be used automatically install your application code onto EC2, on premises systems and Lambda?</h3>
                <ul>
                    <li className="correct-answer">CodeDeploy</li>
                    <li>CodeCommit</li>
                    <li>CodeBuild</li>
                    <li>X-Ray</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You are deploying an application to to a number of EC2 instances using CodeDeploy. What is the name of the used to specify source files and lifecycle hooks?</h3>
                <ul>
                    <li className="correct-answer">appspec.yml</li>
                    <li>buildspec.json</li>
                    <li>appspec.json</li>
                    <li>buildspec.yml</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which AWS service can be used to centrally store and version control your application source code, binaries and libraries?</h3>
                <ul>
                    <li>ElasticFileSystem</li>
                    <li className="correct-answer">CodeCommit</li>
                    <li>CodeBuild</li>
                    <li>CodePipeline</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>You want to recieve an email whenever a user pushes code to your CodeCommit repository, how can you configure this?</h3>
                <ul>
                    <li>Configure a CloudWatch Events rule to send a message to SQS which will trigger an email to be sent whenever a user pushes code to the repository</li>
                    <li>Configure a CloudWatch Events rule to send a message to SES which will trigger an email to be sent whenever a user pushes code to the repository</li>
                    <li>Create a new SNS topic and configure it to poll for CodeCommit events. Ask all your users subscribe to the topic to recieve notifications</li>
                    <li className="correct-answer">Configure Notifications in the console, this will create a CloudWatch Events rule to send a notification to an SNS topic which will trigger an email to be sent to the user</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>When deploying application code to Lambda, the AppSpec file can be written in YAML and what other format?</h3>
                <ul>
                    <li className="correct-answer">JSON</li>
                    <li>Python</li>
                    <li>YAML</li>
                    <li>XML</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>In the CodeDeploy AppSpec file, what are hooks used for?</h3>
                <ul>
                    <li>Hooks are reserved for future use</li>
                    <li>To specify files that you want to copy during the deployment</li>
                    <li className="correct-answer">To specify code, scripts or functions that you want to run at set points in the deployment lifecycle</li>
                    <li>To reference AWS resources that will be used during the deployment</li>
                </ul>
            </div>
            <div className="topics-flex-item-inline">
                <h3>Which AWS service can be used to fully automate your entire release process?</h3>
                <ul>
                    <li>CodeDeploy</li>
                    <li>CodeCommit</li>
                    <li className="correct-answer">CodePipeline</li>
                    <li>CodeBuild</li>
                </ul>
            </div>
        </div>
    )

}

export default DeveloperTheory

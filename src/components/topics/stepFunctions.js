import React from 'react';
import '../../styles.css';

import logo from "../../images/ApplicationServices_AWSStepFunctions.jpg"

const StepFunctions = () => {

    return (
        <div className="topics-container">
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="Step Functions Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h2>Step Functions</h2>
                <ul>
                    <li>Allows us to <strong>visualize and test serverless apps</strong></li>
                    <li>Provides a graphical console to arrange and visualize components of our app as a <strong>series of steps</strong></li>
                    <li>Simplifying builds and running of <i>multi-step</i> apps</li>
                    <li>Automatically triggers and tracks each step - <strong>Retrying when there are errors</strong> - This way our app executes in order and as expected</li>
                    <li><strong>Logs state of each step</strong> - So when things do go wrong, we can diagnose and debug quickly</li>
                    <li>Sequential Steps - E.g., Start -> Upload RAW File -> Delete RAW File -> End</li>
                    <li>Branching Steps - <strong>Choice of Path</strong></li>
                    <li>Parallel Steps - Similar to sequential but at one stage can branch off into more than one step, <i>only returning back to linear path like sequential</i></li>
                </ul>
            </div>
        </div>
    )

}

export default StepFunctions;

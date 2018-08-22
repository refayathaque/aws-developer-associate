import React from 'react';
import '../../styles.css';

import logo from "../../images/acloudguru.jpg"

const ACLOUDGURU = () => {

    return (
        <div className='topics-container'>
            <div className="topics-flex-item-inline-logo">
                <img src={logo} alt="A Cloud Guru Logo"></img>
            </div>
            <div className="topics-flex-item-inline">
                <h1>AWS Certified</h1>
                <h1>Developer - Associate 2018</h1>
                <ul>
                    <h2><li>All material comes from the course</li></h2>
                    <h2><li>A big shout out to...</li></h2>
                    <h2><li><i><a href="https://twitter.com/kroonenburgryan?lang=en" target="_blank" rel="noopener noreferrer">Ryan Kroonenburg</a> (Solutions Architect)</i></li></h2>
                    <h2><li><i><a href="https://twitter.com/fayecloudguru" target="_blank" rel="noopener noreferrer">Faye Ellis</a> (A Cloud Guru Instructor)</i></li></h2>
                    <br></br>
                    <hr className="hr-style"></hr>
                    <br></br>
                    <h3><li>...It's really hard to believe that a USD 10 course from Udemy has allowed me to, most importanly, study for the exam and enhance my marketability as a cloud engineer, and put together this comprehensive study guide for you!</li></h3>
                    <h3><li>I hope this is helpful in preparing for your certification...</li></h3>
                </ul>
            </div>
        </div>
    )

}

export default ACLOUDGURU

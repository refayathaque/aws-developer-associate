import React from 'react';
import '../styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    return (
        <div className='footer-container'>
            <h4>Made with &nbsp;
                <FontAwesomeIcon icon={["far", "heart"]} />
                &nbsp; using &nbsp;
                <FontAwesomeIcon icon={["fab", "js"]} size="lg" />
                &nbsp; and &nbsp;
                <FontAwesomeIcon icon={["fab", "react"]} size="lg" />
                &nbsp; Hosted in the &nbsp;
                <FontAwesomeIcon icon={["fas", "cloud"]} />
                &nbsp; with &nbsp;
                <FontAwesomeIcon icon={["fab", "aws"]} size="lg" />
                &nbsp; | &nbsp;
                <a href="https://github.com/refayathaque/aws-developer-associate" target="_blank">
                    <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </a>

            </h4>
        </div>
    )
}

export default Footer;

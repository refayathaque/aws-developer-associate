import React from 'react';
import '../styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    return (
        <div className='footer-container'>
            <h4>Made w/ &nbsp;
                <FontAwesomeIcon icon={["far", "heart"]} />
                &nbsp; using &nbsp;
                <FontAwesomeIcon icon={["fab", "js"]} size="lg" />
                &nbsp; and &nbsp;
                <FontAwesomeIcon icon={["fab", "react"]} size="lg" />
                &nbsp; -&nbsp; Hosted in the &nbsp;
                <FontAwesomeIcon icon={["fas", "cloud"]} />
                &nbsp; with &nbsp;
                <FontAwesomeIcon icon={["fab", "aws"]} size="lg" />
                &nbsp; - &nbsp;Codebase w/ &nbsp;
                <a href="https://github.com/refayathaque/aws-developer-associate" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </a>
                {/* For rel="noopener noreferrer" above - https://github.com/asciidoctor/asciidoctor/issues/2071 */}
            </h4>
        </div>
    )
}

export default Footer;

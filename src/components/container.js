import React, { Component } from 'react';
import '../styles.css';

import Header from './header.js';
import Footer from './footer.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(fab, fas, far)

class Container extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Header />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Container;

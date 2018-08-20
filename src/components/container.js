import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import '../styles.css';

import Header from './header.js';
import Footer from './footer.js';
import Body from './body.js';

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
                    <BrowserRouter>
                        <Body />
                    </BrowserRouter>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Container;

import React, { Component } from 'react';
import '../styles.css';

import Header from './header.js';
import Footer from './footer.js';

class Container extends Component {
    render() {
        return (
            <div className="container">
                <div>
                    <Header />
                    {/* <Footer /> */}
                </div>
            </div>
        );
    }
}

export default Container;

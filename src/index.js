import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Container />, document.getElementById('root'));
registerServiceWorker();

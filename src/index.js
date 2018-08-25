import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Container />
    </Provider>, document.getElementById('root')
);

registerServiceWorker();

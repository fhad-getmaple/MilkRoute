import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App';

import './index.css';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    document.getElementById('root'), //eslint-disable-line
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default; //eslint-disable-line
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('root'), //eslint-disable-line
        );
    });
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Base } from './app/css';
import { Provider } from 'react-redux';
import store from './app/config/store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
        <Base />
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('root')
);

serviceWorker.unregister();

import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import todoApp from './reducers/index';

let store = createStore(todoApp);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

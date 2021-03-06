import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import App from './router/index';
import "./index.scss"
import configureStore from './redux/stores/index'
import registerServiceWorker from './registerServiceWorker';
const store = configureStore();
render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();

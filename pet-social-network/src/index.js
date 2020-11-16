import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import store from "./redux/redux-store";
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Provider } from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


serviceWorker.unregister();

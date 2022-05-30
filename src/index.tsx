import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

export function renderApp(element: HTMLElement) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        element
    );
}

renderApp(MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

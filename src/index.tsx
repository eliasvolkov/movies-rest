import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import moviesStore from 'stores/moviesStore';
import App from './App';
import * as serviceWorker from './serviceWorker';

configure({ enforceActions: 'observed' });

ReactDOM.render(
    <Provider moviesStore={moviesStore}>
        <App />
    </Provider>,

    document.getElementById('root'),
);
serviceWorker.unregister();

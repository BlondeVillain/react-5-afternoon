import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {hashrouter} from 'react-router-dom';
import router from './router';
import {Provider} from 'react-redux';
import store from 'src/store.js'
ReactDOM.render(

<Provider store={store}>
<HashRouter>
<App />
</HashRouter>
</Provider>,

document.getElementById('root'));
registerServiceWorker();


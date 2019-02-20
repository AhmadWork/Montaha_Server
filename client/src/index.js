import  'materialize-css/dist/css/materialize.min.css';
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history'

import reducers from './reducers';
const store = createStore(reducers,applyMiddleware(reduxThunk));
ReactDOM.render(
<Provider store={store}>
<Router history={history}>
<App />
</Router>

</Provider>,
    document.querySelector('#root'));


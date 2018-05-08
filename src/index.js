import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import employerReducer from './store/reducers/employee';
import categoriesReducer from './store/reducers/categories';
import inventoryReducer from './store/reducers/inventory';
import loadingReducer from './store/reducers/loading';
import orderReducer from  './store/reducers/order';

const rootReducer = combineReducers({
  emp: employerReducer,
  categories: categoriesReducer,
  inventory: inventoryReducer,
  loading: loadingReducer,
  order: orderReducer

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware( thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

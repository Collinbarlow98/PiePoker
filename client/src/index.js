import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout'
import App from './App';
import Account from './components/Account'
import Game from './components/Game'
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers, applyMiddleware, compose } from 'redux'
import counterReducer from './store/reducers/counterReducer'
import userReducer from './store/reducers/userReducer'
import shopReducer from './store/reducers/shopReducer'
import upgradeReducer from './store/reducers/upgradeReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  counterR: counterReducer,
  userR: userReducer,
  upgradeR: upgradeReducer,
  shopR: shopReducer
})

const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

const store = createStore(rootReducer, composedEnhancers( applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <BaseLayout >
        <Switch>
          <Route exact path = '/' component = {App} ></Route>
          <Route path = '/account/:id' component = {Account}></Route>
          <Route path = '/game' component = {Game}></Route>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();

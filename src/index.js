import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DogFetcher from './DogFetcher';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './redux/reducer'

// Шаг 4
import { watchFetchDog } from './redux/actions'


// До шага 3
// const store = createStore(reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// Шаг 3

// import { applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

// Шаг 4
import { applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchFetchDog);


ReactDOM.render(<div>
  <Provider store={store}>
    <h1>The Dog App</h1>
    <DogFetcher/>
  </Provider>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

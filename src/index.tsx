import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import './css/index.css';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Router, BrowserRouter } from 'react-router-dom';
import createRoutes from './routes';
import rootReducer from './module/store';
import rootSaga from './module/rootSaga';

// const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    // history: customHistory
  }
}); // Create Sage middleware

const store = createStore(
  rootReducer,
  // logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
  applyMiddleware(
    // ReduxThunk.withExtraArgument({ history: customHistory }),
    sagaMiddleware // 사가 미들웨어를 적용하고
    // logger
  )
); // 여러개의 미들웨어를 적용 할 수 있습니다.

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App router={<BrowserRouter>{createRoutes()}</BrowserRouter>} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

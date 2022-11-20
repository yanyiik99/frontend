import React from "react";
import * as Page from './pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from './bootstraps/rootReducer';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './bootstraps/sagas';


function App() {
  const sagaMiddleWare = createSagaMiddleWare();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
  sagaMiddleWare.run(rootSaga);


  const pages = [
    {
      path: '/',
      elm: <Page.Home />
    },
    {
      path: '/testing',
      elm: <Page.Testing />
    },
    {
      path: '/testing/:id',
      elm: <Page.Testing />
    }
  ]


  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {
            pages?.map((el, i)=>{
              return(
                <Route key={i} exact path={el.path} element={el.elm} />
              )
            })
          }
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

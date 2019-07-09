import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers';
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux';

const NodeBird = ({ Component, store }) => {
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store : PropTypes.object,
};

export default withRedux((initialState, options)=>{
  //const store = createStore(reducer, initialState);
  //여기에 store 커스터 마이징 해야 함.
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares), 
    //typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  );
  // const enhancer = compose(
  //   applyMiddleware(...middlewares),
    
  // );
  
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(NodeBird);
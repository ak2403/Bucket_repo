import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Reducers from './src/reducers';
import MainContainer from './src/main';

const middleware = applyMiddleware(thunk);
const store = createStore(Reducers, middleware);

export default () => {

  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
 );
}
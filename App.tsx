import React from 'react';
import RootScreen from "./src/Containers/RootScreen";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from './src/Stores';

const { store, persistor } = createStore()

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  );
};


export default App;

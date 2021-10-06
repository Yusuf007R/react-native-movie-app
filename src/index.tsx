import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import store from './redux/store';
import HomeScreen from './screens/home-screen';
import ThemeModeProvider from './theme/theme-provider';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeModeProvider>
          <HomeScreen />
        </ThemeModeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

import React from 'react';
import { Text, View } from 'react-native';
import Login from './components/core/Auth/Login';
import { Provider } from 'react-redux';
import rootReducer from './reducer/index';
import { configureStore } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  const store = configureStore({
    reducer: rootReducer,
  });

  return (
    
    <Provider store={store}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Login />
        {/* Toast configuration */}
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </Provider>
  );
}

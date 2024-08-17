import React from 'react';
import { Text, View } from 'react-native';
import Login from './components/core/Auth/Login';
import { Provider } from 'react-redux';
import rootReducer from './reducer/index';
import { configureStore } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses';
export default function App() {
  const store = configureStore({
    reducer: rootReducer,
  });
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={EnrolledCourses} />
      </Stack.Navigator>
      {/* Toast configuration */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
  </Provider>
  );
}

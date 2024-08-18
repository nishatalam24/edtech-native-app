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
import { useSelector } from 'react-redux';
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses';

function AppNavigator()  {
  const { token } = useSelector((state) => state.auth);

  // let token =true;
  
  const Stack = createStackNavigator();
  // const { token } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EnrolledCourses" component={EnrolledCourses} />
      </Stack.Navigator> */}

<Stack.Screen name="EnrolledCourses" component={EnrolledCourses} />
{token ? (
          <>

          {/* <Text className="bg-red-500 text-lg">hello</Text> */}
            <Text className="text-[100px] text-red-700 pt-2">Hello wolr</Text>
            {/* <EnrolledCourses/> */}
            {/* Other authenticated screens can go here */}
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Login/>
            {/* Other non-authenticated screens can go here */}
          </>
        )}



      {/* Toast configuration */}
      {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
    </NavigationContainer>
  );
}


export default function App() {
  const store = configureStore({
    reducer: rootReducer,
  });
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

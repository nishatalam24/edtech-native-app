import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import rootReducer from './reducer/index';
import { setToken } from './slice/authslice';
import Login from './components/core/Auth/Login';
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function AppNavigator() {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to fetch the token from AsyncStorage
    const fetchToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          console.log('Token from AsyncStorage:', token);
          dispatch(setToken(JSON.parse(token)));
        } else {
          console.log('No token found in AsyncStorage.');
        }
      } catch (error) {
        console.error('Failed to retrieve token from AsyncStorage:', error);
      }
    };

    fetchToken();
  }, [dispatch]);

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>

<Text className="text-[20px] text-red-700 pt-[20px]">Hello wolds</Text>
      
      {/* <Stack.Navigator initialRouteName={token ? 'Enrolled Courses' : 'Login'}>


        {token ? (<>
          <Stack.Screen name="EnrolledCourses" component={EnrolledCourses} />
        </>

        ) : (
          <Stack.Screen name="Login" component={Login} />
          
        )}
      </Stack.Navigator> */}

      {/* Toast configuration */}
      <Tab.Navigator>
        <Tab.Screen name="EnrolledCourses" component={EnrolledCourses} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>

      <Toast />
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

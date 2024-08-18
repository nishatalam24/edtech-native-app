import { endpoints } from "../apis"
import axios from 'axios';
import {  setToken } from "../../slice/authslice"
import { REACT_APP_BASE_URL } from '@env';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { apiConnector } from "../apiConnector";

const {
    LOGIN_API,
  } = endpoints


// export function logins(email, password, navigate) {
//     return async (dispatch) => {
//       const toastId = toast.loading("Loading...")
//       dispatch(setLoading(true))
//       try {
//         const response = await apiConnector("POST", LOGIN_API, {
//           email,
//           password,
//         })
  
//         console.log("LOGIN API RESPONSE............", response)
  
//         if (!response.data.success) {
//           throw new Error(response.data.message)
//         }
  
//         toast.success("Login Successful")
//         dispatch(setToken(response.data.token))
//         const userImage = response.data?.user?.image
//           ? response.data.user.image
//           : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
//         dispatch(setUser({ ...response.data.user, image: userImage }))
//         localStorage.setItem("token", JSON.stringify(response.data.token))
//         navigate("/dashboard/my-profile")
//       } catch (error) {
//         console.log("LOGIN API ERROR............", error)
//         toast.error("Login Failed")
//       }
//       dispatch(setLoading(false))
//       toast.dismiss(toastId)
//     }
//   }

const apiUrl = REACT_APP_BASE_URL

export function login(email, password,navigation) {
    return async (dispatch) => {
      Toast.show({
        type: 'info',
        text1: 'Loading...',
      });
  
      console.log(email,password)
    //   dispatch(setLoading(true));
  
      try {
        // const response = await axios.post('https://studynotion-thefinal.onrender.com/api/v1/auth/login', {
        // const response = await axios.post(`${REACT_APP_BASE_URL}/auth/login`, {
        //   email,
        //   password


          
        // }, 
        



        
        // {
        //   withCredentials: true, // Important to include cookies
        // });

        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
  
        console.log('Response Data:', JSON.stringify(response.data, null, 2));
        console.log('User Data:', JSON.stringify(response.data.user, null, 2));
  
        if (response.data && response.data.token) {
          const token = response.data.token;
  
          // Save the token to AsyncStorage
          await AsyncStorage.setItem('token', token);
          console.log('Token saved to AsyncStorage:', token);
  
          // Show success toast
          Toast.show({
            type: 'success',
            text1: 'Login Successful',
            text2: 'You have successfully logged in.',
          });
        //   navigate('Profile');
          // Optionally, dispatch action to set token in the store
          dispatch(setToken(token));
          navigation.navigate('EnrolledCourses');
        } else {
          console.log('Token not found in response');
  
          // Show error toast if token is not found
          Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: 'Token not found in response.',
          });
        }




      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error Response Data:', error.response.data);
          console.error('Error Response Status:', error.response.status);
          console.error('Error Response Headers:', error.response.headers);
  
          // Show error toast for failed requests
          Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: 'There was an error with your login request.',
          });
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error Request Data:', error.request);
  
          // Show error toast for no response
          Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: 'No response received from the server.',
          });
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error Message:', error.message);
  
          // Show error toast for general errors
          Toast.show({
            type: 'error',
            text1: 'Login Failed',
            text2: 'An unexpected error occurred.',
          });
        }
      } finally {
        // Hide loading toast
        setTimeout(() => {
            Toast.hide();
          }, 900); // 
        // dispatch(setLoading(false));
      }
    };
  }
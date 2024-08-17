import { View, Text,Button } from 'react-native'
import Form from '../../common/Form'
import  { useState ,React} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch,useSelector } from 'react-redux';
import { setToken } from '../../../slice/authslice';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { login } from "../../../services/Operations/authAPI"
// import {REACT_APP_BASE_URL} from '@env'
// import { useDispatch } from 'react-redux';
const Login = () => {

  const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const dispatch = useDispatch();

    const handleSubmit = async () => {
    //   console.log('Email:', emailLower);
    //   console.log('Password:', passwordLower);
    // //   e.preventDefault()
      dispatch(login(email, password))
    //   // Add more submit logic here, such as calling an API
    //   const email = emailLower.toLowerCase();
    //   const password = passwordLower.toLowerCase();

      // dispatch(login(email, password))
      // try {
      //   // const response = await axios.post('https://studynotion-thefinal.onrender.com/api/v1/auth/login', {
      //   const response = await axios.post('http://localhost:4000/api/v1/auth/login', {
      //     email,
      //     password
      //   }, {
      //     withCredentials: true, // Important to include cookies
      //   });
  
      //   console.log('Response Data:', JSON.stringify(response.data,null,2));
      //   console.log('User Data:', JSON.stringify(response.data.user, null, 2));



      //   if (response.data && response.data.token) {
      //     const token = response.data.token;
  
      //     // Save the token to AsyncStorage
      //     await AsyncStorage.setItem('token', token);
          
      //     console.log('Token saved to AsyncStorage:', token);
      //   } else {
      //     console.log('Token not found in response');
      //   }

      // } catch (error) {
      //   if (error.response) {
      //     // The request was made and the server responded with a status code
      //     // that falls out of the range of 2xx
      //     console.error('Error Response Data:', error.response.data);
      //     console.error('Error Response Status:', error.response.status);
      //     console.error('Error Response Headers:', error.response.headers);
      //   } else if (error.request) {
      //     // The request was made but no response was received
      //     console.error('Error Request Data:', error.request);
      //   } else {
      //     // Something happened in setting up the request that triggered an Error
      //     console.error('Error Message:', error.message);
      //   }
      // }
    }
  

    


  return (
    <View>
      <Text>Login</Text>
   <Form
        placeholder="Enter Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
     <Form
        placeholder="Enter Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
         <Button title="Submit" onPress={handleSubmit} />
    </View>
  )
}

export default Login
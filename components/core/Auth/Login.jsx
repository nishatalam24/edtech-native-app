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
import { useNavigation } from '@react-navigation/native';
const Login = () => {


  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const { token } = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const dispatch = useDispatch();

    const handleSubmit = async () => {
   
      dispatch(login(email, password,navigation))
  
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
import { View, Text, Button } from 'react-native'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setToken } from '../../../slice/authslice';




const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);

  const navigation = useNavigation();
  const dispatch = useDispatch();


  function handleSubmit(){
dispatch(setToken(null))
   
  }

  return (
    <View className="h-screen w-screen flex items-center justify-center pt-[100px]">
      {/* <Text className="text-[100px]">EnrolledCourses</Text> */}

      {token ? (
          <>

          {/* <Text className="bg-red-500 text-lg">hello</Text> */}
            <Text className="text-[10px] text-red-700 pt-2">Hello woldd</Text>
            {/* Other authenticated screens can go here */}
          </>
        ) : (
          <>
<Text className>Token nahi hai</Text>
            {/* Other non-authenticated screens can go here */}
          </>
        )}
            <Text className=" text-red-700 ">Hello woldd</Text>
<Button title="Submit" onPress={handleSubmit} />

    </View>
  )
}

export default EnrolledCourses
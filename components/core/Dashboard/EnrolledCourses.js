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
    <View className="">
      {/* <Text className="text-[100px]">EnrolledCourses</Text> */}

      {token ? (
          <>

            <Text className="text-[10px] text-red-700 pt-2">Hello woldd</Text>
          </>
        ) : (
          <>
<Text className>Token nahi hai</Text>
          </>
        )}
            <Text className=" text-red-500 ">Hello woldd from enrolled</Text>
<Button title="Submit" onPress={handleSubmit} />

    </View>
  )
}

export default EnrolledCourses
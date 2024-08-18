import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
const EnrolledCourses = () => {
  const { token } = useSelector((state) => state.auth);


  return (
    <View className="h-screen w-screen flex items-center justify-center pt-[100px]">
      <Text className="text-[100px]">EnrolledCourses</Text>

      {token ? (
          <>

          {/* <Text className="bg-red-500 text-lg">hello</Text> */}
            <Text className="text-[100px] text-red-700 pt-2">Hello wolr</Text>
            {/* Other authenticated screens can go here */}
          </>
        ) : (
          <>
<Text className>Token nahi hai</Text>
            {/* Other non-authenticated screens can go here */}
          </>
        )}

    </View>
  )
}

export default EnrolledCourses
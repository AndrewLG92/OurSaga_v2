import { View, Text } from 'react-native'
import React from 'react'

const InfoBox = ({title, containerStyles, titleStyles}: any) => {

  return (
    <View className={`${containerStyles}`}>
      <Text
        className={`text-white text-center font-semibold ${titleStyles}`}
      
      >
        {title}
      </Text>
    </View>
  )
}

export default InfoBox
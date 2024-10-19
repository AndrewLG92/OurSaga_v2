import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeIn, SlideInDown, SlideInUp} from 'react-native-reanimated'
import { Link } from 'expo-router'

const Messages = () => {
  
  return (
    <Animated.View
      entering={SlideInUp}
      style={{
        height: '50%',
        flex: 1,

      }}

    >
      
      <Animated.View
        entering={SlideInDown}
        style={{
          width: '90%',
          height: '80%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <Text>This is a Modal</Text>
        <Link href="/profile">
          Go Back
        </Link>
      </Animated.View>
      
    </Animated.View>
  )
}

export default Messages
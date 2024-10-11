import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { router, Stack } from 'expo-router'


const pathData = [
  {
    id: '1',
    title: 'Account Settings',
    pathname: 'account',
  },
]

const Item = ({title, pathname}: any) => {
  return (
    <View>
      <TouchableOpacity 
        onPress={() => router.push({pathname})}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const Index = () => {
  return (
    <>
     
      <SafeAreaView >
        <FlatList 
          data={pathData}
          renderItem={({item}) => <Item title={item.title} pathname={item.pathname} /> }
        />
      </SafeAreaView>
    </>
  )
}

export default Index
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { signOut } from '@/lib/appwrite'
import Feather from '@expo/vector-icons/Feather'


const pathData = [
  {
    id: 1,
    title: 'Account',
    pathname: 'account',
  },
  {
    id: 2,
    title: 'Security',
    pathname: 'security',
  },
  {
    id: 3,
    title: 'Notification',
    pathname: 'notification',
  },
  {
    id: 4,
    title: 'Privacy',
    pathname: 'privacy',
  },
  {
    id: 5,
    title: 'Language',
    pathname: 'language',
  },
  {
    id: 6,
    title: 'Logout',
    pathname: null,
  }
]

const Item = ({title, pathname}: any) => {
  return (
    <View className="w-full mt-20">
      <TouchableOpacity 
        onPress={() => router.push({pathname})}
        className="w-auto h-auto flex flex-row justify-between flex-nowrap"
      >
        <Text className="order-1 text-5xl text-center text-white">{title}</Text>
        <View className="order-2 bg-red-500">
          <Feather 
            name={'chevron-right'}
            size={42}
            color={'white'}
          />
        </View>
        
      </TouchableOpacity>
    </View>
  )
}

const LogOut = ({title}: any) => {
  return (
    <View className="border border-white w-full mt-10 mb-10">
      <TouchableOpacity 
        onPress={logout}
        className="inline-flex flex-row items-center justify-center gap-10"
      >
        <Feather 
          name={'log-out'}
          size={24}
          color={'red'}
        />
        <Text className="text-3xl text-center text-white">
        {title}
      </Text>
      </TouchableOpacity>
    </View>
  )

}

const logout = async () => {
  try {
    await signOut();
    router.push('/sign-in')
  } catch (error: any) {
    Alert.alert('Error', error.message)      
  }
}


const Index = () => {
  return (
    <>
      <SafeAreaView className="bg-black w-full h-full justify-center items-center">
        <View className="justify-center items-center mt-10">
          <Text className="text-white text-5xl">
            Settings
          </Text>
        </View>
        <FlatList 
          data={pathData}
          className="mb-10 w-full"
          renderItem={({item}) => 
            item.id != 6 ? <Item title={item.title} pathname={item.pathname} /> :
            <LogOut title={item.title} />
          }
        />
      </SafeAreaView>
      <StatusBar backgroundColor='#161622' style={'light'}/>
    </>
  )
}

export default Index
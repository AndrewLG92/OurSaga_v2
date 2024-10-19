import { View, Text, FlatList, Image, RefreshControl, Alert, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/context/GlobalProvider'
import AntDesign from '@expo/vector-icons/AntDesign';
import InfoBox from '@/components/InfoBox'
import { Href, router } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { user, setUser, setIsLoggedIn} = useGlobalContext();
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (
    <SafeAreaView className="bg-black h-full">
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} className="mt-5">
        <View className="w-full justify-center items-center mb-12 px-4">
          <View className="w-full items-end relative mt-5">
            <TouchableOpacity 
              className="w-full items-end mr-5"
              onPress={() => router.push("/(settings)")}
            >
              <Feather 
                name="settings" 
                size={24} 
                color="red" 
              />
            </TouchableOpacity>
          </View>
          <View className="w-24 h-24 border-4 border-red-400 rounded-full justify-center items-center">
            <Image 
              source={{uri: user?.avatar }} 
              className="w-[100%] h-[100%] rounded-full"
              resizeMode="cover"
            />
          </View>
          <InfoBox 
              title={user?.username}
              containerStyles='mt-1'
              titleStyles='text-lg'
            />
        </View>
      </RefreshControl>
      <StatusBar backgroundColor='#161622' style={'light'}/>
    </SafeAreaView>
    
  )
}

export default Profile
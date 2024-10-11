import { View, Text, FlatList, Image, RefreshControl, Alert, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/context/GlobalProvider'
import AntDesign from '@expo/vector-icons/AntDesign';
import InfoBox from '@/components/InfoBox'
import { signOut } from '@/lib/appwrite';
import { Href, router } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';

const Profile = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { user, setUser, setIsLoggedIn} = useGlobalContext();

  const logout = async () => {
    try {
      await signOut();
      router.push('/sign-in')
    } catch (error: any) {
      Alert.alert('Error', error.message)      
    }
  }
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  return (
    <SafeAreaView className="bg-black h-full">
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh}>
        <View className="w-full justify-center items-center mt-6 mb-12 px-4">
          <TouchableOpacity 
            className="w-full items-end mr-4"
            onPress={() => router.push("/(settings)/")}
          >
            <Feather 
              name="settings" 
              size={24} 
              color="red" 
            />
          </TouchableOpacity>
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
    </SafeAreaView>
  )
}

export default Profile
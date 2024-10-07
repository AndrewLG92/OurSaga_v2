import { ScrollView, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Link, Href, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';


const index = () => {
    const home = "/home" as Href;
    const logo = require('@/assets/images/oursaga-logo.png');
    const cover = require('@/assets/images/cover-img.png');

    return (
       
        <SafeAreaView className="h-full bg-bgPrimary">
            <ScrollView contentContainerStyle={{ height: '100%'}} >
                <View className="w-full items-center min-h-[85vh] px-4">
                    <Image 
                        source={logo}
                        className="w-[350px] h-[150px]"
                        resizeMode="contain"
                        tintColor={'#f01405'}
                    />
                    <Image 
                        source={cover}
                        className="w-[350px] h-[250]"
                        resizeMode="contain"
                    />
                    <View className="relative mt-5">
                        <Text className="text-2xl text-gray-200 font-extrabold text-center">
                            Discover your Everlasting Story....A Tell that will last for 
                            <Text className="text-orange-600"> Generations!</Text>
                        </Text>
                    </View>
                    <Text className="text-sm font-mono font-extrabold text-gray-100 mt-7">
                        Let's embark on a journey of limitless Storys!
                    </Text>

                    <CustomButton 
                        title="Continue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor='#161622' style={'light'}/>
        </SafeAreaView>
            
    )
}

export default index
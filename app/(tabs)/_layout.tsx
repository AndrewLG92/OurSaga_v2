import { View, Text, Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

interface IconProps {
    icon: any;
    name: string;
    color: string;
    focused: boolean;
}

const TabIcon = ({ icon, name, color, focused}: IconProps) => {
    return (
        <View className="items-center justify-center gap-2">
            <Feather 
                name={icon}
                color={color}
                size={24}
            />
            <Text className={`${focused ? 'font-semibold' : 'font-normal'} text-xs`} style={{color: color}}>
                {name}
            </Text>
        </View>
    )
}


const TabsLayout = () => {
    const logoRB = require('@/assets/images/logo-red-black.png');
    const logoBW = require('@/assets/images/logo-black-white.png');
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: 'black',
                        height: 84,
                    },
                    tabBarActiveTintColor: "red",
                    tabBarInactiveTintColor: "white",
                }}
            >
                <Tabs.Screen 
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused}) => (
                            <TabIcon 
                                icon={'user'}
                                color={color}
                                focused={focused}
                                name="Profile"
                            />
                        ) 
                    }}
                />
                <Tabs.Screen 
                    name="discover"
                    options={{
                        title: 'Discover',
                        headerShown: false,
                        tabBarIcon: ({ color, focused}) => (
                            <View className="items-center">
                                <Image
                                    source={focused ? logoRB : logoBW}
                                    className="w-10 h-10 mb-1 relative"
                                    resizeMode='contain'
                                />
                                <Text className={`${focused ? 'font-semibold' : 'font-normal'} text-xs relative top-[-5px]`}style={{color: color}}>Discover</Text>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen 
                    name="messages"
                    options={{
                        title: 'Messages',
                        headerShown: false,
                        tabBarIcon: ({color, focused}) => (
                            <TabIcon 
                                icon={'message-square'}
                                color={color}
                                focused={focused}
                                name="Messages"
                            />
                        )
                    }}
                />
                
            </Tabs>
        </>
    )
}

export default TabsLayout
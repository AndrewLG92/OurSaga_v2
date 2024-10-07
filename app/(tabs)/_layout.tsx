import { View, Text} from 'react-native'
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
        <View className="items-center justify-center">
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
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#150d6b',
                    height: 84, 
                }
            }}
        >
            <Tabs.Screen 
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon 
                            icon={'home'}
                            color={color}
                            focused={focused}
                            name="Home"
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="create"
                options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon 
                            icon={'edit-2'}
                            color={color}
                            focused={focused}
                            name="Create"
                        />
                    )
                }}
            />
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
                name="bookmark"
                options={{
                    title: 'Bookmark',
                    headerShown: false,
                    tabBarIcon: ({ color, focused}) => (
                        <TabIcon 
                            icon={'bookmark'}
                            color={color}
                            focused={focused}
                            name="Bookmark"
                        />
                    )
                }}
            />
        </Tabs>
    </>
  )
}

export default TabsLayout
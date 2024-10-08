import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather'



const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}: any) => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-medium">{title}</Text>
                <View className="w-full h-16 px-4 bg-black-100 border-2 border-red-500 rounded-2xl focus:border-yellow-600 items-center flex-row">
                    <TextInput 
                        className="flex-1 text-white font-semibold text-base w-"
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor="#7b7b8b"
                        onChangeText={handleChangeText}
                        secureTextEntry={title === 'Password' && !showPassword}
                    />

                    {title === 'Password' && (
                        <TouchableOpacity onPress={() =>
                            setShowPassword(!showPassword)}>
                            <Feather 
                                name={!showPassword ? 'eye' : 'eye-off'}
                                color='#bfbdb8'
                                size={16}
                            />

                        </TouchableOpacity>
                    )}
                </View>
        </View>
    )
}

export default FormField
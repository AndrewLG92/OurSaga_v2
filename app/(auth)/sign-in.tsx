import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, Href, router } from 'expo-router';
import { signIn } from '@/lib/appwrite';

const SignIn = () => {
  const signUp = "/sign-up" as Href;
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if(!form.email || !form.password){
      Alert.alert('Error', 'Please fill in all the fields');
    }

    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);

      // set it to globel state...

      router.replace('/profile');
    } catch (error: any) {
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false);
    }
  }

  const logo = require('@/assets/images/oursaga-logo.png');

  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="w-full justify-center items-center min-h-[84vh] px-4 my-6">
          <Image 
            source={logo}
            className="w-[auto] h-[auto]"
            resizeMode="contain"
            tintColor={'#f01405'}
          />
          <Text className="text-2xl text-white font-semibold mt-10">
            Log in to OurSaga
          </Text>

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder='email'
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            placeholder='password'
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            
          />

          <CustomButton 
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-normal">
              Don't have Account?
            </Text>

            <Link href={signUp} className="text-lg font-semibold text-red-400">Sign Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
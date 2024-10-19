import { View, Text, ScrollView, Image, Alert, Animated } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, Href, router } from 'expo-router';
import { createUser } from '@/lib/appwrite'
import { useGlobalContext } from '@/context/GlobalProvider';
import FadeInForm from '@/components/FadeInForm';

const SignUp = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const signIn = "/sign-in" as Href;
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    bio: '',
    birthday: '',
    hobbies: '',
    relationship: '',
  });

  const steps = [
    [
      { label: 'Username', value: form.username, field: 'username', otherStyles: 'mt-10' },
      { label: 'Email', value: form.email, field: 'email', otherStyles: 'mt-7' },
      { label: 'Password', value: form.password, field: 'password', otherStyles: 'mt-7' }
    ],
    [
      { label: 'Bio', value: form.bio, field: 'bio', otherStyles: 'mt-7', multiline: true, numberOfLines: 4, textFieldStyle: "h-30" },
      { label: 'Birthday', value: form.birthday, field: 'birthday', otherStyles: 'mt-7' }
    ],
    [
      { label: 'Hobbies', value: form.hobbies, field: 'hobbies', otherStyles: 'mt-7' },
      { label: 'Relationship', value: form.relationship, field: 'relationship', otherStyles: 'mt-7' }
    ]
  ];

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (!form.username || !form.email || !form.password || !form.birthday) {
      Alert.alert('Error', 'One of the Required Fields is Empty.');
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username, form.bio, form.birthday, form.hobbies, form.relationship);

      setUser(result);
      setIsLoggedIn(true);

      router.replace('/profile');
    } catch (error: any) {
      Alert.alert('Error', error.message)
    } finally {
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
            Sign Up
          </Text>

          <FadeInForm key={currentStep}>
            <View>
            {steps[currentStep].map((field) => (
              <FormField
                key={field.field}
                placeholder={field.label}
                title={field.label}
                value={field.value}
                otherStyles={field.otherStyles}
                handleChangeText={(value: string) => handleInputChange(field.field, value)}
                multiline={field?.multiline}
                numberOfLines={field?.numberOfLines}
                textFieldStyle={field?.textFieldStyle}
              />
            ))}
            </View>
          </FadeInForm>
          
          {currentStep > 0 && (
            <CustomButton
              title="Back"
              handlePress={handleBack}
              containerStyles="mt-7 w-full"
              isLoading={isSubmitting}
            />
          )}

          {currentStep < steps.length - 1 ? (
            <CustomButton
              title="Next"
              handlePress={handleNext}
              containerStyles="mt-7 w-full"
              isLoading={isSubmitting}
            />
          ) : ( 
            <CustomButton
              title="Submit"
              handlePress={submit}
              containerStyles="mt-7 w-full"
              isLoading={isSubmitting}
            />
          )}

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-normal">
              Have an account already?
            </Text>

            <Link href={signIn} className="text-lg font-semibold text-red-400">Sign In</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
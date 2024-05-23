import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from '@/components/CustomButton';
import {  router } from "expo-router";

const Welcome = () => {
  return (
     <SafeAreaView className=" bg-white">
        <ScrollView
          contentContainerStyle={{
            height: "100%"
          }} 
        >
            <View className="flex items-center justify-center w-full h-full px-4">
                 <Text>Transitease</Text>
                
                <View className="relative mt-5">
                    <Text className="text-3xl font-bold text-center text-black-100">
                        Transform Transportation{"\n"}
                        Cashless{" "}
                    <Text className="text-black-200">Transitease</Text>
                    </Text>   
                </View>
                
                <CustomButton
                  title="Continue with Email"
                  handlePress={() => router.push("/(toptabs)")}
                  containerStyles={{ width: "100%", marginTop: 7 }}
                />
            </View>            
        </ScrollView>

        <StatusBar backgroundColor="#000000" style="light" />
     </SafeAreaView>
  )
}

export default Welcome
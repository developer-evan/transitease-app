import { icons, images } from "@/constants";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}
      >
        <View className="flex-1 p-4">
          <View className="items-center mb-6">
            <Text className="text-3xl font-bold text-blue-500">Profile</Text>
          </View>
          <View className="items-center mb-6">
            <Image
              source={icons.profile} 
              className="w-24 h-24 rounded-full mb-2"
            />
            <View className=" flex flex-row items-center gap-3">
              <Text className="text-xl font-semibold text-gray-800">
                Evans Mogeni
              </Text>
              <Link href="/edit-profile">
              <Ionicons
              // edit icon
                name="pencil-outline"              
                size={16}
                color="#6B7280"
                className="mr-4"
              />
              </Link>
            </View>
          </View>

          <View className=" p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons
                name="link-outline"
                size={24}
                color="#6B7280"
                className="mr-4"
              />
              <Text className="text-lg font-semibold text-gray-800">
                Connected Account
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#6B7280"
            />
          </View>
          <View className=" p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              
              <Ionicons
                name="shield-outline"
                size={24}
                color="#6B7280"
                className="mr-4"
              />
              
              <Text className="text-lg font-semibold text-gray-800">
                Privacy and Security
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#6B7280"
            />
          </View>
          <View className=" p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons
                name="log-in-outline"
                size={24}
                color="#6B7280"
                className="mr-4"
              />
              <Text className="text-lg font-semibold text-gray-800">
                Login Settings
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#6B7280"
            />
          </View>
          <View className=" p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons
                name="call-outline"
                size={24}
                color="#6B7280"
                className="mr-4"
              />
              <Text className="text-lg font-semibold text-gray-800">
                Service Center
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#6B7280"
            />
          </View>
        </View>
        <View className="items-center my-8">
          <TouchableOpacity className=" p-4 rounded-full ">
            <Ionicons name="trash-outline" size={32} color="#DC2626" />
          </TouchableOpacity>
          <Text className="mt-2 text-lg font-semibold text-red-600">
            Delete Account
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

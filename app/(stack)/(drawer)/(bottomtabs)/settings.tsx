import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";

const Settings = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }} >
        <View className="flex-1 p-4">
          <View className="items-center mb-6">
            <Text className="text-3xl font-bold text-blue-500">Settings</Text>
          </View>
          <View className="p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons
                name="person-outline"
                size={24}
                color="#4B5563"
                className="mr-4"
              />
              <Text className="text-lg font-semibold text-gray-800">
                Profile
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#4B5563"
            />
          </View>
          <View className=" p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#4B5563"
                className="mr-4"
              />
              <Text className="text-lg font-semibold text-gray-800">
                Notifications
              </Text>
            </View>
            <Link href="notifications">
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#4B5563"
              />
            </Link>
          </View>
          <View className=" p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons
                name="wallet-outline"
                size={24}
                color="#4B5563"
                className="mr-4"
              />
              <Text className="text-lg font-semibold text-gray-800">
                Your Wallet
              </Text>
            </View>
            <Link href="wallet">
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="#4B5563"
              />
            </Link>
          </View>
          <View className=" p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons
                name="log-in-outline"
                size={24}
                color="#4B5563"
                className="mr-4"
              />
              <Text className="text-lg font-semibold text-gray-800">
                Login Settings
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#4B5563"
            />
          </View>
          <View className=" p-4 rounded-lg  mb-4 flex-row justify-between items-center">
            <View className="flex-row items-center">
              <Ionicons
                name="call-outline"
                size={24}
                color="#4B5563"
                className="mr-4"
              />
              <Text className="text-lg font-semibold text-gray-800">
                Service Center
              </Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#4B5563"
            />
          </View>
        </View>
        <View className="items-center my-8">
          <TouchableOpacity className=" p-4 rounded-full ">
            <Ionicons name="log-out-outline" size={32} color="#4B5563" />
          </TouchableOpacity>
          <Text className="mt-4 text-lg font-semibold text-blue-500">
            Log Out
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

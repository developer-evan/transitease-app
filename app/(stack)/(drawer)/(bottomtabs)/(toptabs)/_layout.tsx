import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { ReactNode } from "react";
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { Link, router, withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const RootLayout = () => {
  const [hideAccount, setHideAccount] = React.useState(true);
  return (
    <SafeAreaView className="bg-[#F5F7FA] flex-1">
      <ScrollView>
        <View className="px-4 py-4">
          <View className="bg-[#1F41BB] rounded-2xl px-6 py-6 mb-2 shadow-lg">
            <Text className="text-2xl font-bold text-white">
              Good Morning,
              <Text className="font-bold text-white"> Evans Mogeni</Text>
            </Text>
            <View className="flex-row items-center justify-between py-6">
              <View>
                <Text className="text-lg font-bold text-white">Acc No.</Text>
                <View className="flex-row items-center gap-3">
                  <Text className="text-sm text-white">
                    {hideAccount ? "0728  ****  248" : "0728 3666 2248"}
                  </Text>
                  <TouchableOpacity onPress={() => setHideAccount(!hideAccount)}>
                    <Ionicons name={hideAccount ? "eye-off" : "eye"} size={16} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-col items-center">
                <TouchableOpacity onPress={() => router.push("/create-wallet")}>
                  <Ionicons name="add-circle-outline" size={26} color="white" />
                </TouchableOpacity>
                <Text className="text-md font-bold text-white mt-1">Create Wallet</Text>
              </View>
            </View>
          </View>

          <View className="flex-row justify-end pt- mb-6">
            <TouchableOpacity
              onPress={() => router.push("/wallet")}
              className="flex-row items-center bg-[#1F41BB] rounded-lg px-4 py-2 shadow-md"
            >
              <Text className="text-white mr-2">Access Wallet</Text>
              <Entypo name="chevron-right" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-around py-6 bg-white rounded-lg shadow-md">
            <ActionButton
              icon={<MaterialCommunityIcons name="transfer" size={28} color="#1F41BB" />}
              label="Transfer"
            />
            <ActionButton
              icon={<MaterialCommunityIcons name="credit-card" size={28} color="#1F41BB" />}
              label="Payment"
            />
            <ActionButton
              icon={<MaterialIcons name="attach-money" size={28} color="#1F41BB" />}
              label="Payout"
            />
            <ActionButton
              icon={<Ionicons name="add-circle-outline" size={28} color="#1F41BB" />}
              label="Top Up"
            />
          </View>

          <View className="py-5 mt-6 bg-white rounded-lg px-4 shadow-md">
            <Text className="text-2xl font-bold mb-4">Pay Transport</Text>
            <View className="flex-row justify-between">
              <TransportButton
                icon={<MaterialCommunityIcons name="car" size={28} color="#333" />}
                label="Road Transport"
              />
              <TransportButton
                icon={<MaterialCommunityIcons name="train" size={28} color="#333" />}
                label="Railway Transport"
              />
              <TransportButton
                icon={<MaterialCommunityIcons name="airplane" size={28} color="#333" />}
                label="Air Transport"
              />
              <TransportButton
                icon={<MaterialCommunityIcons name="ferry" size={28} color="#333" />}
                label="Water Transport"
              />
            </View>
          </View>

          <View className="flex-row justify-between pt-4 mt-4 mb-4">
            <Text className="text-2xl font-bold">Recent Transactions</Text>
            {/* <TouchableOpacity onPress={() => router.push("/transactions")} className="flex-row items-center">
              <Text className="text-md font-bold text-[#1F41BB]">View All</Text>
              <Ionicons name="chevron-forward-outline" size={20} color="#1F41BB" />
            </TouchableOpacity> */}
          </View>

          <View className="flex-row items-center justify-between py-6 bg-white rounded-lg px-4 mb-4 shadow-md">
            <View className="flex-col items-start">
              <Text className="text-lg font-bold">Embassava Motors</Text>
              <Text className="text-sm text-gray-600">Dec 2, 2024 . 12:00 PM</Text>
            </View>
            <Text className="text-xl font-bold text-red-600">-Ksh.156.00</Text>
          </View>

          <View className="flex-row items-center justify-between py-6 bg-white rounded-lg px-4 shadow-md">
            <View className="flex-col items-start">
              <Text className="text-lg font-bold">Uber</Text>
              <Text className="text-sm text-gray-600">Jan 2, 2024 . 12:00 PM</Text>
            </View>
            <Text className="text-xl font-bold text-red-600">-Ksh.87.00</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const TransportButton = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <TouchableOpacity className="items-center flex">
    {icon}
    <Text className="text-[9px] font-medium text-center mt-1 text-gray-700">{label}</Text>
  </TouchableOpacity>
);

const ActionButton = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <TouchableOpacity className="items-center flex">
    {icon}
    <Text className="text-[9px] font-medium text-center mt-1 text-gray-700">{label}</Text>
  </TouchableOpacity>
);

export default RootLayout;

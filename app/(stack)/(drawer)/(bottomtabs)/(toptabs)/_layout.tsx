import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const RootLayout = () => {
  return (
    <View
    className="px-4 py-4 bg-white flex-1  h-full"
    >
      <View className="bg-[#1F41BB] rounded-2xl px-6 py-6 mb-4">
      <Text className="text-2xl font-bold text-white">
        Goodmorning,
        <Text className="font-bold text-white"> Evans Mogeni</Text>
      </Text>
      <View className="flex-row items-center justify-between py-6">
        <View>
          <Text className="text-lg font-bold text-white">Balance</Text>
          <Text className="text-xl font-bold text-white">Ksh 1000</Text>
        </View>
        <Ionicons name="add-circle-outline" size={32} color="white" 
        // onPress={handleAddBalance}
         />
      </View>
    </View>
      <View className="flex-row justify-around px- py-6  ">
        <ActionButton
          icon={
            <MaterialCommunityIcons name="transfer" size={28} color="#1F41BB" />
          }
          label="Transfer"
        />
        <ActionButton
          icon={
            <MaterialCommunityIcons
              name="credit-card"
              size={28}
              color="#1F41BB"
            />            
          }
          label="Payment"
        />
        <ActionButton
          icon={<MaterialIcons name="attach-money" size={28} color="#1F41BB" />}
          label="Payout"
        />
        <ActionButton
          icon={
            <Ionicons name="add-circle-outline" size={28} color="#1F41BB" />
          }
          label="Top Up"
        />
      </View>
      <View className="py-5  mt-6 ">
        <Text className="text-md font-bold mb-4">Pay Transport</Text>
        <View className="flex-row justify-between">
          <TransportButton
            icon={<MaterialCommunityIcons name="car" size={28} color="black" 
            
            />}
            label="Road Transport"
          />
          <TransportButton
            icon={
              <MaterialCommunityIcons name="train" size={28} color="black" />
            }
            label="Railway Transport"
          />
          <TransportButton
            icon={
              <MaterialCommunityIcons name="airplane" size={28} color="black" />
            }
            label="Air Transport"
          />
          <TransportButton
            icon={
              <MaterialCommunityIcons name="ferry" size={28} color="black" />
            }
            label="Water Transport"
          />
        </View>
      </View>
    </View>
  );
};

const TransportButton = ({ icon, label }: { icon: ReactNode, label: string }) => (
  <TouchableOpacity className="items-center flex">
    {icon}
    <Text className="text-[9px] font-medium  text-center">{label}</Text>
  </TouchableOpacity>
);

const ActionButton = ({ icon, label }: { icon: ReactNode, label: string }) => (
  <TouchableOpacity className="items-center flex">
    {icon}
    <Text className="text-[9px] font-medium  text-center">{label}</Text>
  </TouchableOpacity>
);

export default RootLayout;

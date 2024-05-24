import { View, Text, TouchableOpacity } from "react-native";
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
import CustomButton from "@/components/CustomButton";

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
    <View className="px-4 py-4 bg-white flex-1  h-full">
      <View className="bg-[#1F41BB] rounded-2xl px-6 py-6 ">
        <Text className="text-2xl font-bold text-white">
          Goodmorning,
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
                <Ionicons
                  name={hideAccount ? "eye-off" : "eye"}
                  size={16}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-col items-center">
            <TouchableOpacity
              onPress={() => router.push("/create-wallet")}
            >
            <Ionicons
              name="add-circle-outline"
              size={26}
              color="white"
              // onPress={handleAddBalance}
            />
            </TouchableOpacity>
            <Text className="text-md font-bold text-white">Create Wallet</Text>
            {/* <Text className="text-lg font-bold text-white">Ksh. 5,000.00</Text> */}
          </View>
        </View>
      </View>
      <View className="flex-row justify-end py-4">
        {/* <CustomButton
          title="Access Wallet"
          handlePress={() => router.push("/wallet")}
          containerStyles={{ width: "40%" }}
        /> */}
        <TouchableOpacity
          onPress={() => router.push("/wallet")}
          className="flex-row items-center bg-[#1F41BB] rounded-lg px-4 py-2"
        >
          <Text className="text-white">Access Wallet</Text>
          <Entypo name="chevron-right" size={20} color="white" />
        </TouchableOpacity>
      </View>
      {/* <View className="flex-row justify-between py-4">
        <View className="flex-col items-center">
          <Text className="text-lg font-bold">Ksh. 5,000.00</Text>
          <Text className="text-sm">Wallet Balance</Text>
        </View>
        <View className="flex-col items-center">
          <Text className="text-lg font-bold">Ksh. 2,000.00</Text>
          <Text className="text-sm">Pending Balance</Text>
        </View>
      </View> */}
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
            icon={<MaterialCommunityIcons name="car" size={28} color="black" />}
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
      {/* add recent transactions here */}

      <View className="flex-row justify-between py-4">
        <Text className="text-md font-bold">Recent Transactions</Text>
        <Link href="/transactions">
          <Text className="text-md font-bold text-blue-500">View All</Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#1F41BB" />

        </Link>
        </View>

        <View className="flex-col items-center">
          <Text className="text-lg font-bold">Ksh. 5,000.00</Text>
          <Text className="text-sm">Wallet Balance</Text>
          </View>
    </View>
  );
};

const TransportButton = ({
  icon,
  label,
}: {
  icon: ReactNode;
  label: string;
}) => (
  <TouchableOpacity className="items-center flex">
    {icon}
    <Text className="text-[9px] font-medium  text-center">{label}</Text>
  </TouchableOpacity>
);

const ActionButton = ({ icon, label }: { icon: ReactNode; label: string }) => (
  <TouchableOpacity className="items-center flex">
    {icon}
    <Text className="text-[9px] font-medium  text-center">{label}</Text>
  </TouchableOpacity>
);

export default RootLayout;

import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const Wallet = () => {
  const [hideAccount, setHideAccount] = React.useState(true);
  const balance = 5000;
  return (
    <View className="flex-1 bg-blue-50 p-4">
      <View className="bg-[#1F41BB] rounded-2xl px-6 py-6 mb-10">
        <Text className="text-3xl text-center font-bold text-white">
          Account No.
        </Text>
        <View className="flex-row items-center justify-center gap-3">
          <Text className="text-lg text-center text-white">
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
        <View className="flex-row items-center justify-between py-6">
          <View>
            <Text className="text-lg font-bold text-white">
              Account Balance{" "}
            </Text>

            <Text className="text-lg font-bold text-white">Ksh. {balance}</Text>
          </View>
          <View className="flex-col items-center">
            <TouchableOpacity onPress={() => router.push("/add-card")}>
              <Ionicons
                name="add-circle-outline"
                size={26}
                color="white"
                // onPress={handleAddBalance}
              />
            </TouchableOpacity>
            <Text className="text-md font-bold text-white">Add Card</Text>
            {/* <Text className="text-lg font-bold text-white">Ksh. 5,000.00</Text> */}
          </View>
        </View>
      </View>

      <TextInput
        className="bg-white p-3 mb-2 rounded-lg"
        placeholder="First Name"
      />
      <TextInput
        className="bg-white p-3 mb-2 rounded-lg"
        placeholder="Last Name"
      />
      <TextInput className="bg-white p-3 mb-2 rounded-lg" placeholder="Phone" />
      <View className="bg-white p-3 mb-2 rounded-lg">
        <Text className="text-gray-500">Available Balance: Ksh. {balance}</Text>
        <TextInput className="bg-white mt-2" placeholder="KES" />
      </View>

      <View className="flex-row justify-between mt-4 gap-2">
        {/* <TouchableOpacity className="flex-1 bg-red-200 p-3 rounded-lg mr-2">
          <Text className="text-center text-red-700">Cancel</Text>
        </TouchableOpacity> */}
        <CustomButton
          title="Cancel"
          handlePress={() => router.push("/(toptabs)")}
          containerStyles={{
            width: "50%",
            marginTop: 7,
            backgroundColor: "#EF4444",
          }}
        />
        {/* <TouchableOpacity className="flex-1 bg-blue-500 p-3 rounded-lg ml-2">
          <Text className="text-center text-white">Send</Text>
        </TouchableOpacity> */}
        <CustomButton
          title="Send"
          handlePress={() => router.push("/wallet")}
          containerStyles={{ width: "50%", marginTop: 7 }}
        />
      </View>
    </View>
  );
};

export default Wallet;

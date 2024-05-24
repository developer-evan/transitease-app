import { Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import Toast from 'react-native-toast-message';

const Wallet = () => {
  const [hideAccount, setHideAccount] = React.useState(true);
  const balance = 5000;

  const handleSend = () => {
    Toast.show({
      type: 'success',
      text1: 'Payment successful',
      visibilityTime: 2000,
      autoHide: true,
    });
  };
  
  return (
    <View className="flex-1 p-4 bg-blue-50">
      <View className="bg-[#1F41BB] rounded-2xl px-6 py-6 mb-10">
        <Text className="text-3xl font-bold text-center text-white">
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
            <Text className="font-bold text-white text-md">Add Card</Text>
            {/* <Text className="text-lg font-bold text-white">Ksh. 5,000.00</Text> */}
          </View>
        </View>
      </View>

      <TextInput
        className="p-3 mb-2 bg-white rounded-lg"
        placeholder="First Name"
      />
      <TextInput
        className="p-3 mb-2 bg-white rounded-lg"
        placeholder="Last Name"
      />
      <TextInput className="p-3 mb-2 bg-white rounded-lg" placeholder="Phone" />
      <View className="p-3 mb-2 bg-white rounded-lg">
        <Text className="text-gray-500">Available Balance: Ksh. {balance}</Text>
        <TextInput className="mt-2 bg-white" placeholder="KES" />
      </View>

      <View className="flex-row justify-between gap-2 mt-4">
        {/* <TouchableOpacity className="flex-1 p-3 mr-2 bg-red-200 rounded-lg">
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
        {/* <TouchableOpacity className="flex-1 p-3 ml-2 bg-blue-500 rounded-lg">
          <Text className="text-center text-white">Send</Text>
        </TouchableOpacity> */}
          <CustomButton
            title="Send"
            handlePress={handleSend}
            containerStyles={{ width: "50%", marginTop: 7 }}
          />
      </View>
    </View>
  );
};

export default Wallet;

import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const Wallet = () => {
  return (
    <View className="flex-1 bg-blue-50 p-4">
        <View className="bg-[#1F41BB] rounded-2xl px-6 py-6 mb-4">
      
      <View className="flex-row items-center justify-between py-6">
        <View>
          <Text className="text-lg font-bold text-white">Balance</Text>
          <Text className="text-xl font-bold text-white">Ksh 1000</Text>
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
      <TextInput
        className="bg-white p-3 mb-2 rounded-lg"
        placeholder="Phone"
      />
      <View className="bg-white p-3 mb-2 rounded-lg">
        <Text className="text-gray-500">Available Balance: Ksh. 1000</Text>
        <TextInput
          className="bg-white mt-2"
          placeholder="KES"
        />
      </View>

      <View className="flex-row justify-between mt-4">
        <TouchableOpacity className="flex-1 bg-red-200 p-3 rounded-lg mr-2">
          <Text className="text-center text-red-700">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-blue-500 p-3 rounded-lg ml-2">
          <Text className="text-center text-white">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Wallet;

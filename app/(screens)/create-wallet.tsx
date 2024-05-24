import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const CreateWallet = () => {
  return (
    <View className="flex-1 justify-start items-start bg-gray-100 p-4">
      <Text className="text-2xl font-bold text-left mb-2">Create your personal Wallet:</Text>
      <Text className="text-lg text-left mb-1">1. Choose a personal label</Text>
      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
        placeholder="Input own label"
      />
      <Text className="text-lg text-left mb-1">2. Choose the wallet-Type</Text>
      <TouchableOpacity className="bg-gray-200 rounded-lg px-4 py-2 mb-4 w-full">
        <Text className="text-left">Working</Text>
      </TouchableOpacity>
      <Text className="text-lg text-left mb-1">3. Choose a currency of choice</Text>
      <TouchableOpacity className="bg-gray-200 rounded-lg px-4 py-2 mb-4 w-full">
        <Text className="text-left">KES/EUR/USD</Text>
      </TouchableOpacity>
      <Text className="text-lg text-left mb-1">4. Choose to activate or deactivate</Text>
      <TouchableOpacity className="bg-gray-200 rounded-lg px-4 py-2 mb-8 w-full">
        <Text className="text-left">Activate / Deactivate</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-500 rounded-lg px-4 py-2 w-full">
        <Text className="text-white text-center font-semibold">Create Wallet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateWallet;
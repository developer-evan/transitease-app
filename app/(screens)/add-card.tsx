import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { images } from '@/constants';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
// import Toast from 'react-native-toast-message';

const AddCard = () => {
  const handleSend = () => {
    // addCard().then(success => {
      
      const success = true; // Replace 'true' with the actual value
      // alert("Card Added Successfully");
      if (success) {
        alert("Card Added Successfully");
        router.push('/wallet');
      } else {
        alert("Error Occured");
      }
    // });
  };
  return (
    <View className="flex-1 justify- items-center bg-gray-100 p-6">
     
      <View className="mb-6">
        <Image
          source={images.visa} 
          className="rounded"
        />
      </View>
      
      <Text className="text-lg text-left mb-2">Card Holder Name</Text>
      <TextInput
        className="border border-gray-300 bg-slate-300 rounded-lg px-4 py-2 mb-4 w-full"
        placeholder="Card Holder Name"
      />
      
      <Text className="text-lg text-left mb-2">Card Number</Text>
      <TextInput
        className="border border-gray-300  bg-slate-300 rounded-lg px-4 py-2 mb-4 w-full"
        placeholder="xxxx  xxxx  xxxx  xxxx"
        keyboardType="numeric"
      />
      
      <View className="flex-row justify-between mb-4 w-full">
        <View className="flex-1 mr-2">
          <Text className="text-lg text-left mb-2">Expiry Card</Text>
          <TextInput
            className="border border-gray-300 bg-slate-300 rounded-lg px-4 py-2 w-full"
            placeholder="MM/YY"
            keyboardType="numeric"
          />
        </View>
        <View className="flex-1 ml-2">
          <Text className="text-lg text-left mb-2">CVV</Text>
          <TextInput
            className="border border-gray-300 bg-slate-300 rounded-lg px-4 py-2 w-full"
            placeholder="CVV"
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </View>
      </View>
      <CustomButton
                  title="Add Card"
                  handlePress={handleSend}
                  containerStyles={{ width: "100%", marginTop: 7 }}
                />
      
      {/* <TouchableOpacity className="bg-blue-500 rounded-lg px-4 py-2 w-full">
        <Text className="text-white text-center font-semibold">Submit</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default AddCard;

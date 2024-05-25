import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Picker } from '@react-native-picker/picker'

const FundWallet = () => {
    const [selectedValue, setSelectedValue] = useState('bank');

    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-2xl font-bold mb-5">Fund Wallet</Text>
            <View className="mb-4">
                <Text className="text-lg mb-2">Amount:</Text>
                <TextInput className="border border-gray-300 rounded p-2 w-48" placeholder="Enter amount" />
            </View>
            <View className="mb-4">
                <Text className="text-lg mb-2">Deposit Option:</Text>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    className="border border-gray-300 rounded p-2 w-full "
                >
                    <Picker.Item label="Bank Transfer" value="bank" />
                    <Picker.Item label="PayPal" value="paypal" />
                    <Picker.Item label="Bitcoin" value="bitcoin" />
                    <Picker.Item label="Mpesa" value="mpesa" />
                </Picker>
            </View>
            <TouchableOpacity className="bg-blue-500 p-3 rounded mt-5">
                <Text className="text-white text-lg font-bold text-center">Fund</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FundWallet
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CustomButton from '@/components/CustomButton';
import Toast from 'react-native-toast-message';
// import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
// import Toast from 'react-native-toast-message';

const CreateWallet = () => {
  const [walletType, setWalletType] = useState('Savings');
  const [currency, setCurrency] = useState('KES');
  const [isActive, setIsActive] = useState(false);
  // const navigation = useNavigation();

  const handleCreateWallet = () => {
    // Simulate a wallet creation process
    const walletCreated = Math.random() > 0.5; // replace this with actual wallet creation logic
// alert('walletCreated is: ' + walletCreated);
alert("Wallet created successfully")
    if (walletCreated) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Wallet created successfully',
      });
      router.push('/wallet');
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to create wallet',
      });
    }
  };

  return (
    <View className="items-start justify-start flex-1 p-4 bg-gray-100">
     

      
      <Text className="mb-2 text-2xl font-bold text-left">Create your personal Wallet:</Text>
      <Text className="mb-1 text-lg text-left">1. Input your personal label</Text>
      <TextInput
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
        placeholder="Input own label"
      />
      <Text className="mb-1 text-lg text-left">2. Choose the wallet-Type</Text>
      <Picker
        selectedValue={walletType}
        onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) => setWalletType(itemValue)}
        style={{ height: 50, width: '100%', marginBottom: 10 }}
      >
        <Picker.Item label="Savings" value="Savings" />
        <Picker.Item label="Current" value="Current" />
      </Picker>
      <Text className="mb-1 text-lg text-left">3. Choose a currency of choice</Text>
      <Picker
        selectedValue={currency}
        onValueChange={(itemValue: React.SetStateAction<string>, itemIndex: any) => setCurrency(itemValue)}
        style={{ height: 50, width: '100%', marginBottom: 10 }}
      >
        <Picker.Item label="KES" value="KES" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="USD" value="USD" />
      </Picker>
      <Text className="mb-1 text-lg text-left">4. Choose to activate or deactivate</Text>
      <Picker
        selectedValue={isActive}
        onValueChange={(itemValue: boolean | ((prevState: boolean) => boolean), itemIndex: any) => setIsActive(itemValue)}
        style={{ height: 50, width: '100%', marginBottom: 10 }}
      >
        <Picker.Item label="Activate" value={true} />
        <Picker.Item label="Deactivate" value={false} />
      </Picker>
      <CustomButton
        title="Create Wallet"
        handlePress={handleCreateWallet}
        containerStyles={{
          width: '100%',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}
      />
      <Toast 
            
      />
    </View>
  );
};

export default CreateWallet;


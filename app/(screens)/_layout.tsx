import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="notifications" options={{ headerShown: true }} />
      
      <Stack.Screen name="add-card" options={{ 
        headerShown: true ,
        title: "Add Card",        
        }} />
        <Stack.Screen name="create-wallet" options={{ headerShown: true, title: "Create Wallet" }} />

    </Stack>
  );
};
export default ScreenLayout;

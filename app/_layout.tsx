import "../global.css";
import MainLayout from "./(stack)/_layout";
import Authlayout from "./(auth)/_layout";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { AuthProvider, useAuth } from "./context/AuthContext";

SplashScreen.preventAutoHideAsync();

export const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });
  const { authState, onLogout } = useAuth();

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* {authState?.authenticated ? ( */}
          <Stack.Screen name="(stack)" options={{ headerShown: false }} />
        {/* ) : ( */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* )} */}
        <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

// export default _layout;

export default function App() {
  return (
    <AuthProvider>
      <_layout />
    </AuthProvider>
  );
}
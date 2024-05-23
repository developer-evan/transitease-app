import React from "react";
import { Stack } from "expo-router/stack";
import { useColorScheme } from "nativewind";

const MainLayout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Stack
      initialRouteName="(drawer)"
      screenOptions={{
        headerShadowVisible: true,
        headerShown: false,
        statusBarStyle: colorScheme === "dark" ? "light" : "dark",
        headerTintColor: colorScheme === "dark" ? "white" : "black",
        navigationBarColor: colorScheme === "dark" ? "black" : "white",
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#181818" : "white",
        },
      }}
    >

    </Stack>
  );
};

export default MainLayout;

import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { useColorScheme } from "nativewind/dist/stylesheet";
const _layout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#fff" : "#181818",
          },
          drawerStyle: {
            backgroundColor: colorScheme === "dark" ? "#fff" : "#181818",
          },
          headerTintColor: colorScheme === "dark" ? "black" : "white",
        }}
      >
        <Drawer.Screen
          name="(bottomtabs)"
          options={{
            title: "",
            headerTitleAlign: "center",

            headerRight: () => {
              return (
                <View style={{ marginHorizontal: 20 }}>
                  <Feather
                    name="bell"
                    size={24}
                    color={colorScheme === "dark" ? "black" : "black"}
                  />
                </View>
              );
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;

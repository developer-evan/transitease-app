import { Tabs } from "expo-router";
import React from "react";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs 
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "lightgray",
        tabBarShowLabel: false,  
        tabBarStyle: {
          backgroundColor: "#1F41BB",
          borderTopColor: "transparent",
          margin: 6,
          borderRadius: 40,
          paddingBottom: 8,
          paddingTop: 8,
          height: 55,
        },
      }}
    >
      <Tabs.Screen
        name="(toptabs)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" color={color} size={size} />;
          },
        }}
      />
        {/* <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" color={color} size={size} />;
          },
        }}
      /> */}
      
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="wallet" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="google-analytics"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="settings" color={color} size={size} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="account-circle" color={color} size={size} />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;

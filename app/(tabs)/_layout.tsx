import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Tabs
    
      screenOptions={{
        tabBarInactiveTintColor: "#9f9f9f",
        tabBarActiveTintColor: "#1e8b21",
        tabBarStyle: {
          backgroundColor: "white",
          marginHorizontal: 16,
          marginBottom: 12,
          borderRadius: 12,
          paddingTop: 8,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          height: 78,
          width: 200,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
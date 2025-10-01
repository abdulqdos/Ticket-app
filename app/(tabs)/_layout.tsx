import { colors , hexToRgba } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Tabs                                                                                                                                                                                          
      screenOptions={{
        tabBarInactiveTintColor: colors.grayLight,
        tabBarActiveTintColor: colors.white,
        tabBarHideOnKeyboard: false, 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: hexToRgba(colors.black , 0.7),
          marginHorizontal: 16,
          marginVertical: 8,
          borderRadius: 50,
          borderTopWidth: 0,
          paddingHorizontal: 16,
          paddingVertical: 8,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "95%",
          shadowColor: "transparent", // iOS
          shadowOpacity: 0,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 0,
          elevation: 0, // Android
        },
        tabBarLabelStyle: { fontSize: 8 },   
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "الصفحة الرئيسية",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          headerShown: false,
          tabBarLabel: "بحث",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
        <Tabs.Screen
        name="Favorites"
        options={{
          headerShown: false,
          tabBarLabel: "المفضلة",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyTickets"
        options={{
          headerShown: false,
          tabBarLabel: "تذاكري",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ticket" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: "الملف الشخصي",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

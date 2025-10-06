import React from "react";
import { Text, View } from "react-native";
import {Header , Search , Body } from "@/app/components/home";


export default function Index() {
  return (
    <View className="page gap-4">
      <View className="flex flex-col w-full gap-4 pt-10  px-4 shadow-md">
        <Header />
      </View>
      <View className="flex-1">
        <Body />
      </View>
    </View>
  );
}

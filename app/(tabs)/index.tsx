import { Body, Hero } from "@/app/components/home";
import React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="page gap-8">
      <View className="flex flex-col w-full">
        <Hero />
      </View>
      <View className="flex-1">
        <Body />
      </View>
    </View>
  );
}

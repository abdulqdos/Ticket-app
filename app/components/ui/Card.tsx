import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Card() {
  return (
    <View className="border  border-grayLight/50 rounded-lg p-2">
      <View className="relative w-40 h-52 rounded-lg overflow-hidden ">
        <Image
          source={require("@/assets/images/profile.jpeg")}
          className="w-full h-full rounded-lg"
        />
        <Ionicons
          name="heart-outline"
          size={24}
          color={colors.black}
          className="absolute top-2 left-1    bg-grayLight/20 m-2  rounded-full"
        />
      </View>

      <Text className="mt-2">Event Name</Text>

      <Text className="text-lg font-semibold">$20</Text>
    </View>
  );
}

import { colors } from "@/constants/colors";
import { customer } from "@/data";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center px-4 bg-white rounded-2xl border-t border-l border-r border-b  border-textGray/20">
      <View className="flex-row items-center gap-2 py-2">
        <Image
          source={require("@/assets/images/profile.jpeg")}
          className="w-16 h-16 rounded-full border border-lightGray"
        />

        <View>
          <Text className="text-lg font-semibold text-gray-900">
            {customer.firstName} {customer.lastName}
          </Text>
          <Text className="text-sm text-gray-500">{customer.phone}</Text>
        </View>
      </View>

      <View className="bg-gray-100 p-3 rounded-full">
        <Ionicons
          name="notifications-outline"
          size={22}
          color={colors.textGray}
        />
      </View>
    </View>
  );
}

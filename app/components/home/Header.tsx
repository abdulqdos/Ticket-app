import { useUser } from "@/api/Auth/use-user";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

export default function Header() {
  const { data: user, isLoading } = useUser();

  if (isLoading) {
    return (
      <View className="flex-row justify-center items-center p-4">
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <View className="flex-row justify-between items-center px-4 bg-white rounded-2xl border border-textGray/20">
      <View className="flex-row items-center gap-2 py-2">
        <Image
          source={
            user?.profile_image
              ? { uri: user.profile_image }
              : require("@/assets/images/profile.jpg")
          }

          className="w-16 h-16 rounded-full border border-lightGray"
        />

        <View>
          <Text className="text-lg font-semibold text-gray-900">
            {user?.data?.first_name + " " + user?.data?.last_name || "مستخدم"}
          </Text>
          <Text className="text-sm text-gray-500">
            {user?.data?.phone || "لا يوجد رقم"}
          </Text>
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
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { colors , hexToRgba } from "@/constants/colors";
export default function Header() {
  return (
    <View className="flex-row justify-between items-center">
            <View className="flex-row gap-2 items-center">
                <View>
                    <Image
                    source={require("@/assets/images/profile.jpeg")}
                    className="w-20 h-20 rounded-full"
                    />
                </View>

                <View>
                    <Text> Full Name </Text>
                    <Text> Phone NUmber </Text>
                </View>
                </View>

            <Ionicons name="notifications-outline" size={24} color={colors.textGray} className="bg-grayLight/50 p-3 rounded-full"/>
    </View>
    
  );
}

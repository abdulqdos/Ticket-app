import React from "react";
import { Text, View } from "react-native";

export default function AuthHeader({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <View className="mb-6 gap-2">
      <Text className="text-primary text-2xl font-semibold  text-center">
        {title || "مرحبًا بك مجددًا"}
      </Text>
      <Text className="text-textGray text-center">
        {description || "سجل الدخول إلى حسابك"}
      </Text>
    </View>
  );
}

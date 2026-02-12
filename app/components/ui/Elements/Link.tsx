import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
type LinkProps = { title: string; url?: string, color?: string };

export default function Link({ title, url, color }: LinkProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push((url || "/(auth)/Register") as any)}
    >
      <Text className="text-primary text-lg">{title}</Text>
    </TouchableOpacity>
  );
}

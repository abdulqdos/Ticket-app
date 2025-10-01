import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { colors } from "@/constants/colors";
type LinkProps = { title: string; url?: string  , color?: string};

export default function Link({ title, url , color }: LinkProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push((url || "/(auth)/Register") as any)}
    >
      <Text  style={{
        color: color || colors.link,
        fontSize: 16, 
      }}>{title}</Text>
    </TouchableOpacity>
  );
}

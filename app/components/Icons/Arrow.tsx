import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Arrow({ url , size , color }: { url?: string , size?: number , color?: string}) {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="absolute top-16 left-4 w-12 h-12 rounded-full border border-gray-300 justify-center items-center bg-white"
      // @ts-ignore
      onPress={() => router.replace(url ? url : "/")}
    >
      <Ionicons name="arrow-forward-outline" size={size ? size : 24} color={color ? color : "gray"} />
    </TouchableOpacity>
  );
}

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

type BackArrowProps = {
  url?: string;
  size?: number;
  color?: string;
  classes?: string;
};

export default function BackArrow({
  url,
  size,
  color,
  classes,
}: BackArrowProps) {
  const router = useRouter();
  return (
    <TouchableOpacity
      className={
        `absolute top-10 left-4 w-10 h-10 rounded-full border border-gray-300 justify-center items-center bg-white z-20 ${classes}`
      }
      // @ts-ignore
      onPress={() => router.replace(url ? url : "/")}
    >
      <Ionicons
        name="arrow-forward-outline"
        size={size ? size : 24}
        color={color ? color : "gray"}
      />
    </TouchableOpacity>
  );
}

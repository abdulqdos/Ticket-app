import React from "react";
import { TouchableOpacity, View } from "react-native";
import { HeartIcon } from "react-native-heroicons/outline";
import { colors } from "@/constants/colors";

type HeartProps = {
  color?: string;
  size?: number;
  containerClassName?: string;
  buttonClassName?: string;
  onPress?: () => void;
  active?: boolean;
  position?: "absolute" | "relative";
};

export default function Heart({
  color = colors.black,
  size = 20,
  active = false,
  onPress,
  containerClassName = "",
  buttonClassName = "",
  position = "absolute",
}: HeartProps) {
  return (
    <View
      className={`${position} top-10 right-4 z-10 flex-row ${containerClassName}`}
    >
      <TouchableOpacity
        onPress={onPress}
        className={`rounded-full p-2 shadow ${
          active ? "bg-gray-100" : "bg-white"
        } ${buttonClassName}`}
      >
        <HeartIcon size={size} color={color} />
      </TouchableOpacity>
    </View>
  );
}

import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Button({title , handleSubmit}: {title: string, handleSubmit: () => void}) {
  return (
    <TouchableOpacity
      className="bg-primary rounded-2xl py-3 mt-6 shadow-md"
      onPress={handleSubmit}
    >
      <Text className="text-white text-center text-lg font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
}

import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Button({
  title,
  handleSubmit,
  disabled = false,
  classes = "",
}: {
  title: string;
  handleSubmit: () => void;
  disabled?: boolean;
  classes?: string;
}) {
  return (
    <TouchableOpacity
      className={
        "bg-primary disabled:bg-grayLight text-primary rounded-2xl py-3 mt-6" +
        " " +
        classes
      }
      onPress={handleSubmit}
      disabled={disabled}
    >
      <Text
        className={`text-white  text-center text-lg ${disabled ? "text-textGray" : "text-white"} `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

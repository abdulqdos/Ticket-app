import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function Input({
  data,
  setData,
  isError = false,
  placeholder,
  icon = "mail-outline",
  secureTextEntry = false,
}: {
  data: string;
  setData: (val: string) => void;
  isError?: boolean;
  placeholder: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  secureTextEntry?: boolean;
}) {
  return (
    <View
      className={`flex-row items-center border rounded-xl px-3 py-1 ${isError ? " border-red-500" : " border-gray-300"}`}
    >
      <TextInput
        className="flex-1 text-base"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        value={data}
        onChangeText={setData}
        keyboardType="default"
        textAlign="right"
      />

      <Ionicons name={icon} size={20} color="#999" />
    </View>
  );
}

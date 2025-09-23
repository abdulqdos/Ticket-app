import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Input({
  data,
  setData,
  placeholder,
  icon = "mail-outline"
}: {
  data: string;
  setData: (val: string) => void;
  placeholder: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
}) {
  return (
    <View className="flex-row items-center border border-secondary rounded-xl p-3">
      <TextInput
        className="flex-1 text-base"
        placeholder={placeholder}
        value={data}
        onChangeText={setData}
        keyboardType="email-address"
      />

      
      <Ionicons name={icon} size={20} color="#999" />
    </View>
  );
}
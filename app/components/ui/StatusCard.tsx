import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/constants/colors";
import type { IconProps } from "@expo/vector-icons/build/createIconSet";


type StatsCardProps = {
  iconName?:  string;
  iconColor?: string;
  count: number | string;
  label: string;
  bgIcon?: string;
};

export default function StatsCard({
  iconName,
  iconColor = colors.black,
  count,
  label,
  bgIcon = "#FFF9C4", // default light yellow
}: StatsCardProps) {
  return (
    <View className="items-center bg-white rounded-xl shadow-md px-4 py-6 mx-2 flex-1">
      <View className={`p-3 rounded-full mb-2`} style={{ backgroundColor: bgIcon }}>
       {/* @ts-ignore */}
        <Ionicons size={24} color={iconColor} name={iconName} />
      </View>
      <Text className="text-2xl font-bold text-black">{count}</Text>
      <Text className="text-gray-500 mt-1">{label}</Text>
    </View>
  );
}

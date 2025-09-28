import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function AuthFooter({
  title,
  url,
  urlTitle,
}: {
  title?: string;
  url?: string;
  urlTitle?: string;
}) {
  const router = useRouter();

  return (
    <View className="flex-row justify-center mt-4 gap-2">
      <Text className="text-textGray">{title}</Text>
      <TouchableOpacity
        onPress={() => router.replace((url ? url : "/(auth)") as any)}
      >
        <Text className="text-primary font-semibold">{urlTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

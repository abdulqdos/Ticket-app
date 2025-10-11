// src/components/ui/Widgets/HeaderSection.tsx
import { View, Text } from "react-native";


type HeaderSectionProps = {
  title?: string;
  description?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function  HeaderSection ({
  title,
  description,
  containerClassName,
  titleClassName,
  descriptionClassName,
} : HeaderSectionProps ) {
  return (
    <View className={`items-center   py-20 ${containerClassName}`}>
      <Text className="text-primary text-3xl font-bold mb-4 text-center">Tickets App</Text>

      <View className="my-6 gap-2">
        <Text className={`text-primary text-2xl font-semibold text-center ${titleClassName}`}>{title || "مرحبًا بك مجددًا"}</Text>
        <Text className={`text-textGray text-center ${descriptionClassName}`}>
          {description || "سجل الدخول إلى حسابك"}
        </Text>
      </View>
    </View>
  );
};



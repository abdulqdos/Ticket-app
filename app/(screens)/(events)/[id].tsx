import BackArrow from "@/app/components/ui/Icons/BackArrow";
import { events } from "@/data";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowRightIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const event = events.find((e) => e.id === Number(id));

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Event Image */}
      <View className="relative w-full h-96">
        <Image
          source={{ uri: "https://picsum.photos/600/400" }}
          className="w-full h-full"
          resizeMode="cover"
        />

        
          <BackArrow url="/(tabs)" />
        

        {/* Top Action Buttons */}
        <View className="absolute top-10 right-4 flex-row space-x-3 z-10">
          <TouchableOpacity className="bg-white p-3 rounded-full shadow">
            <HeartIcon size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Image Dots */}
        <View className="absolute bottom-4 left-0 right-0 flex-row justify-center space-x-2">
          <View className="w-2 h-2 rounded-full bg-white" />
          <View className="w-2 h-2 rounded-full bg-gray-400" />
          <View className="w-2 h-2 rounded-full bg-gray-400" />
        </View>
      </View>

      {/* Event Info Card */}
      <View className="mt-6 p-4 bg-white rounded-t-3xl shadow-lg space-y-4">
        <Text className="text-2xl font-bold">{event?.name || "اسم الحدث"}</Text>

        {/* Rating and reviews */}
        <Text className="text-gray-500 text-sm">⭐ 4.0 | 20 نظر</Text>

        {/* Price / Tickets */}
        <Text className="text-xl font-bold text-black">{"مجاني"}</Text>

        {/* Description */}
        <Text className="text-gray-700">
          {event?.description || "وصف الحدث..."}
        </Text>

        {/* Additional Options */}
        <View className="space-y-2">
          <Text className="font-semibold">سایز / نوع التذاكر</Text>
          <TouchableOpacity className="bg-gray-100 p-3 rounded-xl">
            <Text>انتخاب سایز / نوع</Text>
          </TouchableOpacity>
        </View>

        {/* Register / Buy Button */}
        <TouchableOpacity className="bg-black p-4 rounded-xl mt-4">
          <Text className="text-white text-center font-bold text-lg">
            اضافه کردن به سبد خرید
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

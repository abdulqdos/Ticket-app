import {BackArrow , Heart} from "@/app/components/ui/Icons";
import { colors } from "@/constants/colors";
import { events } from "@/data";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";


export default function EventPage() {
  const { id } = useLocalSearchParams();
  const event = events.find((e) => e.id === Number(id));
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="relative w-full h-96">
        <Image
          source={{ uri: "https://picsum.photos/600/400" }}
          className="w-full h-full"
          resizeMode="cover"
        />

      <BackArrow url="/(tabs)" color={colors.black} classes="border-transparent" />
        

      {/* Heart Icon  */}
        <Heart />

      {/** Scroll Image Bg  */}
        <View className="absolute bottom-4 left-0 right-0 flex-row justify-center space-x-2">
          <View className="w-2 h-2 rounded-full bg-white" />
        </View>
      </View>

      <View className="mt-6 p-4 bg-white rounded-t-3xl shadow-lg space-y-4">
        <Text className="text-2xl font-bold text-black">
          {event?.name || "اسم الحدث"}
        </Text>

        <Text className="text-textGray leading-6">
          {event?.description || "لا يوجد وصف متاح."}
        </Text>

        {event?.ticketTypes?.length > 0 && (
          <View>
            <Text className="font-semibold text-lg my-4">أنواع التذاكر</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexDirection: "row", gap: 16 }}
            >
              {event.ticketTypes.map((ticket) => (
                <TouchableOpacity
                  key={ticket.id}
                  onPress={() => setSelectedTicket(ticket)}
                  className={`p-4 rounded-2xl border w-44 ${
                    selectedTicket?.id === ticket.id
                      ? "border-black bg-gray-100"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <Text className="font-bold text-base text-black">
                    {ticket.name}
                  </Text>
                  <Text className="text-gray-600 mt-1">
                    السعر: {ticket.price} دينار
                  </Text>
                  <Text className="text-gray-500 mt-1">
                    المتاح: {ticket.quantity}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}

        <TouchableOpacity
          disabled={!selectedTicket}
          className={`p-4 rounded-xl mt-4 ${
            selectedTicket ? "bg-black" : "bg-gray-400"
          }`}
        >
          <Text
            className="text-white text-center font-bold text-lg"
            disabled={!selectedTicket}
          >
            {selectedTicket
              ? `احجز ${selectedTicket?.name}`
              : "اختر نوع التذكرة"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  Text,
  View
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
const { width } = Dimensions.get("window");

const images = [
  { uri: "https://picsum.photos/800/400?1", title: "حفل توزيع الجوائز" },
  { uri: "https://picsum.photos/800/400?2", title: "مهرجان الصيف" },
  { uri: "https://picsum.photos/800/400?3", title: "معرض الكتاب" },
];

export default function ImageSlider() {
  const ref = useRef(null);

  return (
    <View className="px-4">
      <Carousel
        ref={ref}
        width={width - 32}
        height={(width - 32) / 2}
        data={images}
        autoPlay
        autoPlayInterval={5000}
        loop
        renderItem={({ item }) => (
          <View
            className="rounded-2xl bg-white"
            style={{
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            }}
          >
            <View className="rounded-2xl overflow-hidden w-full h-full">
              <Image
                source={{ uri: item.uri }}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
              <View className="absolute bottom-0 w-full bg-black/40 p-3 items-center justify-center">
                <Text className="text-white text-lg font-bold text-center">
                  {item.title}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}


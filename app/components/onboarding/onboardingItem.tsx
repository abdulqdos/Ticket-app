import { type OnboardingItemType } from "@/constants/onboarding";
import React from "react";
import { Dimensions, Image, Text, View } from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  item: OnboardingItemType;
};


const OnboardingItem = ({ item }: Props) => {
  return (
    <View
      style={{ width, backgroundColor: item.backgroundColor }}
      className="flex flex-col"
    >

      {/* TEXT SIDE */}
      <View
        style={{ flex: 1, padding: 20, backgroundColor: item.backgroundColor }}
        className="top- h-[20%] ml-40 mt-40"
      >
        <Text className="text-4xl font-bold text-primary mb-3">{item.title}</Text>
        <Text className="text-base text-primary/80 leading-relaxed">{item.description}</Text>
      </View>


      {/* IMAGE SIDE */}
      <View className="flex-1  justify-center items-center mr-40 mb-40">
        <Image
          source={item.image || require("@/assets/images/logo.png")}
          style={{ width: "100%", height: "80%" }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default OnboardingItem;
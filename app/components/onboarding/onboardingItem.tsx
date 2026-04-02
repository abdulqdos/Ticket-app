import { type OnboardingItemType } from "@/constants/onboarding";
import React from "react";
import { Dimensions, Text, View , Image} from "react-native";

import Svg, { SvgUri } from "react-native-svg";
const { width } = Dimensions.get("window");

type Props = {
  item: OnboardingItemType;
};




const OnboardingItem = ({ item }: Props) => {
  return (
    <View
      style={{ width, backgroundColor: item.backgroundColor }}
      className="flex-1 flex-row"
    >
      {/* IMAGE SIDE */}
      <View className="w-2/3 justify-center items-center">
        {/* {item.image ? (
          <SvgUri
            width="100%"
            height="80%"
            uri={item.image}
          />
        ) : null} */}
        <Image
          source={item.image || require("@/assets/images/logo.png")}
          style={{ width: "100%", height: "80%" }}
          resizeMode="contain"
        />
      </View>

      {/* TEXT SIDE */}
      <View className="w-1/3 justify-center px-4">
        <Text className="text-3xl font-bold text-black mb-3">
          {item.title}
        </Text>

        <Text className="text-base text-gray-700 leading-relaxed">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingItem;
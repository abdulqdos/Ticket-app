import React from "react";
import { Animated, Dimensions, View } from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  data: any[];
  scrollX: Animated.Value;
  currentIndex?: number;
};

const Paginator: React.FC<Props> = ({ data, scrollX, currentIndex }) => {
  return (
    <View className="flex-row h-4 justify-center items-center mt-4">
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            testID="paginator-dot"
            key={i.toString()}
            style={{
              width: dotWidth,
              opacity,
            }}
            className={`h-2 rounded-full mx-1 ${
              currentIndex === i ? "bg-primary" : "bg-textTertiary"
            }`}
          />
        );
      })}
    </View>
  );
};

export default Paginator;
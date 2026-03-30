import { ONBOARDING, type OnboardingItemType } from "@/constants/onboarding";
import React, { useRef, useState } from "react";
import {
    Animated,
    Dimensions,
    FlatList,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import OnboardingItem from "./onboardingItem";

const { width } = Dimensions.get("window");

type Props = {
    onDone?: () => void;
};

const Onboarding: React.FC<Props> = ({ onDone }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef<FlatList>(null);

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0]?.index ?? 0);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < ONBOARDING.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            onDone?.();
        }
    };

    const isLastScreen = currentIndex === ONBOARDING.length - 1;

    return (
        <View className="flex-1 bg-white">
            <View className="flex-1">
                <Animated.FlatList
                    data={ONBOARDING}
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item: OnboardingItemType) => item.id.toString()}
                    onScroll={Animated.event(
                        [
                            { 
                                nativeEvent: 
                                {
                                     contentOffset: { x: scrollX }
                                }
                            }
                        ],
                        { useNativeDriver: false }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            <View className="absolute bottom-[50px] left-0 right-0 justify-center items-center px-5">
                <View className="flex-row justify-center items-center mb-[30px]">
                    {ONBOARDING.map((_, i) => {
                        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                        const dotWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [10, 20, 10],
                            extrapolate: "clamp",
                        });

                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.5, 1, 0.5],
                            extrapolate: "clamp",
                        });

                        return (
                            <Animated.View
                                style={[{ width: dotWidth, opacity, backgroundColor: 'white' }]}
                                className="h-2.5 rounded-full mx-2"
                                key={i.toString()}
                            />
                        );
                    })}
                </View>

                <TouchableOpacity activeOpacity={0.8} onPress={scrollTo} className="bg-white py-[15px] px-[30px] rounded-[30px] w-full items-center shadow-md shadow-black/10">
                    <Text className="text-black text-[18px] font-bold">
                        {isLastScreen ? "Get Started" : "Next"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Onboarding;

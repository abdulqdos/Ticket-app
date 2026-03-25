import { colors } from "@/constants/colors";
import { ONBOARDING } from "@/constants/onboarding";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef, useState } from "react";
import {
    Animated,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Paginator from "./Paginator";
import OnboardingItem from "./onboardingItem";

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

    const skipToEnd = () => {
        onDone?.();
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.grayLight, colors.white]}
                style={styles.background}
            />

            {currentIndex < ONBOARDING.length - 1 && (
                <TouchableOpacity style={styles.skipButtonTop} onPress={skipToEnd}>
                    <Text style={styles.skipTextTop}>تصفح كضيف</Text>
                </TouchableOpacity>
            )}

            <FlatList
                data={ONBOARDING}
                renderItem={({ item, index }) => (
                    <OnboardingItem
                        item={item}
                        index={index}
                        currentIndex={currentIndex}
                    />
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                bounces={false}
                keyExtractor={(item) => item.id.toString()}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                scrollEventThrottle={32}
                ref={slidesRef}
            />

            <View style={styles.footer}>
                <Paginator
                    data={ONBOARDING}
                    scrollX={scrollX}
                    currentIndex={currentIndex}
                />

                <View style={styles.buttonsContainer}>
                    {currentIndex === ONBOARDING.length - 1 ? (
                        <TouchableOpacity
                            style={styles.getStartedButton}
                            onPress={onDone}
                            activeOpacity={0.8}
                        >
                            <LinearGradient
                                colors={[colors.primary, colors.grayLight]}
                                style={styles.gradientButton}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={styles.getStartedText}>ابدأ التصفح</Text>
                                <Ionicons name="rocket-outline" size={20} color="white" />
                            </LinearGradient>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.navigationRow}>
                            <TouchableOpacity
                                style={styles.nextButton}
                                onPress={scrollTo}
                                activeOpacity={0.8}
                            >
                                <LinearGradient
                                    colors={[colors.primary, colors.success]}
                                    style={styles.gradientCircle}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                >
                                    <Ionicons name="arrow-forward" size={24} color="white" />
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.skipButton}
                                onPress={skipToEnd}
                                activeOpacity={0.7}
                            >
                                <Text style={styles.skipText}>تصفح كضيف</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    background: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    skipButtonTop: {
        position: "absolute",
        top: 60,
        right: 24,
        zIndex: 10,
        padding: 12,
    },
    skipTextTop: {
        color: colors.grayLight,
        fontSize: 16,
        fontWeight: "600",
    },
    footer: {
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
    },
    buttonsContainer: {
        marginTop: 32,
    },
    navigationRow: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
    },
    skipButton: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    skipText: {
        color: colors.grayLight,
        fontSize: 16,
        fontWeight: "600",
    },
    nextButton: {
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    gradientCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
    },
    getStartedButton: {
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    gradientButton: {
        paddingVertical: 20,
        paddingHorizontal: 32,
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    getStartedText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "700",
        marginLeft: 8,
    },
});

export default Onboarding;
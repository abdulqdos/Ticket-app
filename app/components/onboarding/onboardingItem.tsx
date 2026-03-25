import { colors } from "@/constants/colors";
import { type OnboardingItemType } from "@/constants/onboarding";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

type Props = {
  item: OnboardingItemType;
  index: number;
  currentIndex: number;
};

const OnboardingItem: React.FC<Props> = ({ item, index, currentIndex }) => {
  const isActive = index === currentIndex;

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.backgroundPattern}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <View style={[styles.circle, styles.circle3]} />
      </View>

      <View style={styles.iconWrapper}>
        <LinearGradient
          colors={[colors.white, colors.textGray]}
          style={styles.iconGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.iconContainer}>
            <Ionicons
              name={item.icon}
              size={100}
              color={item.color}
              style={styles.icon}
            />
          </View>
        </LinearGradient>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        {isActive && (
          <View style={styles.progressIndicator}>
            <View style={styles.progressBar}>
              <LinearGradient
                colors={[colors.primary, colors.grayLight]}
                style={[styles.progressFill, { width: `${(index + 1) * 25}%` }]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>
            <Text style={styles.progressText}>{index + 1} / 4</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    height,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  backgroundPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    position: "absolute",
    borderRadius: 500,
    backgroundColor: "rgba(0, 180, 179, 0.03)",
  },
  circle1: {
    width: 300,
    height: 300,
    top: -150,
    right: -100,
  },
  circle2: {
    width: 200,
    height: 200,
    bottom: 100,
    left: -50,
  },
  circle3: {
    width: 150,
    height: 150,
    top: "40%",
    right: "20%",
  },
  iconWrapper: {
    marginBottom: 48,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 8,
  },
  iconGradient: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(0, 180, 179, 0.1)",
  },
  icon: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.black,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 40,
  },
  description: {
    fontSize: 18,
    color: colors.grayLight,
    textAlign: "center",
    lineHeight: 28,
    marginBottom: 32,
  },
  progressIndicator: {
    alignItems: "center",
    marginTop: 24,
  },
  progressBar: {
    width: 120,
    height: 4,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 2,
    marginBottom: 8,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    color: colors.grayLight,
    fontWeight: "600",
  },
});
import { type OnboardingItemType } from "@/constants/onboarding";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

type Props = {
  item: OnboardingItemType;
};

const OnboardingItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={[styles.container, { backgroundColor: item.color }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
  },
  description: {
    fontWeight: "400",
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});
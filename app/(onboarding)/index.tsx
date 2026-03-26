import  Onboarding  from "@/app/components/onboarding/Onboarding";
import { useRouter } from "expo-router";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";

const OnboardingScreen: React.FC = () => {
  const router = useRouter();

  const handleDone = () => {
    router.replace("/(auth)/Login");
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Onboarding onDone={handleDone} />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
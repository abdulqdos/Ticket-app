import { ToastProvider } from "@/app/components/toast/ToastProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { I18nManager } from "react-native";
import "./global.css";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function RootLayout() {
  const [queryClient] = useState(() => new QueryClient());
  useEffect(() => {
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("overlay-swipe");
    NavigationBar.setBackgroundColorAsync("#FF0000");
    NavigationBar.setButtonStyleAsync("dark");
  }, []);
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="splash" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </ToastProvider>
  );
}


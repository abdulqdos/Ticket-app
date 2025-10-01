import {
  Tajawal_200ExtraLight,
  Tajawal_300Light,
  Tajawal_400Regular,
  Tajawal_500Medium,
  Tajawal_700Bold,
  Tajawal_800ExtraBold,
  Tajawal_900Black,
  useFonts,
} from "@expo-google-fonts/tajawal";
import { Redirect } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Tajawal_200ExtraLight,
    Tajawal_300Light,
    Tajawal_400Regular,
    Tajawal_500Medium,
    Tajawal_700Bold,
    Tajawal_800ExtraBold,
    Tajawal_900Black,
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="orange" />
        <Text style={{ fontFamily: "Tajawal_500Medium", marginTop: 10 }}>
          جاري التحميل...
        </Text>
      </View>
    );
  }

  return <Redirect href="/splash" />;
}

// import * as NavigationBar from 'expo-navigation-bar';
// import { useEffect } from 'react';

// export default function App() {
//   useEffect(() => {
//     NavigationBar.setVisibilityAsync("hidden"); // يخفي شريط المثلث/المربع
//     NavigationBar.setBehaviorAsync("overlay-swipe"); // يخليه يرجع بالسحب فقط
//   }, []);

//   return (
//     <YourNavigation />
//   );
// }

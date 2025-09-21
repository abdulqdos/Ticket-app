// redirect to splash

import { Text, View } from "react-native";
import {
    Redirect
} from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Redirect href='/splash'>
        </Redirect>
    </View>
  );
}
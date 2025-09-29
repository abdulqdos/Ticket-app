import React from "react";
import { ScrollView, Text, View } from "react-native";
import {colors} from "@/constants/colors";
import { Card , Link } from "@/app/components/ui";

type SectionProps = {
    title: string;
    horizontal?: boolean;
 };

 export default function Section({title ,  horizontal = true}: SectionProps) {
  return (
    <View className="flex-col gap-4 min-w-full px-4">
      <View className="flex-row justify-between items-center">
        <Text>{title}</Text>
        <Link title="الكل" url="/(tabs)/Explore" color={colors.textGray}/>
      </View>

        <ScrollView horizontal={horizontal}  showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row flex-wrap justify-between gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
    </ScrollView>
    </View>
  );
}

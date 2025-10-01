import React from "react";
import { ScrollView, Text, View } from "react-native";
import {colors} from "@/constants/colors";
import { Card , Link } from "@/app/components/ui";
import SectionHeader from "../ui/SectionHeader";

type SectionProps = {
    title: string;
    horizontal?: boolean;
 };

 export default function Section({title ,  horizontal = true}: SectionProps) {
  return (
    <View className="flex-col gap-4 min-w-full px-4">
    
      <SectionHeader  title={title} url="/(tabs)/Explore" linkColor={colors.textGray} />

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

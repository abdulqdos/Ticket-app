import { Card } from "@/app/components/Events";
import { colors } from "@/constants/colors";
import React from "react";
import { ScrollView, View } from "react-native";
import SectionHeader from "../ui/Elements/SectionHeader";

type SectionProps = {
  horizontal?: boolean;
  data: Array<any>;
};

export default function Section({
  horizontal = true,
  data,
}: SectionProps) {
  return (
    <View className="flex-col gap-4 min-w-full px-4">
      <ScrollView
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row flex-wrap justify-between gap-4">
          {data.map((item) => (
            <Card key={item.id} event={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

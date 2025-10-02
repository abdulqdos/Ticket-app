import { Card } from "@/app/components/ui";
import { colors } from "@/constants/colors";
import React from "react";
import { ScrollView, View } from "react-native";
import SectionHeader from "../ui/SectionHeader";

type SectionProps = {
  title: string;
  horizontal?: boolean;
  data: Array<any>;
};

export default function Section({
  title,
  horizontal = true,
  data,
}: SectionProps) {
  return (
    <View className="flex-col gap-4 min-w-full px-4">
      <SectionHeader
        title={title}
        url="/(tabs)/Explore"
        linkColor={colors.textGray}
      />
      <ScrollView
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex flex-row flex-wrap justify-between gap-4">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

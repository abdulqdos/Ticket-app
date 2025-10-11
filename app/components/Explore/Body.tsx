import Section from "@/app/components/Explore/Section";
import { Event } from "@/types";
import React from "react";
import { ScrollView, View , Text } from "react-native";

type BodyProps = {
  events: Event[];
};

export default function Body({ events }: BodyProps) {
  return (
    <ScrollView className="flex flex-col gap-6 pb-20">
      {events.length === 0 ? (
        <View className="flex-1 items-center justify-center mt-10">
          <Text className="text-textGray text-base">No events found</Text>
        </View>
      ) : (
        <Section horizontal={false} data={events} />
      )}
    </ScrollView>
  );
}

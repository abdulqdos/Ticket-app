import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {  Image, Text, View } from "react-native";
import {Button} from "@/app/components/ui/Form";
export default function Card({ key, data }: { key: Number; data: any }) {
  return (
    <View className="border  border-grayLight/50 rounded-lg p-2">
      <View className="relative w-40 h-52 rounded-lg overflow-hidden ">
        <Image
          source={{ uri: "https://picsum.photos/100/100?random=" + Math.random() }}
          className="w-full h-full rounded-lg"
        />
        <Ionicons
          name="heart-outline"
          size={24}
          color={colors.black}
          className="absolute top-2 left-1    bg-grayLight/20 m-2  rounded-full"
        />
      </View>

      <Text className="mt-2">{data.name}</Text>

      {(() => {
        const prices = data.ticketTypes.map((t: { price: any; }) => t.price); 
        const min = Math.min(...prices);
        const max = Math.max(...prices);


        if(data.ticketTypes.length === 0 ) return <Text className="text-lg font-semibold"> {data.ticketTypes.price}</Text>
        
        if (min === max) {
          return <Text className="text-lg font-semibold">{min} LYD</Text>;
        }

        return (
          <Text className="text-lg font-semibold">
            {min} - {max} LYD
          </Text>
        );
      })()}
      <Button title={"Apply Now"} handleSubmit={() => console.log("hay")} classes="mt-3 rounded-md"/>
    </View>
  );
}

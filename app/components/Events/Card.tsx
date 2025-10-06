import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import {  Image, Text, View } from "react-native";
import {Button} from "@/app/components/ui/Form";
import Price from "./Price";

type CardProps = {
  event: any;
  key: Number;
};

export default function Card({ key, event }:  CardProps ) {
  return (
    <View className="bg-white rounded-2xl  border border-gray-200 p-3 w-44">
    
    <View className="relative w-full h-40 rounded-xl overflow-hidden">
      <Image
        source={{
          uri: "https://picsum.photos/200/200?random=" + Math.random(),
        }}
        className="w-full h-full"
      />

      <View className="absolute top-2 right-2 bg-white/70 rounded-full p-[2px]">
        <Ionicons name="heart-outline" size={20} color={colors.black} />
      </View>
    </View>

    <Text className="mt-3 text-base font-semibold text-gray-900" numberOfLines={1}>
      {event.name}
    </Text>


    <Price prices={event.ticketTypes.map((t: any) => t.price)} event={event} />


    <Button
      title="Apply Now"
      handleSubmit={() => console.log("hay")}
      classes="mt-4 rounded-lg"
    />
  </View>
  )
}
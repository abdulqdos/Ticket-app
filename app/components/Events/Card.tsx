import { Button } from "@/app/components/ui/Form";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { Heart } from "../ui/Icons";
import Price from "./Price";

type CardProps = {
  event: any;
  key: Number;
};

export default function Card({ key, event }: CardProps) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(`/(screens)/(events)/${event.id}`)}
      className="bg-white rounded-2xl  border border-gray-200 p-3 w-44">
      <View className="relative w-full h-40 rounded-xl overflow-hidden">
        <Image
          source={{
            uri: "https://picsum.photos/200/200?random=" + Math.random(),
          }}
          className="w-full h-full"
        />

        <Heart containerClassName="top-2 right-1" buttonClassName="p-1" />
      </View>

      <Text
        className="mt-3 text-base font-semibold text-gray-900"
        numberOfLines={1}
      >
        {event.attributes?.name || event.name || "Event name"}
      </Text>

      <Price
        prices={(event.includes?.ticketTypes || event.ticketTypes || []).map(
          (t: any) => t.attributes?.price || t.price
        )}
        event={event}
      />

      <Button
        title="إحجز الان"
        handleSubmit={() => router.push(`/(screens)/(events)/${event.id}`)}
        classes="mt-4 rounded-lg"
      />
    </Pressable>
  );
}

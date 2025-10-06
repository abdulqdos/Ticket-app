import React from "react";
import { Text } from "react-native";

type PriceProps = { prices: number[]; event: any };

export default function Price({ prices, event }: PriceProps) {
  if (event.ticketTypes.length === 0) {
    return (
      <Text className="text-sm text-gray-500 mt-1">No tickets available</Text>
    );
  }

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return (
    <Text className="text-lg font-bold text-blue-600 mt-1">
      {min === max ? `${min} LYD` : `${min} - ${max} LYD`}
    </Text>
  );
}

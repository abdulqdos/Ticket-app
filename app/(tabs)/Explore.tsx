import { Body } from "@/app/components/Explore";
import { Input } from "@/app/components/ui/Form";
import { events } from "@/data";
import React, { useState } from "react";
import { View } from "react-native";
export default function Explore() {
  const [search, setSearch] = useState("");

  const filteredEvents =
    search.trim() === ""
      ? [] 
      : events.filter((event) =>
          event.name.toLowerCase().includes(search.toLowerCase())
        );
  return (
    <View className="page">
      <View className="flex flex-col w-full gap-4 pt-10  px-4 shadow-md">
        <Input
          data={search}
          setData={setSearch}
          placeholder={"ادخل اسم الحدث"}
          icon="search"
          classes="mb-4"
        />
      </View>
      <View className="flex-1">
        <Body events={filteredEvents} />
      </View>
    </View>
  );
}

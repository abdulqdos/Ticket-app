import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {Input} from "@/app/components/ui/Form";
export default function Search() {
  const [search, setSearch] = useState('');
  return (
    <View className="w-full my-2">
      <Input 
        data={search} 
        setData={setSearch} 
        placeholder={''} 
        icon='search'
      />
    </View>
  );
}
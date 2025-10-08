import { View, Text } from 'react-native'
import React from 'react'

type InfoRowProps = {
    title: string,
    value: string,
}

export default function InfoRow({title , value}: InfoRowProps) {
  return (
    <View className="bg-white p-4 rounded-xl border border-textGray/20">
          <Text className="text-gray-500">{title}</Text>
          <Text className="text-black font-bold">{value}</Text>
        </View>
  )
}
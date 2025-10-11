import { View, Text } from 'react-native'
import React from 'react'

export default function ErrorMessage({message}: {message: string}) {
  return (
    <View className="py-1">
       <Text className="text-red-500 text-center">{message}</Text>
    </View>
  )
}
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageSlider from './ImageSlider'

export default function Hero() {
  return (
    <SafeAreaView className='overflow-hidden mt-4'>
      <ImageSlider />
    </SafeAreaView>
  )
}

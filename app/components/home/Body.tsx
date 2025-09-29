import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Section from './Section'

export default function Body() {
  return (
    <ScrollView className="flex flex-col gap-6 pb-20">
        <Section title={'الأكثر طلبا'} horizontal={true}  />
        <Section title={'الـأحدث'} horizontal={true}  />
        <Section title={'عروضنا'} horizontal={false}  />
    </ScrollView>
  )
}
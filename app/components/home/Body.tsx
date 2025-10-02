import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Section from './Section'
import { events } from '@/data'

export default function Body() {
  return (
    <ScrollView className="flex flex-col gap-6 pb-20">
        <Section title={'الأكثر طلبا'} horizontal={true} data={events}  />
        <Section title={'الـأحدث'} horizontal={true}  data={events}/>
        <Section title={'عروضنا'} horizontal={false}  data={events}/>
    </ScrollView>
  )
}
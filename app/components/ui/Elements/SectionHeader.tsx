import { View, Text } from 'react-native'
import React from 'react'
import { Link } from '@/app/components/ui/Elements'
import { colors } from '@/constants/colors'

type SectionHeaderProps = {
    title: string;
    url: string;
    linkColor?: string;  
}
export default function SectionHeader({title , url , linkColor}: SectionHeaderProps) {
  return (
     <View className="flex-row justify-between items-center pt-4">
        <Text className='text-2xl font-bold'>{title}</Text>
        <Link title="الكل" url={url} color={linkColor || colors.textGray}/>
    </View>
  )
}
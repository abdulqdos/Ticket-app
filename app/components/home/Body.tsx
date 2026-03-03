import { useEvents } from '@/api/Event/useEvents';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import Section from './Section';

export default function Body() {
  const { data: userQuery, isLoading } = useEvents();
  const events = userQuery?.data;

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center pt-20">
        <ActivityIndicator size="large" color="#FF0000" />
      </View>
    );
  }

  return (
    <ScrollView className="flex flex-col gap-6 pb-20">
      <Section title={'الأكثر طلبا'} horizontal={true} data={events} />
      <Section title={'الـأحدث'} horizontal={true} data={events} />
      <Section title={'عروضنا'} horizontal={false} data={events} />
    </ScrollView>
  )
}
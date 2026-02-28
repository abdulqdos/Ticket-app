import { useEvents } from '@/api/Event/useEvents';
import { ScrollView } from 'react-native';
import Section from './Section';


export default function Body() {
  const { data: userQuery, isLoading } = useEvents();
  const events = userQuery?.data || [];

  console.log(events);
  return (

    <ScrollView className="flex flex-col gap-6 pb-20">
      <Section title={'الأكثر طلبا'} horizontal={true} data={events} />
      <Section title={'الـأحدث'} horizontal={true} data={events} />
      <Section title={'عروضنا'} horizontal={false} data={events} />
    </ScrollView>
  )
}
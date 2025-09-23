import { TextInput } from 'react-native'



export default function Input({data , setData , placeholder}: {data: string, setData: (val: string) => void , placeholder: string}) {
  return (
   <TextInput
             className="border border-secondary rounded-xl p-3 text-base"
             placeholder={placeholder}
             value={data}
             onChangeText={setData}
             keyboardType="email-address"
           />
  );
}
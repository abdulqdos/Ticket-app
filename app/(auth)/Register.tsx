import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Input from '../components/Input';


export default function Register() {
  const [phone, setPhone] = useState("");
  const [email , setEmail] = useState("");
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleRegister = () => {
      console.log("Phone:", phone, "Password:", password);
      // هنا تضيف منطق تسجيل الدخول (API Call)
    };
  
      const router = useRouter(); 
  
    return (
      <View className="flex-1 bg-white justify-center px-6">
        <Text className="text-primary text-3xl font-bold text-center mb-10">
          Tickets App
        </Text>
  
        <Text className="text-primary text-xl font-semibold mb-6 text-center">
          إنشاء حساب جديد
        </Text>
  
        <View className="space-y-4">
          <Input
            data={phone}
            setData={() => setPhone}
            placeholder={"رقم الهاتف"}
            icon='phone-portrait-outline'
          />



          <Input
            data={email}
            setData={() => setEmail}
            placeholder={"البريد الالكتروني"}
          />

          <Input
            data={firstName}
            setData={() => setFirstName}
            placeholder={"الاسم الاول"}
            icon="person-outline"
          />

          <Input
            data={lastName}
            setData={() => setLastName}
            placeholder={"الاسم الاخير"}
            icon="person-outline"
          />

  
          <Input
            data={password}
            setData={() => setPassword}
            placeholder={"كلمة المرور"}
            icon="lock-closed-outline"
          />

          <Input
            data={confirmPassword}
            setData={() => setConfirmPassword}
            placeholder={"تاكيد كلمة المرور"}
            icon="lock-open-outline"
          />
  
        </View>
  
        <Button title={"إنشاء حساب"} handleSubmit={ () => handleRegister  } />
  
        <View className="flex-row justify-center mt-4">
          <TouchableOpacity onPress={() => router.replace("/(auth)/Login")}>
            <Text className="text-primary font-semibold">تسجيل الدخول </Text>
          </TouchableOpacity>
          <Text className="text-gray-500">لديك حساب ؟ </Text>
        </View>
      </View>
      );
}
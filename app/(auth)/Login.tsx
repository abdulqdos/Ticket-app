import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
import { useRouter } from "expo-router";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
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
        مرحبا بك مجددًا
      </Text>

      <View className="space-y-4">
        <Input
          data={phone}
          setData={() => setPhone}
          placeholder={"رقم الهاتف"}
          icon="phone-portrait-outline"

        />

        <Input
          data={password}
          setData={() => setPassword}
          placeholder={"كلمة المرور"}
          icon="key-outline"
        />

      </View>

      <Button title={"تسجيل الدخول"} handleSubmit={ () => handleLogin  } />

      <View className="flex-row justify-center mt-4">
        <TouchableOpacity onPress={() => router.replace("/(auth)/Register")}>
          <Text className="text-primary font-semibold">إنشاء حساب</Text>
        </TouchableOpacity>
        <Text className="text-gray-500">ليس لديك حساب؟ </Text>
      </View>
    </View>
  );
}

import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Customer } from "../../constants/customer";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";

export default function Login() {
  const [phone, setPhone] = useState(Customer.phone);
  const [password, setPassword] = useState(Customer.passowrd);
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    
    // APi Calling but Fn lets make it hard coded one

    // Clear all previous errors
    setPhoneError("");
    setPasswordError("");

    // Validation
    if (!phone || !password) {
      setPhoneError(!phone ? "رقم الهاتف مطلوب" : "");
      setPasswordError(!password ? "كلمة المرور مطلوبة" : "");
      return;
    } else if (password.length < 6) {
      setPasswordError("كلمة المرور يجب ان تكون اكثر من 6 احرف");
      return;
    } else if (typeof phone !== "string" || !/^\d{10,15}$/.test(phone)) {
      setPhoneError("رقم الهاتف غير صالح");
      return;
    } else {
      setPhoneError("");
      setPasswordError("");
    }

    // Api Calling
    console.log("Phone:", phone, "Password:", password);
    if (phone !== "0916050468" || password !== "123456") {
      setPhoneError("رقم الهاتف او كلمة المرور غير صحيحة");
      setPasswordError("رقم الهاتف او كلمة المرور غير صحيحة");
      return ;
    }

    // Redirect
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <Text className="text-primary text-3xl font-bold text-center mb-10">
        Tickets App
      </Text>

      <Text className="text-primary text-xl font-semibold mb-6 text-center">
        مرحبا بك مجددًا
      </Text>

      <View className="flex-row justify-center pb-2">
        <Text className="text-gray-500">هل نسيت كلمة المرور ؟ </Text>
        <TouchableOpacity onPress={() => router.replace("/(auth)/ForgotPassword")}>
          <Text className="text-link underline font-semibold">استعادة كلمة المرور</Text>
        </TouchableOpacity>
      </View>
      
      <View className="flex gap-4">
        <View>
          <Input
            data={phone}
            setData={setPhone}
            isError={phoneError !== ""}
            placeholder={"رقم الهاتف"}
            icon="phone-portrait-outline"
          />

          {phoneError !== "" && <ErrorMessage message={phoneError} />}
        </View>

        <View>
          <Input
            data={password}
            setData={setPassword}
            isError={passwordError !== ""}
            placeholder={"كلمة المرور"}
            icon="key-outline"
            secureTextEntry={true}
          />

        {passwordError !== "" && <ErrorMessage message={passwordError} />}
        </View>
      </View>

      <Button title={"تسجيل الدخول"} handleSubmit={handleLogin} />

      <View className="flex-row justify-center mt-4">
        <Text className="text-gray-500">ليس لديك حساب؟ </Text>
        <TouchableOpacity onPress={() => router.replace("/(auth)/Register")}>
          <Text className="text-primary font-semibold">إنشاء حساب</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

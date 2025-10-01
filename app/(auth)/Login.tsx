import { AuthFooter, AuthHeader } from "@/app/components/Auth";
import { Button, ErrorMessage, Input } from "@/app/components/ui/Form";
import Link from "@/app/components/ui/Link";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Customer } from "@/constants/customer";

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

    // // Validation
    // if (!phone || !password) {
    //   setPhoneError(!phone ? "رقم الهاتف مطلوب" : "");
    //   setPasswordError(!password ? "كلمة المرور مطلوبة" : "");
    //   return;
    // } else if (password.length < 6) {
    //   setPasswordError("كلمة المرور يجب ان تكون اكثر من 6 احرف");
    //   return;
    // } else if (typeof phone !== "string" || !/^\d{10,15}$/.test(phone)) {
    //   setPhoneError("رقم الهاتف غير صالح");
    //   return;
    // } else {
    //   setPhoneError("");
    //   setPasswordError("");
    // }

    // // Api Calling
    // console.log("Phone:", phone, "Password:", password);
    // if (phone !== "0916050468" || password !== "123456") {
    //   setPhoneError("رقم الهاتف او كلمة المرور غير صحيحة");
    //   setPasswordError("رقم الهاتف او كلمة المرور غير صحيحة");
    //   return;
    // }

    // Redirect
    router.replace("/(tabs)");
  };

  return (
    <View className="relative flex-1 justify-center bg-white px-6">
      <AuthHeader title="مرحبًا بك مجددًا" description="سجل الدخول إلى حسابك" />

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

        <View className="flex-row justify-center py-2">
          <Text className="text-gray-500">هل نسيت كلمة المرور ؟ </Text>
          
          <Link title="استعادة كلمة المرور" url="/(auth)/ForgotPassword"/>
        </View>
      </View>

      <Button title={"تسجيل الدخول"} handleSubmit={handleLogin} />
      <AuthFooter
        title="ليس لديك حساب ؟"
        urlTitle="إنشاء حساب"
        url="/(auth)/Register"
      />
    </View>
  );
}

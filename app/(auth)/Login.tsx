import { useLogin } from "@/app/api/Auth/use-login";
import { AuthFooter, AuthHeader } from "@/app/components/Auth";
import Link from "@/app/components/ui/Elements/Link";
import { Button, ErrorMessage, Input } from "@/app/components/ui/Form";
import { Customer } from "@/constants/customer";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
export default function Login() {
  const [phone, setPhone] = useState(Customer.phone);
  const [password, setPassword] = useState(Customer.passowrd);
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

const { mutate, isPending, error } = useLogin({
    onSuccess: (data) => {
      Alert.alert("نجاح", `أهلاً بك: ${data.message}`);
      // هنا يمكنك التنقل لصفحة أخرى مثلاً: navigation.navigate('Home')
    },
    onError: (err) => {
      Alert.alert("خطأ في الدخول", err.message );
      
    }
  });
  const handleLogin = () => {
    // APi Calling but Fn lets make it hard coded one

    // Clear all previous errors
    setPhoneError("");
    setPasswordError("");

    // // Api Calling
    mutate({ phone, password });
    // Redirect
    // router.replace("/(tabs)");
  };

  return (
    <View className="relative flex-1 justify-center bg-white px-6">
      <AuthHeader title="مرحبًا بك مجددًا" description="سجل الدخول إلى حسابك" containerClassName="py-6" />

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

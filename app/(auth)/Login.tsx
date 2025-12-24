import { useLogin } from "@/app/api/Auth/use-login";
import { AuthFooter, AuthHeader } from "@/app/components/Auth";
import Link from "@/app/components/ui/Elements/Link";
import { Button, ErrorMessage, Input } from "@/app/components/ui/Form";
import { Customer } from "@/constants/customer";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
export default function Login() {
  const [phone, setPhone] = useState(Customer.phone);
  const [password, setPassword] = useState(Customer.passowrd);
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const { mutate, isPending, error } = useLogin({
    onSuccess: (data) => {
      // i will ad d toast later

      // redirect
      router.replace("/(tabs)");
    },
    onError: (error) => {
      // Alert.alert("خطأ في تسجيل الدخول", ;
    }
  });

  const serverErrors = (error as any)?.serverErrors;

  const handleLogin = () => {
    // Clear all previous errors
    setPhoneError("");
    setPasswordError("");

    // Api Calling
    mutate({ phone, password });

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

          {serverErrors?.phone && (
            <ErrorMessage message={serverErrors.phone[0]} />
          )}
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
          {serverErrors?.password && (
            <ErrorMessage message={serverErrors.password[0]} />
          )}
        </View>

        <View className="flex-row justify-center py-2">
          <Text className="text-gray-500">هل نسيت كلمة المرور ؟ </Text>
          <Link title="استعادة كلمة المرور" url="/(auth)/ForgotPassword" />
        </View>
      </View>

      {error && !serverErrors && (
        <ErrorMessage message={error.message} />
      )}
      <Button title={"تسجيل الدخول"} handleSubmit={handleLogin} />
      <AuthFooter
        title="ليس لديك حساب ؟"
        urlTitle="إنشاء حساب"
        url="/(auth)/Register"
      />
    </View>
  );
}

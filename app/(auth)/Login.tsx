import { useLogin } from "@/api/Auth/use-login";
import { AuthFooter, AuthHeader } from "@/app/components/Auth";
import Link from "@/app/components/ui/Elements/Link";
import { Button, ErrorMessage, Input } from "@/app/components/ui/Form";
import { useToast } from "@/app/components/toast/ToastProvider";
import { Customer } from "@/constants/customer";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";
export default function Login() {
  const [phone, setPhone] = useState(Customer.phone);
  const [password, setPassword] = useState(Customer.passowrd);
  const router = useRouter();
  const { show } = useToast();

 
  const { mutate, isPending, error } = useLogin({ 
    onSuccess: (data) => {
      show("تم تسجيل الدخول بنجاح", "success", "مرحبًا");
      router.replace("/(tabs)");
    },
    onError: (error) => {
      show(error?.message, "error", "خطأ");
    },
  });

  const serverErrors = (error as any)?.serverErrors;

  const handleLogin = () => {
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
            isError={serverErrors?.phone}
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
            isError={serverErrors?.password}
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

      {
        error && !serverErrors && (
          <ErrorMessage message={error.message} />
        )
      }
      <Button title={"تسجيل الدخول"} handleSubmit={handleLogin} />
      <AuthFooter
        title="ليس لديك حساب ؟"
        urlTitle="إنشاء حساب"
        url="/(auth)/Register"
      />
    </View >
  );
}

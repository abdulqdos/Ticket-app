import { useRegister } from "@/app/api/Auth/use-register";
import { Button, ErrorMessage, Input } from "@/app/components/ui/Form";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { AuthFooter, AuthHeader } from "../components/Auth";

export default function Register() {
  // Form Inputs
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const { mutate, isPending, error } = useRegister({
    onSuccess: (data) => {
      // i will ad d toast later

      // redirect
      router.replace("/(tabs)");
    },
  });

  const serverErrors = (error as any)?.serverErrors;

  const handleRegister = () => {
    // Api Calling
    mutate({ phone, password, first_name: firstName, last_name: lastName, email, password_confirmation: confirmPassword });
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <AuthHeader
        title="إنشاء حساب جديد"
        description="خطوات بسيطة لحجز تذكرتك"
        containerClassName="py-6"
      />

      <ScrollView className="flex flex-col gap-6 pb-20 max-h-64">
        <View className="mb-2">
          <Input
            data={firstName}
            setData={setFirstName}
            isError={serverErrors?.first_name}
            placeholder="الاسم الاول"
            icon="person-outline"
          />
          {serverErrors?.first_name && (
            <ErrorMessage message={serverErrors?.first_name[0]} />
          )}
        </View>

        <View className="mb-2">
          <Input
            data={lastName}
            setData={setLastName}
            isError={serverErrors?.last_name}
            placeholder="الاسم الاخير"
            icon="person-outline"
          />
          {serverErrors?.last_name && (
            <ErrorMessage message={serverErrors?.last_name[0]} />
          )}
        </View>

        <View className="mb-2">
          <Input
            data={phone}
            setData={setPhone}
            isError={serverErrors?.phone}
            placeholder="رقم الهاتف"
            icon="phone-portrait-outline"
          />
          {serverErrors?.phone && (
            <ErrorMessage message={serverErrors?.phone[0]} />
          )}
        </View>

        <View className="mb-2">
          <Input
            data={email}
            setData={setEmail}
            isError={serverErrors?.email}
            placeholder="البريد الالكتروني (اختياري)"
            icon="mail-outline"
          />
          {serverErrors?.email && (
            <ErrorMessage message={serverErrors?.email[0]} />
          )}
        </View>

        <View className="mb-2">
          <Input
            data={password}
            setData={setPassword}
            isError={serverErrors?.password}
            placeholder="كلمة المرور"
            icon="lock-closed-outline"
            secureTextEntry={true}
          />
          {serverErrors?.password && (
            <ErrorMessage message={serverErrors?.password[0]} />
          )}
        </View>

        <View className="mb-2">
          <Input
            data={confirmPassword}
            setData={setConfirmPassword}
            isError={serverErrors?.password}
            placeholder="تأكيد كلمة المرور"
            icon="lock-open-outline"
            secureTextEntry={true}
          />
        </View>
      </ScrollView>

      <Button title={"إنشاء حساب"} handleSubmit={handleRegister} />
      <AuthFooter
        title="لديك حساب ؟"
        urlTitle="تسجيل دخول"
        url="/(auth)/Login"
      />
    </View>
  );
}

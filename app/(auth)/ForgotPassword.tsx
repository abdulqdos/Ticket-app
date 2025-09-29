import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import {AuthHeader} from "@/app/components/Auth";
import{ Button , ErrorMessage , Input }from "@/app/components/ui/Form";
import {BackArrow} from "@/app/components/ui/Icons";


export default function ForgotPassword() {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    setPhoneError("");

    if (typeof phone !== "string" || !/^\d{10,15}$/.test(phone)) {
      setPhoneError("رقم الهاتف غير صالح");
      return;
    }

    router.push("/(auth)/VerifyCode");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6 min-w-full">
      <BackArrow url={"/(auth)/Login"} />
      <AuthHeader
        title="يرجى إدخال رقم الهاتف"
        description="لاتقلق سنساعدك في إنشاء كلمة مرور جديدة"
      />

      <View className="flex-row justify-center mt-4">
        <View className="flex gap-2 min-w-full px-2">
          <View>
            <Text className="text-gray-700 font-semibold mb-2">رقم الهاتف</Text>

            <Input
              data={phone}
              setData={setPhone}
              isError={phoneError !== ""}
              placeholder={"أدخل رقم الهاتف"}
              icon="phone-portrait-outline"
            />

            {phoneError !== "" && <ErrorMessage message={phoneError} />}
          </View>

          <Button
            title={"استعادة كلمة المرور"}
            handleSubmit={handleLogin}
            disabled={phone === ""}
          />
        </View>
      </View>
    </View>
  );
}

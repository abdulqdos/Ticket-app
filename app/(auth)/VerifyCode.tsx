import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import {  AuthHeader } from "../components/Auth";
import{ Button , ErrorMessage  }from "@/app/components/ui/Form";
import {BackArrow} from "@/app/components/ui/Icons";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    setCodeError("");

    if (code !== "123456") {
      setCodeError("الكود غير صحيح يرجى إعادة المحاولة");
      return;
    }

    router.push("/(auth)/ResetPassword");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6 min-w-full">
      <BackArrow url={"/(auth)/ForgotPassword"} />

      <AuthHeader
        title="أدخل رمز التحقق"
        description="لقد قمنا بإرسال رمز التحقق إلى رقم هاتفك"
      />

      <View className="flex-row justify-center mt-4">
        <View className="flex gap-2 min-w-full px-2">
          <View>
            {/* <Input
                data={phone}
                setData={setPhone}
                isError={phoneError !== ""}
                placeholder={"أدخل رقم الهاتف"}
                icon="phone-portrait-outline"
              /> */}
            <OtpInput
              // dirction="rtl"
              numberOfDigits={6}
              onTextChange={setCode}
              focusColor="blue"
              theme={{
                inputsContainerStyle: {
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: 10,
                },
                pinCodeContainerStyle: {
                  borderColor: codeError ? "red" : "#D9D9D9",
                },
                focusedPinCodeContainerStyle: {
                  borderColor: codeError ? "red" : "blue",
                },
              }}
            />

            {codeError !== "" && <ErrorMessage message={codeError} />}
          </View>

          <Button
            title={"استعادة كلمة المرور"}
            handleSubmit={handleLogin}
            disabled={code === ""}
          />
        </View>
      </View>
    </View>
  );
}

import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Arrow from "../components/Icons/Arrow";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    setCodeError("");

    if (code !== "123456") {
      setCodeError("الكود غير صحيح يرجى إعادة المحاولة");
    }

      router.push("/(auth)/ResetPassword");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6 min-w-full">
      <Arrow url={"/(auth)/ForgotPassword"} />

      <Text className="text-primary text-3xl font-bold text-center mb-10">
        Tickets App
      </Text>

      <View className="flex-row justify-center mt-4">
        <View
          className="flex gap-2 min-w-full px-2"
        >
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

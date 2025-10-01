import { Button, ErrorMessage, Input } from "@/app/components/ui/Form";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Customer } from "../../types/customer";
import { AuthHeader } from "../components/Auth";

export default function ResetPassword() {
  const [password, setPassword] = useState(Customer.passowrd);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // APi Calling but Fn lets make it hard coded one

    // Clear all previous error
    setPasswordError("");

    // Validation
    if (password.length < 6) {
      setPasswordError("كلمة المرور يجب ان تكون اكثر من 6 احرف");
      return;
    } else if (password !== confirmPassword) {
      setPasswordError("كلمة مرور غير متطابقة");
      return;
    } else {
      setPasswordError("");
    }

    // Api Calling
    console.log("Password:", password);

    // Redirect
    router.replace("/(auth)/Login");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <AuthHeader
        title="تغيير كلمة المرور"
        description="أدخل كلمة مرور جديدة لحسابك"
      />
      <View className="flex gap-4">
        <View>
          <Input
            data={password}
            setData={setPassword}
            isError={passwordError !== ""}
            placeholder={"كلمة المرور الجديدة"}
            icon="lock-closed-outline"
            secureTextEntry={true}
          />
        </View>

        <View>
          <Input
            data={confirmPassword}
            setData={setConfirmPassword}
            isError={passwordError !== ""}
            placeholder={"تأكيد كلمة المرور الجديدة"}
            icon="lock-open-outline"
            secureTextEntry={true}
          />

          {passwordError !== "" && <ErrorMessage message={passwordError} />}
        </View>
      </View>

      <Button title={"تغير كلمة المرور"} handleSubmit={handleLogin} />
    </View>
  );
}

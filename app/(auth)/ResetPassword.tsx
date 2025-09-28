import { useRouter } from "expo-router";
import  { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Customer } from "../../constants/customer";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import Input from "../components/Input";

export default function ResetPassword() {
    const [password, setPassword] = useState(Customer.passowrd);
    const [confirmPassword , setConfirmPassword] = useState("");
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
      } else if (password !== confirmPassword ) {
        setPasswordError("كلمة مرور غير متطابقة");
        return;
      } else {
        setPasswordError("");
      }
  
      // Api Calling
      console.log( "Password:", password);
     
  
      // Redirect
      router.replace("/(auth)/Login");
    };
  
    return (
      <View className="flex-1 bg-white justify-center px-6">
        <Text className="text-primary text-3xl font-bold text-center mb-10">
          Tickets App
        </Text>
  
        <Text className="text-primary text-xl font-semibold mb-6 text-center">
          كلمة المرور الجديدة
        </Text>
  
      
        <View className="flex gap-4">
         <View>
            <Input
              data={password}
              setData={setPassword}
              isError={passwordError !== ""}
              placeholder={"كلمة المرور الجديدة"}
              icon="key-outline"
              secureTextEntry={true}
            />
          </View>
  
          <View>
            <Input
              data={confirmPassword}
              setData={setPassword}
              isError={passwordError !== ""}
              placeholder={"تأكيد كلمة المرور الجديدة"}
              icon="key-outline"
              secureTextEntry={true}
            />
  
          {passwordError !== "" && <ErrorMessage message={passwordError} />}
          </View>
        </View>
  
        <Button title={"تغير كلمة المرور"} handleSubmit={handleLogin} />
      </View>
    );
}
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { AuthFooter, AuthHeader } from "../components/Auth";
import{ Button , ErrorMessage , Input }from "@/app/components/ui/Form";

export default function Register() {
  // Form Inputs
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error Messages
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const router = useRouter();

  const handleRegister = () => {
    //  API Calling but for now lets make it hard coded one

    // Clear all previous errors
    setPhoneError("");
    setEmailError("");
    setFirstNameError("");
    setLastNameError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    // First Name
    if (!firstName.trim()) {
      setFirstNameError("الاسم الأول مطلوب");
      isValid = false;
    }

    // Last Name
    if (!lastName.trim()) {
      setLastNameError("الاسم الأخير مطلوب");
      isValid = false;
    }

    // Phone
    const phoneStr = String(phone);
    if (!/^\d{10,15}$/.test(phoneStr)) {
      setPhoneError("رقم الهاتف غير صالح (يجب أن يكون بين 10 و 15 رقم)");
      isValid = false;
    }

    // Email
    if (!email.trim()) {
      setEmailError("البريد الإلكتروني مطلوب");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("البريد الإلكتروني غير صحيح");
      isValid = false;
    }

    // Password
    if (password.length < 6) {
      setPasswordError("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
      isValid = false;
    }

    // Confirm Password
    if (confirmPassword !== password) {
      setConfirmPasswordError("كلمتا المرور غير متطابقتين");
      isValid = false;
    }

    if (!isValid) return;

    // Redirect
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <AuthHeader
        title="إنشاء حساب جديد"
        description="خطوات بسيطة لحجز تذكرتك"
      />

      <View className="flex gap-4">
        <View>
          <Input
            data={firstName}
            setData={setFirstName}
            isError={firstNameError !== ""}
            placeholder="الاسم الاول"
            icon="person-outline"
          />
          {firstNameError !== "" && <ErrorMessage message={firstNameError} />}
        </View>

        <View>
          <Input
            data={lastName}
            setData={setLastName}
            isError={lastNameError !== ""}
            placeholder="الاسم الاخير"
            icon="person-outline"
          />
          {lastNameError !== "" && <ErrorMessage message={lastNameError} />}
        </View>

        <View>
          <Input
            data={phone}
            setData={setPhone}
            isError={phoneError !== ""}
            placeholder="رقم الهاتف"
            icon="phone-portrait-outline"
          />
          {phoneError !== "" && <ErrorMessage message={phoneError} />}
        </View>

        <View>
          <Input
            data={email}
            setData={setEmail}
            isError={emailError !== ""}
            placeholder="البريد الالكتروني"
            icon="mail-outline"
          />
          {emailError !== "" && <ErrorMessage message={emailError} />}
        </View>

        <View>
          <Input
            data={password}
            setData={setPassword}
            isError={passwordError !== ""}
            placeholder="كلمة المرور"
            icon="lock-closed-outline"
            secureTextEntry={true}
          />
          {passwordError !== "" && <ErrorMessage message={passwordError} />}
        </View>

        <View>
          <Input
            data={confirmPassword}
            setData={setConfirmPassword}
            isError={confirmPasswordError !== ""}
            placeholder="تأكيد كلمة المرور"
            icon="lock-open-outline"
            secureTextEntry={true}
          />
          {confirmPasswordError !== "" && (
            <ErrorMessage message={confirmPasswordError} />
          )}
        </View>
      </View>

      <Button title={"إنشاء حساب"} handleSubmit={handleRegister} />
      <AuthFooter
        title="لديك حساب ؟"
        urlTitle="تسجيل دخول"
        url="/(auth)/Login"
      />
    </View>
  );
}

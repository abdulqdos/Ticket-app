import { useUser } from "@/api/Auth/use-user";
import { useEditProfile } from "@/api/Profile/use-edit-profile";
import { useToast } from "@/app/components/toast/ToastProvider";
import { Button, ErrorMessage, Input } from "@/app/components/ui/Form";
import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function EditProfile() {
    const router = useRouter();
    const { show } = useToast();

    const { data: userQuery } = useUser();
    const user = userQuery?.data;

    // State for the form fields
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [backup_phone, setBackupPhone] = useState("");
    const [email, setEmail] = useState("");
    const [profile_image, setProfileImage] = useState("");

    // Populate state with old data when user loads
    useEffect(() => {
        if (user) {
            setFirstName(user.first_name || "");
            setLastName(user.last_name || "");
            setPhone(user.phone || "");
            setBackupPhone(user.backup_phone || "");
            setEmail(user.email || "");
            setProfileImage(user.profile_image || "");
        }
    }, [user]);

    const { mutate: editProfile, isPending, error } = useEditProfile({
        onSuccess: () => {
            show("تم التحديث!", "success", "تم تعديل بيانات حسابك بنجاح");
            router.back();
        },
    });

    const handleSave = () => {
        const payload: any = {
            first_name,
            last_name,
            phone,
            backup_phone,
            email,
        };

        // Only send profile_image if it has changed
        if (profile_image !== user?.profile_image) {
            payload.profile_image = profile_image;
        }

        editProfile(payload);
    };

    return (
        <View className="flex-1 bg-white px-6">
            <View className="mt-20 gap-2">
                <Text className={`text-primary text-2xl font-semibold text-center`}>
                    تعديل بيانات الحساب
                </Text>
            </View>

            <View className="flex-col gap-4 my-6">
                {/* Profile Image */}
                <View className="items-center mb-4">
                    <TouchableOpacity
                        onPress={() => {
                            // TODO: add image picker logic
                            show("اختر صورة من جهازك", "info");
                        }}
                        className="w-24 h-24 rounded-full overflow-hidden border border-lightGray justify-center items-center bg-gray-100"
                    >
                        {profile_image ? (
                            <Image
                                source={{ uri: profile_image }}
                                className="w-full h-full rounded-full"
                            />
                        ) : (
                            <Ionicons name="camera-outline" size={28} color={colors.textGray} />
                        )}
                    </TouchableOpacity>
                    <Text className="text-gray-500 mt-2">تغيير الصورة الشخصية</Text>
                </View>

                {/* Form Fields with old data */}
                <Input
                    data={first_name}
                    setData={setFirstName}
                    placeholder="الاسم الأول"
                    icon="person-outline"
                />

                <Input
                    data={last_name}
                    setData={setLastName}
                    placeholder="الاسم الأخير"
                    icon="person-outline"
                />

                <Input
                    data={phone}
                    setData={setPhone}
                    placeholder="رقم الهاتف"
                    icon="phone-portrait-outline"
                />

                <Input
                    data={backup_phone}
                    setData={setBackupPhone}
                    placeholder="رقم احتياطي"
                    icon="call-outline"
                />

                <Input
                    data={email}
                    setData={setEmail}
                    placeholder="البريد الإلكتروني"
                    icon="mail-outline"
                />

                {/* Error Message */}
                {error && <ErrorMessage message={error.message} />}

                {/* Save Button */}
                <Button
                    title={isPending ? "جاري الحفظ..." : "حفظ التغييرات"}
                    handleSubmit={handleSave}
                    disabled={isPending}
                />
            </View>
        </View>
    );
}

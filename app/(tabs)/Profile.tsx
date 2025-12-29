import { useUser } from "@/api/Auth/use-user";
import { useLogout } from "@/api/Auth/useLogout";
import { Header } from "@/app/components/home";
import { InfoRow, StatusCard } from "@/app/components/ui/Elements";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { Alert, ScrollView, Text, View } from "react-native";
import { Button } from "../components/ui/Form";

export default function ProfilePage() {
  const router = useRouter();

  // 1. Initialize the logout mutation
  const { mutate: logout, isPending } = useLogout({
    onSuccess: () => {
      // Navigate to login only after successful server response
      router.replace("/(auth)/Login");
    },
    onError: (error) => {
      Alert.alert("خطأ", "فشل تسجيل الخروج، يرجى المحاولة مرة أخرى.");
      console.error(error);
    }
  });

  const { data: user, isLoading } = useUser();

  console.log("User Data in ProfilePage:", user);

  const handleLogout = () => {
    logout();
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="flex flex-col w-full gap-4 pt-10 px-4 shadow-md">
        <Header />
      </View>

      <View className="flex-row justify-around mt-6 px-4">
        <StatusCard
          iconName={"ticket-outline"}
          count={user?.ticketsCount}
          label={"My Tickets"}
          iconColor={colors.yellow}
        />
        <StatusCard
          iconName={"heart-outline"}
          count={user?.data.favoritesCount}
          label={"Favorites"}
          iconColor={colors.yellow}
        />
        <StatusCard
          iconName={"star-outline"}
          count={user?.data.points}
          label={"Point"}
          iconColor={colors.yellow}
        />
      </View>

      <View className="mt-6 px-4 gap-4">
        <Text className="text-lg font-semibold text-black">بيانات الحساب </Text>
        <InfoRow title="الاسم" value={user?.data.first_name + ' ' + user?.data.last_name} />
        <InfoRow title="البريد الالكتروني" value={user?.data.email} />
        <InfoRow title="رقم الهاتف" value={user?.data.phone} />

        <Button
          title={isPending ? "جاري تسجيل الخروج..." : "تسجيل الخروج"}
          handleSubmit={handleLogout}
          classes={`${isPending ? "bg-gray-400" : "bg-red-500"} mt-2`}
          disabled={isPending}
        />
      </View>
    </ScrollView>
  );
}


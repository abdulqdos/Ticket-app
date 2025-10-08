import { Header } from "@/app/components/home";
import { InfoRow, StatusCard } from "@/app/components/ui/Elements";
import { colors } from "@/constants/colors";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/ui/Form";

import { useRouter } from "expo-router";

export default function ProfilePage() {
  const user = {
    name: "عبدالقدوس",
    email: "abdu@example.com",
    phone: "0916000010",
    avatar: "https://i.pravatar.cc/150?img=4",
    ticketsCount: 5,
    favoritesCount: 3,
    points: 120,
  };

  const router = useRouter();
  const handleLogout = () => {  router.replace("/(auth)/Login")};
 
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex flex-col w-full gap-4 pt-10  px-4 shadow-md">
        <Header />
      </View>

      {/* Quick Stats */}
      <View className="flex-row justify-around mt-6 px-4">
        <StatusCard
          iconName={"ticket-outline"}
          count={user.ticketsCount}
          label={"My Tickets"}
          iconColor={colors.yellow}
        />
        <StatusCard
          iconName={"heart-outline"}
          count={user.favoritesCount}
          label={"Favorites"}
          iconColor={colors.yellow}
        />
        <StatusCard
          iconName={"star-outline"}
          count={user.points}
          label={"Point"}
          iconColor={colors.yellow}
        />
      </View>

      {/* Account Section */}
      <View className="mt-6 px-4 gap-4">
        <Text className="text-lg font-semibold text-black">بيانات الحساب </Text>
        <InfoRow title="الاسم" value={user.name} />
        <InfoRow title="البريد الالكتروني" value={user.email} />
        <InfoRow title="رقم الهاتف" value={user.phone} />

        <Button
          title={"تسجيل الخروج"}
          handleSubmit={handleLogout}
          classes="bg-red-500 mt-2"
        />
      </View>
    </ScrollView>
  );
}

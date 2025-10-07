import { Header } from "@/app/components/home";
import StatusCard from "@/app/components/ui/StatusCard";
import { colors } from "@/constants/colors";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfilePage() {
  const user = {
    name: "Abdu Adel",
    email: "abdu@example.com",
    avatar: "https://i.pravatar.cc/150?img=4",
    ticketsCount: 5,
    favoritesCount: 3,
    points: 120,
  };

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

      {/* Tabs */}
      <View className="flex-row justify-around mt-6 border-b border-gray-200">
        <TouchableOpacity className="py-3">
          <Text className="font-semibold text-black">My Tickets</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3">
          <Text className="font-semibold text-black">Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-3">
          <Text className="font-semibold text-black">Account</Text>
        </TouchableOpacity>
      </View>

      {/* Account Section */}
      <View className="mt-6 px-4 space-y-4">
        <Text className="text-lg font-semibold text-black">Account Info</Text>
        <View className="bg-white p-4 rounded-xl shadow">
          <Text className="text-gray-500">Name</Text>
          <Text className="text-black font-bold">{user.name}</Text>
        </View>
        <View className="bg-white p-4 rounded-xl shadow">
          <Text className="text-gray-500">Email</Text>
          <Text className="text-black font-bold">{user.email}</Text>
        </View>
        <TouchableOpacity className="bg-red-500 p-4 rounded-xl">
          <Text className="text-white text-center font-bold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

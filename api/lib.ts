import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const BASE_URL = Platform.OS === 'web'
  ? "http://localhost:9000"
  : process.env.EXPO_PUBLIC_API_URL;

export const apiFetch = async (
  endpoint: string,
  options: any = {},
  returnJson: boolean = true,
  requireAuth: boolean = false
) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    ...options.headers,
  };
  if (requireAuth) {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  const finalOptions: RequestInit = {
    ...options,
    headers,
  };

  if (finalOptions.body && typeof finalOptions.body === "object") {
    finalOptions.body = JSON.stringify(finalOptions.body);
  }

  const res = await fetch(`${BASE_URL}/${endpoint}`, finalOptions);

  // if (res.status === 401) {
  //   // await AsyncStorage.removeItem("userToken");
  // }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const error: any = new Error(data?.message || "حدث خطأ ما");
    error.serverErrors = data?.errors;
    error.status = res.status;
    throw error;
  }

  return data;
};
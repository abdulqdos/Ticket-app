import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "../lib";

type LogoutResponse = {
    message: string;
};

export function useLogout(
    options?: UseMutationOptions<LogoutResponse, Error, void>
) {
    const queryClient = useQueryClient();

    return useMutation<LogoutResponse, Error, void>({
        mutationFn: async () => {
            try {
                return await apiFetch(
                    "api/customers/logout",
                    { method: "POST" },
                    true,
                    true
                );
            } catch (error: any) {
                if (error.status === 401 || error.status === 403) {
                    // i will add toast notification here later
                    return { message: "Success" };
                }
                throw error;
            }
        },

        onSuccess: async (data, variables, context) => {
            queryClient.clear();
            await AsyncStorage.removeItem("userToken");
            options?.onSuccess?.(data, variables, context);
        },

        onError: async (error, variables, context) => {
            queryClient.clear();
            await AsyncStorage.removeItem("userToken");
            options?.onError?.(error, variables, context);
        },
        ...options,
    });
}
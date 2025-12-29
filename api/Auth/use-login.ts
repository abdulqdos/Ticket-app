import AsyncStorage from '@react-native-async-storage/async-storage'; // import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQueryClient, type UseMutationOptions } from "@tanstack/react-query";
import { apiFetch } from "../lib";

type LoginInput = { phone: string; password: string };
type LoginResponse = {
  message: string;
  data: {
    token: string;
  }
};

export function useLogin(
  options?: UseMutationOptions<LoginResponse, Error, LoginInput>
) {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, Error, LoginInput>({
    ...options,
    mutationFn: async ({ phone, password }) => {
      const res = await apiFetch("api/customers/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, password }),
      }, true);


      let data: LoginResponse;

      if (res instanceof Response) {
        data = await res.json();
      } else {
        data = res as LoginResponse;
      }

      return data;
    },



    onSuccess: async (data) => {
      await AsyncStorage.setItem("userToken", data.data.token);
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      options?.onSuccess?.(data, {}, undefined);

    },

    onError: (error, variables, onMutateResult, context) => {
      options?.onError?.(error, variables, onMutateResult, context);
    },
  });
}

